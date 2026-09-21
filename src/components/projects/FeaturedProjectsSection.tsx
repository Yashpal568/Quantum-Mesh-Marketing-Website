import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { HomeProjectCard } from './HomeProjectCard';
import type { HomeProject } from './HomeProjectCard';

const homeFeaturedProjects: HomeProject[] = [
  {
    id: 'proj-1',
    client: 'Nagar Nigam Rudrapur',
    title: 'Smart Municipal Property Tax & Citizen Grievance Portal',
    tags: ['Smart City', 'Govt Portal', 'GIS'],
    previewType: 'tax-portal'
  },
  {
    id: 'proj-4',
    client: 'Kumaon Agro Seeds Ltd',
    title: 'Seed Lot Climate Telemetry & Anti-Counterfeit QR Engine',
    tags: ['Agritech', 'IoT Sensors', 'QR Engine'],
    previewType: 'agritech'
  },
  {
    id: 'proj-6',
    client: 'Skynet Infotech Solutions',
    title: 'Multi-Cloud Kubernetes Migration & FinOps Platform',
    tags: ['Cloud & DevOps', 'Kubernetes', 'FinOps'],
    previewType: 'cloud-k8s'
  },
  {
    id: 'proj-3',
    client: 'Manipal University Campus',
    title: 'Campus Edge AI Biometric Access & Turnstiles',
    tags: ['Higher Education', 'Edge AI', 'IoT Hardware'],
    previewType: 'biometric-campus'
  }
];

export const FeaturedProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#FAFCFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold border border-blue-100 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>OUR WORK & DELIVERIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Client Deployments
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Proven enterprise platforms custom-engineered for municipal bodies, universities, agritech leaders, and cloud enterprises.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-blue-200 text-brand-blue hover:border-brand-blue hover:bg-blue-50/60 text-xs sm:text-sm font-semibold transition-all duration-200 group shadow-xs"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 4 Custom Client Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeFeaturedProjects.map((project) => (
            <HomeProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
