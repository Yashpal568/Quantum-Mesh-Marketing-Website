# Google Sheets + Email Lead Integration Guide

This guide enables **100% automated, free forever** lead capture for Quantum Mesh.
Whenever a client submits an inquiry on your website:
1. **Google Sheets:** A new row is automatically added with full lead details.
2. **Instant Email:** An alert email is immediately sent to `quantumesh.ai@gmail.com`.

---

## ⚡ 2-Minute Setup Instructions

### Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.new) (logged into `quantumesh.ai@gmail.com`).
2. Name the spreadsheet: **Quantum Mesh - Leads CRM**.

### Step 2: Open Google Apps Script
1. In the top menu of your Google Sheet, click **Extensions** → **Apps Script**.
2. Delete any existing code in the script editor.
3. Paste the complete script below:

```javascript
/**
 * Quantum Mesh - Automated Leads Capture to Google Sheet & Gmail
 * Target Admin Email: quantumesh.ai@gmail.com
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Auto-create header columns if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Inquiry Type",
        "Full Name",
        "Company / Org",
        "Client Email",
        "Phone Number",
        "Industry",
        "Interested Product / Service",
        "Project Scope",
        "Budget Range",
        "Requirements / Message",
        "Source URL"
      ]);
      
      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 12);
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }
    
    // Append lead row
    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.formType || "Website Inquiry",
      data.fullName || "Not Specified",
      data.companyName || "N/A",
      data.email || "N/A",
      data.phone || "N/A",
      data.industry || "N/A",
      data.product || data.position || "General Software Inquiry",
      data.projectType || data.experienceYears || "Standard",
      data.budget || "Flexible",
      data.message || "No custom message",
      data.sourceUrl || "quantummesh.com"
    ]);
    
    // Format Email Notification
    var adminEmail = "quantumesh.ai@gmail.com";
    var subject = "🔥 New Lead: " + (data.fullName || "Prospective Client") + " - " + (data.product || data.formType);
    
    var htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">Quantum Mesh — New Inbound Lead</h2>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.85;">Form Source: <strong>${data.formType || "Website"}</strong></p>
        </div>
        
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.fullName || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Company / Org:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${data.companyName || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2563eb; font-weight: 600;">${data.email || "N/A"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #059669; font-weight: 600;">${data.phone || "N/A"}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Product / Area:</strong></td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.product || data.position || "Custom Engineering"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Scope / Type:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${data.projectType || data.experienceYears || "Standard"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Budget:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${data.budget || "Not Specified"}</td>
            </tr>
          </table>

          <div style="margin-top: 18px; padding: 14px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #475569; text-transform: uppercase;">Message & Scope Details:</p>
            <p style="margin: 0; font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${data.message || "No custom message provided."}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="mailto:${data.email}?subject=Re:%20Quantum%20Mesh%20Inquiry%20-%20${encodeURIComponent(data.product || 'Project Proposal')}" 
               style="display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; padding: 10px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
              Direct Reply to Client
            </a>
          </div>
        </div>

        <div style="padding: 12px 24px; background: #f1f5f9; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
          Logged automatically into your Google Sheet CRM • ${data.submittedAt || new Date().toISOString()}
        </div>
      </div>
    `;

    MailApp.sendEmail({
      to: adminEmail,
      subject: subject,
      htmlBody: htmlBody,
      replyTo: data.email || adminEmail
    });

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 3: Deploy as Web App
1. In the top-right corner of Google Apps Script, click **Deploy** → **New deployment**.
2. Click the gear icon (**Select type**) next to "Select type" and choose **Web app**.
3. Configure the fields:
   - **Description:** `Quantum Mesh Lead Receiver`
   - **Execute as:** `Me (quantumesh.ai@gmail.com)`
   - **Who has access:** `Anyone` *(Important: Select "Anyone" so the website can submit leads without requiring visitors to log in)*
4. Click **Deploy**.
5. Google will ask you to **Authorize access**:
   - Click *Review permissions*
   - Choose your `quantumesh.ai@gmail.com` account
   - Click *Advanced* (bottom left) → Click *Go to Untitled project (unsafe)*
   - Click *Allow*.
6. Copy the generated **Web App URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Paste URL into Your `.env` File
Open `.env` in the root of your project:

```env
VITE_ADMIN_EMAIL=quantumesh.ai@gmail.com
VITE_LEADS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_COPIED_URL_HERE/exec
```

Restart your dev server or run `npm run build` / deploy!

---

## 🔒 Built-in Zero Loss Protection
Even before you paste the webhook URL:
- All submissions are safely archived in the browser's `localStorage` (`quantum_mesh_leads`).
- Nothing is lost. Once the webhook is attached, everything sends seamlessly in real time!
