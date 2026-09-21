import React, { useState } from 'react';
import { 
  Database, 
  Download, 
  Trash2, 
  Mail, 
  Phone, 
  Building2, 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw,
  Send,
  ExternalLink,
  FileSpreadsheet
} from 'lucide-react';
import { 
  getStoredLeads, 
  clearStoredLeads, 
  exportLeadsToCSV, 
  submitLead, 
  type StoredLead, 
  PRIMARY_ADMIN_EMAIL 
} from '../services/leadService';
import { SEOHead } from '../components/seo/SEOHead';

export const LeadsCRM: React.FC = () => {
  const [leads, setLeads] = useState<StoredLead[]>(() => getStoredLeads());
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const reloadLeads = () => {
    setLeads(getStoredLeads());
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all locally captured test leads?')) {
      clearStoredLeads();
      reloadLeads();
    }
  };

  const handleSendTestLead = async () => {
    setIsSendingTest(true);
    setTestResult(null);

    const testPayload = {
      formType: 'Contact Page Inquiry' as const,
      fullName: 'Test Client (Quantum Mesh Verification)',
      companyName: 'Quantum Enterprise Solutions',
      email: PRIMARY_ADMIN_EMAIL,
      phone: '+91 98765 00000',
      industry: 'Enterprise Software',
      product: 'Hospital Management System (HMS)',
      projectType: 'Verification Test',
      budget: '₹5L – ₹15L',
      message: 'This is an automated test inquiry to verify that your Google Sheets and Email webhook are receiving leads properly.',
    };

    const res = await submitLead(testPayload);
    setIsSendingTest(false);
    reloadLeads();

    if (res.success) {
      setTestResult('Test lead created and saved! If your Google Sheet Webhook or Web3Forms key is connected, an email was dispatched.');
    }
  };

  const webhookConfigured = Boolean(
    import.meta.env.VITE_LEADS_WEBHOOK_URL || import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL
  );
  const web3formsConfigured = Boolean(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

  return (
    <div className="pt-24 pb-20 bg-[#FAFCFF] min-h-screen">
      <SEOHead
        title="Inbound Leads CRM & Inquiries | Quantum Mesh Admin"
        description="Local leads repository and inquiry dispatch viewer for Quantum Mesh Technologies."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">
              <Database className="w-3.5 h-3.5" />
              <span>Admin Leads Repository</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Inbound Client Inquiries & CRM
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              All website form submissions are preserved here in zero-loss storage and forwarded to <strong>{PRIMARY_ADMIN_EMAIL}</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleSendTestLead}
              disabled={isSendingTest}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs transition-all disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5 text-brand-blue" />
              <span>{isSendingTest ? 'Sending...' : 'Send Test Lead'}</span>
            </button>

            <button
              onClick={exportLeadsToCSV}
              disabled={leads.length === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-blue-600 shadow-2xs transition-all disabled:opacity-40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV (Google Sheets / Excel)</span>
            </button>

            <button
              onClick={handleClear}
              disabled={leads.length === 0}
              title="Clear Local Leads"
              className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 border border-slate-200 transition-all disabled:opacity-30"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {testResult && (
          <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{testResult}</span>
          </div>
        )}

        {/* Integration Status Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Total Leads Captured</span>
              <span className="text-2xl font-extrabold text-slate-900 mt-0.5 block">{leads.length}</span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Google Sheets Sync</span>
              <span className={`text-xs font-bold mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${webhookConfigured ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800'}`}>
                {webhookConfigured ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                {webhookConfigured ? 'Webhook Active' : 'Webhook URL Pending'}
              </span>
            </div>
            <a
              href="/GOOGLE_SHEETS_EMAIL_SETUP.md"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-brand-blue hover:underline flex items-center gap-1"
            >
              <span>Setup Guide</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Primary Notification Inbox</span>
              <span className="text-xs font-bold text-slate-900 mt-1 block truncate max-w-[200px]">{PRIMARY_ADMIN_EMAIL}</span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">
                {web3formsConfigured ? '✓ Direct Dispatch Active' : 'Synced via Webhook'}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="mt-8 bg-white border border-slate-200/80 rounded-2xl shadow-2xs overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200/70 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Recorded Inquiries ({leads.length})
            </h2>
            <button
              onClick={reloadLeads}
              className="text-xs text-slate-500 hover:text-brand-blue flex items-center gap-1 font-medium transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>
          </div>

          {leads.length === 0 ? (
            <div className="py-16 px-4 text-center">
              <Database className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-slate-800">No leads recorded yet</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Submissions from the Contact Page, Project Quote Modal, and Demo Modal will automatically show up here.
              </p>
              <button
                onClick={handleSendTestLead}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 text-brand-blue hover:bg-blue-100 transition-colors"
              >
                Generate a Sample Lead
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 overflow-x-auto">
              {leads.map((lead) => (
                <div key={lead.id} className="p-5 hover:bg-slate-50/70 transition-colors space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-slate-900">{lead.fullName || 'Anonymous Prospect'}</span>
                      {lead.companyName && (
                        <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          {lead.companyName}
                        </span>
                      )}
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue font-bold">
                        {lead.formType}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{lead.submittedAt}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-1.5 truncate">
                      <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`mailto:${lead.email}`} className="text-brand-blue hover:underline font-semibold truncate">
                        {lead.email}
                      </a>
                    </div>

                    {lead.phone && (
                      <div className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <a href={`tel:${lead.phone}`} className="hover:text-brand-blue font-semibold">
                          {lead.phone}
                        </a>
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 truncate">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate"><strong>Product:</strong> {lead.product || lead.position || 'General'}</span>
                    </div>

                    <div>
                      <span><strong>Budget:</strong> {lead.budget || 'Flexible'}</span>
                    </div>
                  </div>

                  {lead.message && (
                    <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200/80 leading-relaxed whitespace-pre-wrap">
                      <span className="font-bold text-slate-500 text-[11px] block uppercase tracking-wider mb-1">
                        Requirements / Note:
                      </span>
                      {lead.message}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
