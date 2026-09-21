import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export const EnterpriseSolutionsSection: React.FC = () => {
  const { openModal } = useModal();

  const flagshipSolutions = [
    {
      id: 'biometric-attendance',
      title: 'Biometric Attendance & Login Ecosystem',
      subtitle: 'Facial recognition & fingerprint hardware terminals + cloud HRMS with automatic payroll deductions and multi-shift rosters.',
      badge: 'Hardware + Cloud Terminal',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-100',
      image: '/assets/generated/biometric-ecosystem.jpg',
      link: '/solutions/biometric-attendance',
      isDedicatedPage: true,
      highlights: [
        'Dual IR Camera Face Recognition (<0.2s check-in)',
        'Optical Fingerprint & RFID Card Scanning',
        'Real-Time Cloud Push Sync via 4G/Wi-Fi',
        'Automated Salary Deductions, Overtime & Leave Sync'
      ],
      ctaText: 'Explore Ecosystem Page'
    },
    {
      id: 'agentic-ai',
      title: 'Business-Ready Agentic AI & Autonomous Agents',
      subtitle: 'Goal-driven AI agents that plan, call enterprise APIs, query private vector databases, and resolve operational bottlenecks.',
      badge: 'Autonomous AI Orchestration',
      badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      image: '/assets/generated/agentic-ai.jpg',
      link: '/solutions/agentic-ai',
      isDedicatedPage: true,
      highlights: [
        'Multi-Agent Collaborative Graphs & Tool Execution',
        'Inbound SDR & Tier-1 Support Automation',
        'Private Knowledge RAG with Zero Data Retention',
        'Human-in-the-Loop Safeguards & Audit Trails'
      ],
      ctaText: 'Explore Agentic AI Page'
    },
    {
      id: 'cloud-devops-genai',
      title: 'Cloud, DevOps & Generative AI Engineering',
      subtitle: 'AWS/GCP/Azure Kubernetes clusters, zero-downtime CI/CD pipelines, FinOps audits, and private LLM model deployments.',
      badge: 'Multi-Cloud & GenAI',
      badgeColor: 'bg-sky-50 text-sky-600 border-sky-100',
      image: '/assets/generated/cloud-devops-genai.jpg',
      link: '/solutions/cloud-devops-genai',
      isDedicatedPage: true,
      highlights: [
        'Enterprise Kubernetes & Terraform IaC Automation',
        'Automated CI/CD with Instant Rollback Capabilities',
        'FinOps Cloud Audit Saving Up to 40% Monthly',
        'Private LLM Fine-Tuning & High-Speed vLLM Serving'
      ],
      ctaText: 'Explore Cloud & AI Page'
    },
    {
      id: 'school-management',
      title: 'School Management System SaaS (Rent / On-Demand)',
      subtitle: 'Flexible monthly subscription rent OR custom on-demand School ERP with student admissions, fee counters, and parent app.',
      badge: 'SaaS Rent or Custom Build',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
      image: '/assets/generated/school-management.jpg',
      link: '/services',
      isDedicatedPage: false,
      highlights: [
        'Flexible Monthly Subscription Rent or Full Custom Purchase',
        'Student Admissions & Digital Fee Counter with Receipts',
        'Live GPS School Bus Tracking with Parent Alerts',
        'Report Cards, Automated Timetable & Grading Engines'
      ],
      ctaText: 'Inquire on Rent or Custom Build'
    },
    {
      id: 'seed-management',
      title: 'Seed Management & Agritech Lot Traceability',
      subtitle: 'End-to-end seed lot tracking, laboratory germination tests, warehouse climate telemetry, and grower contract ledgers.',
      badge: 'Agritech Supply Chain',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      image: '/assets/generated/seed-management.jpg',
      link: '/services',
      isDedicatedPage: false,
      highlights: [
        'Seed Lot & Batch Traceability from Field to Retail Bags',
        'Germination, Moisture & Purity Test Certification',
        'IoT Warehouse Temperature & Humidity Telemetry',
        'Digital QR Quality Verification Passes'
      ],
      ctaText: 'Explore Seed Platform'
    },
    {
      id: 'ai-english-learner',
      title: 'AI English Learner Software & EdTech App',
      subtitle: 'Interactive conversational voice coach with phoneme-level pronunciation scoring, waveform feedback, and CEFR lessons.',
      badge: 'Voice AI EdTech',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-100',
      image: '/assets/generated/ai-english-learner.jpg',
      link: '/services',
      isDedicatedPage: false,
      highlights: [
        'Phoneme-Level Pronunciation Accuracy Scoring (0-100%)',
        'Real-Time Soundwave Speech Visualization',
        'Conversational AI Voice Tutor for Fluency Practice',
        'Gamified Vocabulary Flashcards & CEFR Progress Badges'
      ],
      ctaText: 'Request EdTech Demo'
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAFCFF] border-t border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold border border-blue-100 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>SPECIALIZED ENTERPRISE ECOSYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            High-Impact Software & Hardware Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Engineered for high-volume enterprise operations, agricultural traceability, educational institutions, and autonomous AI automation.
          </p>
        </div>

        {/* 6 High-Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flagshipSolutions.map((sol) => (
            <div
              key={sol.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-float hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase Container with zoom on hover */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-sm ${sol.badgeColor}`}>
                      {sol.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2 leading-snug">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {sol.subtitle}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    {sol.highlights.map((item, i) => (
                      <div key={i} className="flex items-start text-xs text-slate-700 gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                {sol.isDedicatedPage ? (
                  <Link
                    to={sol.link}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 text-brand-blue text-xs font-bold border border-slate-200 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-200"
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={() => openModal('quote', sol.title)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 text-brand-blue text-xs font-bold border border-slate-200 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-200"
                  >
                    <span>{sol.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
