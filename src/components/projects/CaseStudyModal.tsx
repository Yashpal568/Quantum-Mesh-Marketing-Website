import React, { useEffect } from 'react';
import { 
  X, 
  Building2, 
  MapPin, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  Quote, 
  Cpu, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Zap,
  ExternalLink
} from 'lucide-react';
import type { Project } from '../../types';
import { useModal } from '../../context/ModalContext';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const { openModal } = useModal();

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleInquireSimilar = () => {
    onClose();
    openModal('quote', project.title);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-brand-blue border border-blue-100">
              <Building2 className="w-3.5 h-3.5" />
              <span>{project.category} Case Study</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-slate-500 bg-slate-100">
              <MapPin className="w-3 h-3 text-emerald-500" />
              <span>{project.location}</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Client: {project.client}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Banner Showcase Image */}
          {project.image && (
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72 w-full bg-slate-900 border border-slate-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold">Deployment Timeline: {project.timeline}</span>
                </div>
                {project.metrics && (
                  <div className="px-3 py-1 rounded-lg bg-emerald-500/90 text-white text-xs font-extrabold shadow-sm">
                    {project.metrics.value} {project.metrics.label}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Verified Results Grid */}
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-brand-blue" />
              <span>Quantified Business & Operational Outcomes</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.results.map((res, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">
                    {res.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Deep Dive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <span>The Client Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-blue" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-brand-blue" />
              <span>System Capabilities & Architecture Deliverables</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Component Architecture Breakdown (The Solution Built by Quantum Mesh) */}
          {project.components && project.components.length > 0 && (
            <div>
              <div className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>The Solution Built by Quantum Mesh</span>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                      <th className="py-3 px-4">Component</th>
                      <th className="py-3 px-4">Technology</th>
                      <th className="py-3 px-4">Live URL / Channel</th>
                      <th className="py-3 px-4">Key Feature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    {project.components.map((comp, cIdx) => (
                      <tr key={cIdx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">{comp.name}</td>
                        <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">{comp.tech}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {comp.url ? (
                            <a
                              href={comp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-brand-blue font-bold hover:underline"
                            >
                              <span>{comp.channel.replace('https://', '').replace('/', '')}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-slate-700 font-semibold">{comp.channel}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-600 leading-relaxed min-w-[200px]">{comp.feature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <div className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-brand-blue" />
              <span>Enterprise Technology Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {project.testimonial && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden shadow-md">
              <Quote className="w-12 h-12 text-white/10 absolute right-4 bottom-2 pointer-events-none" />
              <p className="text-sm sm:text-base italic leading-relaxed mb-4 text-blue-50">
                "{project.testimonial.quote}"
              </p>
              <div>
                <div className="font-bold text-white text-sm">{project.testimonial.author}</div>
                <div className="text-xs text-blue-200">{project.testimonial.designation}</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Action */}
        <div className="sticky bottom-0 z-20 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 text-center sm:text-left">
            Need a similar system engineered for your enterprise?
          </div>
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-end">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
              </a>
            )}
            <button
              onClick={handleInquireSimilar}
              className="px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Request Architecture Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
