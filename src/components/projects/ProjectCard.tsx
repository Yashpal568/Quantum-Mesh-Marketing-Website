import React from 'react';
import { 
  Building2, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Quote, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpenModal?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onOpenModal
}) => {
  return (
    <article 
      className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Banner Image with Metadata Badges */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={project.image || '/assets/generated/client-consultation.jpg'}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs">
            <Building2 className="w-3.5 h-3.5 text-brand-blue" />
            <span>{project.category}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-900/80 text-slate-200 backdrop-blur-xs border border-white/15">
            <MapPin className="w-3 h-3 text-emerald-400" />
            <span>{project.location}</span>
          </span>
        </div>

        {/* Bottom Image Overlay: Key Metric & Timeline */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 pointer-events-none">
          {project.metrics && (
            <div className="bg-brand-blue/95 text-white px-3 py-1.5 rounded-xl shadow-md backdrop-blur-xs flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-cyan-300" />
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-blue-100">Verified Impact</div>
                <div className="text-sm font-extrabold leading-none">{project.metrics.value} {project.metrics.label}</div>
              </div>
            </div>
          )}

          <div className="text-right">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-semibold bg-slate-900/90 text-slate-300 border border-slate-700/60">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>{project.timeline}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Client Organization Subheader */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-blue uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="truncate">{project.client}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 mb-3">
            {project.title}
          </h3>

          {/* Problem vs Solution Summary */}
          <div className="space-y-2.5 mb-5 text-xs sm:text-sm">
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-slate-700">
              <div className="font-bold text-amber-800 text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1">
                <span>The Challenge</span>
              </div>
              <p className="line-clamp-2 text-slate-700 leading-relaxed text-xs">
                {project.challenge}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/60 text-slate-700">
              <div className="font-bold text-brand-blue text-[11px] uppercase tracking-wider mb-1 flex items-center gap-1">
                <span>Engineered Solution</span>
              </div>
              <p className="line-clamp-2 text-slate-700 leading-relaxed text-xs">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 3 Outcome Results Badges */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 mb-4 bg-slate-50/50 rounded-xl px-2">
            {project.results.map((res, idx) => (
              <div key={idx} className="text-center">
                <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                  {res.value}
                </div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 line-clamp-1">
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonial Snippet */}
          {project.testimonial && (
            <div className="relative pl-6 pr-2 py-2 mb-4 text-xs italic text-slate-600 border-l-2 border-brand-blue bg-slate-50/60 rounded-r-xl">
              <Quote className="w-3.5 h-3.5 text-blue-400 absolute top-2 left-1.5" />
              <p className="line-clamp-2 font-normal">"{project.testimonial.quote}"</p>
              <div className="mt-1 text-[11px] font-semibold text-slate-800 not-italic">
                — {project.testimonial.author}, <span className="text-slate-500 font-normal">{project.testimonial.designation}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer: Tech Stack & View Case Study Button */}
        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mb-4">
            <Cpu className="w-3.5 h-3.5 text-slate-400 mr-0.5 shrink-0" />
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-bold text-slate-400">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={() => onOpenModal ? onOpenModal(project) : undefined}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white hover:bg-brand-blue text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md cursor-pointer"
          >
            <span>Explore Case Study & Architecture</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
