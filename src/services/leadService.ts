/**
 * Quantum Mesh Lead Dispatch & Tracking Service
 * 
 * Supports:
 * 1. Google Sheets Webhook (Direct logging + Gmail instant dispatch to quantumesh.ai@gmail.com)
 * 2. Web3Forms (Instant zero-server email to quantumesh.ai@gmail.com)
 * 3. Offline / Local browser storage backup (Zero-loss persistence)
 */

export interface LeadPayload {
  formType: 
    | 'Contact Page Inquiry' 
    | 'Project Quote Request' 
    | 'Live Demo Request' 
    | 'Newsletter Subscription' 
    | 'Career Application';
  fullName?: string;
  companyName?: string;
  email: string;
  phone?: string;
  industry?: string;
  product?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  position?: string;
  experienceYears?: string;
  portfolio?: string;
}

export interface StoredLead extends LeadPayload {
  id: string;
  submittedAt: string;
  status: 'synced' | 'local_only' | 'pending';
}

export const PRIMARY_ADMIN_EMAIL = 'quantumesh.ai@gmail.com';

/**
 * Submit lead to Google Sheets + Email Webhook and back up locally
 */
export const submitLead = async (
  payload: LeadPayload
): Promise<{ success: boolean; message?: string }> => {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const leadRecord: StoredLead = {
    ...payload,
    id: `qm_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    submittedAt: timestamp,
    status: 'pending',
  };

  // 1. Zero-Loss Local Storage Persistence (Stored immediately in browser)
  try {
    const existingRaw = localStorage.getItem('quantum_mesh_leads');
    const leads: StoredLead[] = existingRaw ? JSON.parse(existingRaw) : [];
    leads.unshift(leadRecord);
    localStorage.setItem('quantum_mesh_leads', JSON.stringify(leads.slice(0, 200)));
  } catch (err) {
    console.warn('[LeadService] Could not store lead in localStorage:', err);
  }

  let delivered = false;

  // 2. Dispatch to Web3Forms (Instant direct email to quantumesh.ai@gmail.com)
  const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (web3formsKey) {
    try {
      const w3fRes = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          from_name: 'Quantum Mesh Lead Engine',
          subject: `🔥 New Lead: ${payload.fullName || 'Client'} - ${payload.product || payload.formType}`,
          name: payload.fullName || 'Not specified',
          email: payload.email,
          phone: payload.phone || 'Not provided',
          company: payload.companyName || 'N/A',
          industry: payload.industry || 'N/A',
          product: payload.product || payload.position || 'General Inquiry',
          scope: payload.projectType || payload.experienceYears || 'Standard',
          budget: payload.budget || 'Flexible',
          message: payload.message || 'No custom message',
          replyto: payload.email,
        }),
      });
      if (w3fRes.ok) {
        delivered = true;
      }
    } catch (err) {
      console.warn('[LeadService] Web3Forms dispatch failed:', err);
    }
  }

  // 3. Dispatch to Google Apps Script Webhook (Google Sheets + Gmail)
  const webhookUrl = 
    import.meta.env.VITE_LEADS_WEBHOOK_URL || 
    import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL ||
    (typeof window !== 'undefined' && (window as unknown as { __QM_WEBHOOK__?: string }).__QM_WEBHOOK__);

  if (webhookUrl) {
    try {
      // Note: text/plain is used for Google Apps Script to bypass CORS preflight restrictions
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          ...payload,
          recipientEmail: PRIMARY_ADMIN_EMAIL,
          submittedAt: timestamp,
          sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
        }),
      });

      if (response.ok) {
        delivered = true;
      }
    } catch (err) {
      console.error('[LeadService] Google Apps Script webhook error:', err);
    }
  }

  if (delivered) {
    leadRecord.status = 'synced';
    updateLocalLeadStatus(leadRecord.id, 'synced');
    return { success: true };
  }

  // If no webhook or API key is active yet, simulate a realistic async response
  await new Promise((resolve) => setTimeout(resolve, 800));
  leadRecord.status = 'local_only';
  updateLocalLeadStatus(leadRecord.id, 'local_only');

  return { 
    success: true, 
    message: 'Lead captured locally in CRM. Connect Google Sheet Webhook or Web3Forms key to receive live emails.' 
  };
};

function updateLocalLeadStatus(id: string, status: StoredLead['status']) {
  try {
    const existingRaw = localStorage.getItem('quantum_mesh_leads');
    if (!existingRaw) return;
    const leads: StoredLead[] = JSON.parse(existingRaw);
    const index = leads.findIndex((l) => l.id === id);
    if (index !== -1) {
      leads[index].status = status;
      localStorage.setItem('quantum_mesh_leads', JSON.stringify(leads));
    }
  } catch {
    // Non-critical
  }
}

/**
 * Retrieve all locally captured leads
 */
export const getStoredLeads = (): StoredLead[] => {
  try {
    const existingRaw = localStorage.getItem('quantum_mesh_leads');
    return existingRaw ? JSON.parse(existingRaw) : [];
  } catch {
    return [];
  }
};

/**
 * Clear all stored leads
 */
export const clearStoredLeads = (): void => {
  try {
    localStorage.removeItem('quantum_mesh_leads');
  } catch {
    // Non-critical
  }
};

/**
 * Export all leads to CSV (opens cleanly in Google Sheets & Excel)
 */
export const exportLeadsToCSV = (): void => {
  const leads = getStoredLeads();
  if (leads.length === 0) {
    alert('No leads recorded yet in this browser.');
    return;
  }

  const headers = [
    'Submitted At',
    'Form Type',
    'Full Name',
    'Company',
    'Email',
    'Phone',
    'Industry',
    'Product / Service',
    'Project Type',
    'Budget',
    'Message / Requirements',
    'Status'
  ];

  const escapeCSV = (str?: string) => {
    if (!str) return '""';
    return `"${str.replace(/"/g, '""').replace(/\n/g, ' ')}"`;
  };

  const rows = leads.map((l) => [
    escapeCSV(l.submittedAt),
    escapeCSV(l.formType),
    escapeCSV(l.fullName),
    escapeCSV(l.companyName),
    escapeCSV(l.email),
    escapeCSV(l.phone),
    escapeCSV(l.industry),
    escapeCSV(l.product || l.position),
    escapeCSV(l.projectType || l.experienceYears),
    escapeCSV(l.budget),
    escapeCSV(l.message),
    escapeCSV(l.status),
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `QuantumMesh_Leads_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
