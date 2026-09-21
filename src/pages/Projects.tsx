import React, { useState, useEffect } from 'react';
import { 
  allProjects 
} from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { CaseStudyModal } from '../components/projects/CaseStudyModal';
import { FinalCTA } from '../components/cta/FinalCTA';
import { SEOHead } from '../components/seo/SEOHead';
import type { Project } from '../types';
import { 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Award, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All', 
    'Govt & Enterprise', 
    'Healthcare', 
    'Higher Education', 
    'Agritech & IoT', 
    'Hospitality'
  ];

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  const stats = [
    {
      value: '50+',
      label: 'Production Systems Deployed',
      subtext: 'Across Uttarakhand & Pan-India',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />
    },
    {
      value: '+240%',
      label: 'Peak Compliance & Recovery Surge',
      subtext: 'Nagar Nigam Rudrapur Case Study',
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />
    },
    {
      value: '99.98%',
      label: 'Production Uptime SLA',
      subtext: 'Enterprise Grade Cloud Architecture',
      icon: <Award className="w-5 h-5 text-purple-600" />
    },
    {
      value: '< 8 Wks',
      label: 'Average Concept-to-Production',
      subtext: 'Agile sprints with zero technical debt',
      icon: <Clock className="w-5 h-5 text-amber-600" />
    }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEOHead
        title="Client Case Studies, Enterprise Deployments & Verified ROI | Quantum Mesh Our Work"
        description="Explore real case studies from Quantum Mesh: Municipal property tax portals, healthcare EHR sync, campus biometric turnstiles, agritech IoT, and multi-cloud Kubernetes migrations in Uttarakhand and India."
        keywords="quantum mesh case studies, custom software portfolio uttarakhand, school erp deployment, hospital management case study, biometric access project rudrapur, IT company projects india"
        canonicalPath="/projects"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Work', url: '/projects' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold border border-blue-100 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>VERIFIED CLIENT CASE STUDIES & IMPACT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Software Deliveries & Proven Results
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
            Real-world case studies of digital platforms engineered and deployed by Quantum Mesh. See how we help urban local bodies, hospital networks, universities, and agritech leaders achieve measurable operational ROI.
          </p>
        </div>

        {/* 4 Trust & Impact KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-12 sm:mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {stat.value}
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  {stat.icon}
                </div>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? allProjects.length 
              : allProjects.filter((p) => p.category === cat || p.tags.includes(cat)).length;
            
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Case Studies 2-Column Wide Grid for Readability & High Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((proj) => (
            <ProjectCard 
              key={proj.id} 
              project={proj} 
              onOpenModal={(p) => setSelectedCaseStudy(p)} 
            />
          ))}
        </div>

        {/* Client Collaboration & Engineering Standards Strip */}
        <div className="mb-20 rounded-3xl bg-slate-900 text-white p-6 sm:p-10 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-cyan-300 text-xs font-semibold border border-cyan-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DELIVERY COMMITMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why Enterprises Trust Quantum Mesh for High-Stakes Deployments
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Every case study above was delivered with 100% in-house engineering, strict data privacy, hardware-to-cloud integration, and zero legacy bloat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-white block">100% Owned Source Code:</span>
                  No proprietary vendor lock-in. Full ownership of your intellectual property and deployment pipelines.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-white block">Local Engineering Presence:</span>
                  Hands-on on-site deployment engineers in Rudrapur, Dehradun, Pantnagar, and Kumaon region.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-white block">Hardware + Cloud Synergy:</span>
                  Direct edge integration with biometric turnstiles, IoT sensors, thermal printers, and payment POS.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-white block">Guaranteed SLA & Support:</span>
                  Round-the-clock infrastructure telemetry, proactive security patches, and direct developer support.
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => openModal('quote')}
                className="px-6 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </div>

      {/* In-Depth Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
};
