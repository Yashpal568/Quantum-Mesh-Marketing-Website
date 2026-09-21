# Quantum Mesh — Hostinger Deployment Guide
**Domain**: `https://www.quantumesh.in`  
**Contact / Leads Email**: `quantumesh.ai@gmail.com`  
**Ready-to-Upload Package**: `deploy.zip` (located in project root)

---

## What is in `deploy.zip`?
`deploy.zip` has been pre-compiled and packaged with all production assets:
- `index.html` (SEO-optimized with `https://www.quantumesh.in` canonical tags, OpenGraph, and LocalBusiness Schema)
- `.htaccess` (Configured for Apache/LiteSpeed: forces HTTPS, enables React Router SPA page refreshes without 404s, and applies browser caching)
- `sitemap.xml` & `robots.txt` (Configured with all 17 search engine routes for `quantumesh.in`)
- `llms.txt` & `seo-intent.json` (AI Search engine optimization for Perplexity, ChatGPT Search, Google Gemini)
- `assets/` (Optimized JS, CSS, and high-resolution generated web/industrial visuals)

---

## Step-by-Step Deployment on Hostinger

### Step 1: Log in to Hostinger hPanel
1. Open [Hostinger hPanel](https://hpanel.hostinger.com/) and sign in.
2. Under **Websites**, find **`quantumesh.in`** and click **Manage**.

---

### Step 2: Open File Manager
1. In the left-hand sidebar or search bar, click **File Manager** (or **Files** -> **File Manager**).
2. Choose **Access files of quantumesh.in**.
3. Double-click the **`public_html`** folder to enter it.
4. If there is a default placeholder file (such as `default.php` or `index.php`), select and delete it.

---

### Step 3: Upload and Extract `deploy.zip`
1. In the top toolbar of the File Manager, click the **Upload** icon (upward arrow).
2. Click **File** and select **`e:\QuantumMesh\deploy.zip`** from your computer.
3. Wait for the upload to reach 100%.
4. Right-click the uploaded `deploy.zip` file and click **Extract**.
5. When asked for the destination folder, specify `/public_html` (or `.`) so all files extract directly into `public_html`.
6. After extracting, you can delete `deploy.zip` from `public_html`.

> **Important**: In `public_html`, you should directly see:
> - `index.html`
> - `.htaccess`
> - `sitemap.xml`
> - `robots.txt`
> - `assets/` folder
> *(Ensure they are not trapped inside an extra subfolder)*

---

### Step 4: Ensure SSL (HTTPS) is Active
1. In Hostinger hPanel, search for **SSL**.
2. Make sure the Free SSL certificate is **Active** for both `quantumesh.in` and `www.quantumesh.in`.
3. Enable **Force HTTPS** in Hostinger if available (our `.htaccess` file also enforces this automatically).

---

### Step 5: Verify DNS (If Domain is from another registrar)
If you purchased `quantumesh.in` directly on Hostinger, this is already done.  
If purchased on GoDaddy / Namecheap:
- **Nameservers**:
  - `ns1.dns-parking.com`
  - `ns2.dns-parking.com`
- Or point **A Record**: `@` to your Hostinger server IP address, and **CNAME**: `www` to `quantumesh.in`.

---

### Step 6: Test and Verify Live Website
1. Visit [https://www.quantumesh.in](https://www.quantumesh.in) in your browser.
2. Click through the pages:
   - `/services`
   - `/about`
   - `/products/hms`
   - `/locations`
3. Hit **Refresh (F5)** on any sub-page to confirm the `.htaccess` SPA router prevents any 404 errors.
4. Click **"Get Instant Quote"** or submit the contact form with test details:
   - Check that a row appears in your **Google Sheet**.
   - Check that an instant email notification arrives in **`quantumesh.ai@gmail.com`**.
