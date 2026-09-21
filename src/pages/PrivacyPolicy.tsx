import React, { useState } from 'react';
import { Shield, Lock, Eye, Server, Cpu, FileCheck, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: '1. Overview & Controller Info' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'biometric-data', title: '3. Biometric Edge Data Security' },
    { id: 'agentic-ai-privacy', title: '4. AI & Model Processing Policy' },
    { id: 'data-use', title: '5. How We Use Data' },
    { id: 'subprocessors', title: '6. Cloud Sub-Processors' },
    { id: 'retention-security', title: '7. Retention & Encryption' },
    { id: 'user-rights', title: '8. Your Rights & GDPR/DPDP' },
    { id: 'dpo-contact', title: '9. Contact Our DPO' }
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
              <Shield className="w-3.5 h-3.5" />
              <span>Legal & Compliance Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Last Updated: <strong>September 2026</strong> • Version 3.4
            </p>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
              At Quantum Mesh, we consider privacy, algorithmic transparency, and cryptographic security fundamental tenets of our software architecture.
            </p>

            {/* Compliance Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                GDPR Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                SOC 2 Type II Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                ISO 27001 Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                DPDP Act 2023 Compliant
              </span>
            </div>
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
                Contents
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
                <p className="text-[11px] text-slate-500">Need specific compliance assistance?</p>
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
            <section id="overview" className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-brand-blue" />
                <span>1. Overview & Data Controller Information</span>
              </h2>
              <p>
                This Privacy Policy governs the manner in which <strong>Quantum Mesh Solutions Pvt. Ltd.</strong> (“Quantum Mesh”, “we”, “our”, or “us”) collects, uses, encrypts, and discloses personal data collected from users of our official websites, SaaS applications (Hospital Management System, School Management System, Servora Restaurant POS), biometric edge attendance hardware, and Agentic AI workflow orchestration platforms.
              </p>
              <p>
                When you deploy Quantum Mesh software on behalf of an enterprise or institution, Quantum Mesh operates as a <strong>Data Processor</strong>, while your organization functions as the <strong>Data Controller</strong>.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-collected" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-brand-blue" />
                <span>2. Information We Collect</span>
              </h2>
              <p>Depending on your interaction with Quantum Mesh products, we collect the following categories of data:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong className="text-slate-800">Account & Identity Information:</strong> Name, work email address, telephone number, job title, institutional organization, and billing credentials.
                </li>
                <li>
                  <strong className="text-slate-800">Device Telemetry & Logs:</strong> IP address, operating system, browser user agent, API call logs, latency metrics, and hardware MAC address for terminal pairing.
                </li>
                <li>
                  <strong className="text-slate-800">Enterprise Application Data:</strong> Patient records in HMS, student academic rosters and GPS route coordinates in School ERP, order logs in Servora, and seed lot batch registries in Agritech platforms.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="biometric-data" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2">
                  <Lock className="w-5 h-5 text-brand-blue" />
                  <span>3. Biometric Edge Data Security Policy</span>
                </h2>
                <p className="text-xs text-blue-900 font-semibold uppercase tracking-wider">
                  Zero-Raw-Image Cryptographic Protection
                </p>
              </div>
              <p>
                For clients utilizing the <strong>Quantum BioCore 500 / 800-Max Biometric Hardware Ecosystem</strong>, we enforce stringent edge-level security protections:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Mathematical Feature Vectors Only:</strong> The biometric camera never stores or transmits raw photographic face images or fingerprint impressions. Upon scan, the terminal converts facial landmarks into a proprietary 512-byte irreversible mathematical hash.
                </li>
                <li>
                  <strong>AES-256 On-Device Encryption:</strong> Biometric templates cached on the terminal for offline verification are encrypted with device-specific cryptographic keys stored in secure hardware enclaves (ARM TrustZone).
                </li>
                <li>
                  <strong>Data Sovereignty & Deletion:</strong> When an employee or student departs an organization, their biometric template is permanently scrubbed across all paired edge terminals and cloud servers within 60 seconds of revocation.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="agentic-ai-privacy" className="space-y-4 pt-6 border-t border-slate-100">
              <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-5 space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-purple-950 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-600" />
                  <span>4. Agentic AI & Generative Model Processing Policy</span>
                </h2>
                <p className="text-xs text-purple-900 font-semibold uppercase tracking-wider">
                  No Public Foundation Model Training
                </p>
              </div>
              <p>
                When utilizing Quantum Mesh <strong>Agentic AI Solutions</strong>, autonomous agents, and RAG document search:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm">
                <li>
                  <strong>Customer Isolation:</strong> Customer prompts, vector embeddings, and enterprise documents are processed exclusively inside dedicated tenant VPCs.
                </li>
                <li>
                  <strong>Zero External Training:</strong> We contractually guarantee that enterprise data processed through our agents is <em>never</em> used to train, retrain, or improve foundational commercial AI models (such as OpenAI, Anthropic, or Meta Llama).
                </li>
                <li>
                  <strong>Automated PII Redaction:</strong> In-flight prompts pass through local regex and NER filters to redact Social Security Numbers, credit card numbers, and patient IDs before vector indexing.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="data-use" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. How We Use Data
              </h2>
              <p>We process collected information solely for legitimate enterprise purposes, including:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                <li>Delivering high-availability SaaS and hardware functionality.</li>
                <li>Processing transactions, monthly rental subscriptions, and invoices.</li>
                <li>Dispatching critical service advisories, firmware updates, and security alerts.</li>
                <li>Preventing malicious intrusion, DDoS attacks, and unauthorized system breaches.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="subprocessors" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Server className="w-5 h-5 text-brand-blue" />
                <span>6. Cloud Sub-Processors & Hosting</span>
              </h2>
              <p>
                Quantum Mesh operates dedicated clusters hosted in Tier-4 SOC 2 certified data centers. Our approved infrastructure sub-processors include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                  <p className="font-bold text-slate-900">Amazon Web Services (AWS)</p>
                  <p className="text-slate-500 mt-1">Primary cloud compute, S3 encrypted storage, EKS clusters (Mumbai & Virginia regions).</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                  <p className="font-bold text-slate-900">Microsoft Azure</p>
                  <p className="text-slate-500 mt-1">Secondary failover, cognitive vector services, active directory integration.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs">
                  <p className="font-bold text-slate-900">Cloudflare Inc.</p>
                  <p className="text-slate-500 mt-1">Edge DDoS mitigation, DNS Anycast routing, and TLS termination.</p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="retention-security" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Retention & Encryption Safeguards
              </h2>
              <p>
                All data in transit is encrypted using <strong>TLS 1.3</strong>. All persistent databases and object storage buckets are encrypted at rest using <strong>AES-256</strong> with automated KMS key rotation every 90 days.
              </p>
              <p>
                Database backups are maintained for 30 rolling days in geo-redundant storage with point-in-time recovery (PITR) and are automatically purged thereafter.
              </p>
            </section>

            {/* Section 8 */}
            <section id="user-rights" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. Your Rights (GDPR & DPDP Act 2023)
              </h2>
              <p>Under international data protection laws, individuals retain the following enforceable rights:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Right of Access:</strong> Obtain a machine-readable copy of your personal data.
                </div>
                <div className="p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Right to Erasure:</strong> Request permanent scrubbing of account profiles.
                </div>
                <div className="p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Right to Rectification:</strong> Correct inaccurate records immediately.
                </div>
                <div className="p-3 rounded-lg border border-slate-200">
                  <strong className="text-slate-900">Right to Restrict Processing:</strong> Pause automated data analysis.
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="dpo-contact" className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-brand-blue" />
                <span>9. Contact Our Data Protection Officer</span>
              </h2>
              <p>
                If you have inquiries, audit requests, or wish to exercise your data subject rights, please reach out to our legal compliance office:
              </p>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs space-y-1.5">
                <p className="font-bold text-sm text-slate-900">Quantum Mesh Solutions Pvt. Ltd.</p>
                <p className="text-slate-600">Attention: Data Protection Officer (DPO)</p>
                <p className="text-slate-600">Email: <a href="mailto:quantumesh.ai@gmail.com" className="text-brand-blue font-bold hover:underline">quantumesh.ai@gmail.com</a></p>
                <p className="text-slate-600">Headquarters: PSA Plaza, Awas Vikas, U.S.Nagar, Rudrapur, Uttarakhand, 263153</p>
                <p className="text-slate-600">Direct Compliance Desk: +91 98765 43210</p>
                <p className="text-slate-600">Response SLA: Within 48 hours for statutory compliance inquiries.</p>
              </div>
            </section>

            {/* Enterprise Privacy & DPA Consultation Banner */}
            <div className="bg-gradient-to-r from-brand-navy to-slate-900 rounded-2xl p-6 sm:p-8 text-white space-y-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                Data Processing Agreement (DPA)
              </span>
              <h3 className="text-xl font-bold text-white">Need a Signed BAA or Enterprise DPA?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                For healthcare networks handling protected health information (PHI in HMS) or schools managing student records, we execute comprehensive Business Associate Agreements (BAAs) and custom Data Processing Agreements ensuring total regulatory compliance.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-blue-600 transition-colors shadow-sm"
                >
                  Request DPA / Security Package →
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
