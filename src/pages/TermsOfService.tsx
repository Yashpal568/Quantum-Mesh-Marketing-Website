import React, { useState } from 'react';
import { FileText, CheckCircle2, ShieldCheck, Scale, AlertCircle, ChevronRight, Mail } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'saas-rental', title: '2. SaaS & Monthly Rental Terms' },
    { id: 'hardware-terms', title: '3. Hardware & Biometric Devices' },
    { id: 'custom-dev-ip', title: '4. Custom Development & IP' },
    { id: 'sla-availability', title: '5. Service Level Agreement (SLA)' },
    { id: 'acceptable-use', title: '6. Acceptable Use & AI Policy' },
    { id: 'fees-billing', title: '7. Invoicing, Taxes & Billing' },
    { id: 'liability-limits', title: '8. Limitation of Liability' },
    { id: 'termination', title: '9. Termination & Offboarding' },
    { id: 'governing-law', title: '10. Governing Law & Arbitration' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAFCFF]">
      {/* Header */}
      <section className="relative overflow-hidden pt-12 pb-14 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-semibold mb-4">
              <Scale className="w-3.5 h-3.5" />
              <span>Master Services Agreement (MSA)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Effective Date: <strong>September 1, 2026</strong> • Version 4.1
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              These terms govern the use of Quantum Mesh cloud SaaS products, monthly rental deployments, IoT biometric hardware devices, and custom engineering engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                Clauses
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                      activeSection === sec.id
                        ? 'bg-blue-50 text-brand-blue font-bold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>{sec.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeSection === sec.id ? 'translate-x-0.5 text-brand-blue' : 'text-slate-300'}`} />
                  </button>
                ))}
              </nav>

              <div className="pt-5 mt-5 border-t border-slate-100 px-3">
                <p className="text-[11px] text-slate-500">Legal or Procurement Questions?</p>
                <a
                  href="mailto:quantumesh.ai@gmail.com"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>quantumesh.ai@gmail.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Content */}
          <main className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-12 text-slate-700 text-sm sm:text-base leading-relaxed">
            {/* Section 1 */}
            <section id="acceptance" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-blue" />
                <span>1. Acceptance of Terms & Service Scope</span>
              </h2>
              <p>
                By signing a Statement of Work (SOW), executing an enterprise order form, activating a software tenant, or connecting a Quantum Mesh biometric hardware device, your entity (“Customer”) agrees to be legally bound by these Terms of Service.
              </p>
              <p>
                If you are entering into this agreement on behalf of a company, school, hospital, or public municipal corporation, you represent that you hold the legal authority to bind that entity to these conditions.
              </p>
            </section>

            {/* Section 2 */}
            <section id="saas-rental" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                <span>2. SaaS Subscriptions & Monthly Rental Terms</span>
              </h2>
              <p>
                Quantum Mesh delivers several core platforms under monthly subscription or rental agreements (e.g. <strong>School Management System SaaS</strong>, <strong>Servora Restaurant POS</strong>, and <strong>Cloud LMS</strong>):
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong className="text-slate-800">Monthly Rental Licensing:</strong> For school and restaurant clients operating on monthly rental models, access is granted on an active term-by-term basis. Invoicing occurs on the 1st of each calendar month.
                </li>
                <li>
                  <strong className="text-slate-800">No Long-Term Lock-in:</strong> Rental plans may be cancelled with thirty (30) days prior written notice, after which data export tools remain available for a grace period of 45 days.
                </li>
                <li>
                  <strong className="text-slate-800">Automatic Updates:</strong> Cloud updates, bug patches, and regulatory compliance updates (such as board syllabus rubrics or tax formatting) are automatically deployed without additional surcharge.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="hardware-terms" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  <span>3. Hardware & Biometric Device Terms</span>
                </h2>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  BioCore Terminals, Access Controllers & Peripherals
                </p>
              </div>
              <p>
                For deployments including physical attendance terminals, facial scanners, and access turnstiles:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Hardware Warranty:</strong> All Quantum Mesh terminals include a standard one (1) year replacement warranty covering manufacturing and sensor defects.
                </li>
                <li>
                  <strong>Installation & Ground Calibration:</strong> Professional on-site mounting, network wiring, and door strike relay testing are performed under the corresponding SOW.
                </li>
                <li>
                  <strong>RMA Procedure:</strong> In the event of a terminal malfunction, our support team will dispatch a replacement unit within 48 business hours of diagnosis.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="custom-dev-ip" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Scale className="w-5 h-5 text-brand-blue" />
                <span>4. Custom Software Development & Intellectual Property</span>
              </h2>
              <p>
                When Quantum Mesh is contracted for custom software engineering (such as mobile apps, custom ERP modules, or custom AI agent graphs):
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong className="text-slate-800">Customer Work Product:</strong> Upon final settlement of all invoices, the Customer owns full proprietary intellectual property rights to the custom code, schemas, and brand assets developed explicitly for their project.
                </li>
                <li>
                  <strong className="text-slate-800">Pre-Existing Frameworks:</strong> Quantum Mesh retains ownership of our pre-existing modular libraries, utility SDKs, and foundational algorithmic scaffolds. Customer receives an irrevocable, perpetual, royalty-free license to run said frameworks as integrated within the deliverable.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="sla-availability" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Service Level Agreement (SLA) & Support
              </h2>
              <p>We commit to commercial-grade availability across all cloud SaaS endpoints:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                  <p className="text-2xl font-extrabold text-brand-navy">99.9%</p>
                  <p className="font-bold text-slate-800 mt-1">Uptime Commitment</p>
                  <p className="text-slate-500 mt-0.5">Excludes scheduled maintenance announced 48h in advance.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                  <p className="text-2xl font-extrabold text-brand-navy">&lt; 30 min</p>
                  <p className="font-bold text-slate-800 mt-1">Critical (Sev-1) Response</p>
                  <p className="text-slate-500 mt-0.5">24/7 emergency incident dispatch for service outages.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                  <p className="text-2xl font-extrabold text-brand-navy">&lt; 4 hours</p>
                  <p className="font-bold text-slate-800 mt-1">Standard Support</p>
                  <p className="text-slate-500 mt-0.5">General configuration, user provisioning, and queries.</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="acceptable-use" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                <span>6. Acceptable Use Policy & AI Autonomous Execution</span>
              </h2>
              <p>Customer agrees not to use Quantum Mesh software or agentic workflows to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>Reverse engineer, decompile, or extract proprietary biometric firmware vectors.</li>
                <li>Execute automated vulnerability scanning or stress-testing against shared production clusters without prior written authorization.</li>
                <li>Deploy autonomous AI agents to generate illegal, defamatory, or fraudulent transactions.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="fees-billing" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Invoicing, Payment Terms & Taxes
              </h2>
              <p>
                All fees are quoted in Indian Rupees (INR) or United States Dollars (USD). Invoices are due within fifteen (15) calendar days from date of issue unless specified otherwise in the SOW.
              </p>
              <p>
                Applicable Goods and Services Tax (GST) or regional VAT will be reflected transparently on statutory tax invoices.
              </p>
            </section>

            {/* Section 8 */}
            <section id="liability-limits" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, neither party shall be liable for indirect, punitive, incidental, or consequential damages (including loss of profits or business interruption).
              </p>
              <p>
                Quantum Mesh’s total aggregate liability arising out of or related to these terms shall not exceed the total fees paid by the Customer in the twelve (12) months preceding the incident.
              </p>
            </section>

            {/* Section 9 */}
            <section id="termination" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. Termination & Data Portability Offboarding
              </h2>
              <p>
                Either party may terminate the agreement for cause if the other party materially breaches any provision and fails to cure such breach within thirty (30) days of notice.
              </p>
              <p>
                Upon termination, Customer can initiate automated database exports (JSON, CSV, SQL dumps) through the administrative console. After forty-five (45) days, all active customer instances are decommissioned and backups wiped.
              </p>
            </section>

            {/* Section 10 */}
            <section id="governing-law" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                10. Governing Law & Arbitration
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any dispute arising out of or relating to this agreement will be referred to and finally resolved by binding arbitration under the Arbitration and Conciliation Act, 1996, with the seat of arbitration located in New Delhi, India.
              </p>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 mt-4 space-y-1">
                <p className="font-bold text-slate-900">Legal Counsel & Notices:</p>
                <p className="mt-1">Quantum Mesh Solutions Pvt. Ltd., Legal & Contracts Desk</p>
                <p>Headquarters: PSA Plaza, Awas Vikas, U.S.Nagar, Rudrapur, Uttarakhand, 263153</p>
                <p>Email: <a href="mailto:quantumesh.ai@gmail.com" className="text-brand-blue font-bold hover:underline">quantumesh.ai@gmail.com</a></p>
                <p>Direct Inquiries Desk: +91 98765 43210</p>
              </div>
            </section>

            {/* Enterprise Legal Consultation Banner */}
            <div className="bg-gradient-to-r from-brand-navy to-slate-900 rounded-2xl p-6 sm:p-8 text-white space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                Enterprise MSA & Custom SOW
              </span>
              <h3 className="text-xl font-bold text-white">Need a Custom Master Services Agreement?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                For large university campuses, hospital networks, or municipal corporations requiring custom compliance terms, tailored data-processing agreements (DPAs), or bespoke SLAs, our legal and solutions team is available for direct consultation.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-blue-600 transition-colors shadow-sm"
                >
                  Contact Legal & Solutions Team →
                </a>
                <a
                  href="mailto:quantumesh.ai@gmail.com"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Email quantumesh.ai@gmail.com
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
