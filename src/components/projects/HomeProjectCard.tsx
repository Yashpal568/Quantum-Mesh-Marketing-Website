import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface HomeProject {
  id: string;
  client: string;
  title: string;
  tags: string[];
  previewType: 'tax-portal' | 'agritech' | 'cloud-k8s' | 'biometric-campus';
}

interface HomeProjectCardProps {
  project: HomeProject;
}

export const HomeProjectCard: React.FC<HomeProjectCardProps> = ({ project }) => {
  const renderMockup = (type: string) => {
    switch (type) {
      case 'tax-portal':
        return (
          <div className="w-full h-full bg-[#0B1528] p-3 text-white flex flex-col justify-between select-none">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-700/60 text-[10px]">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-200">Nagar Nigam TaxPortal</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px] font-mono">
                Live UPI
              </span>
            </div>

            {/* Mockup Stats */}
            <div className="grid grid-cols-3 gap-1.5 my-2">
              <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/40 text-center">
                <span className="text-[7px] text-slate-400 block">Collection</span>
                <span className="text-[10px] font-bold text-white">₹4.2 Cr</span>
              </div>
              <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/40 text-center">
                <span className="text-[7px] text-slate-400 block">Wards</span>
                <span className="text-[10px] font-bold text-cyan-400">40 Live</span>
              </div>
              <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/40 text-center">
                <span className="text-[7px] text-slate-400 block">Resolved</span>
                <span className="text-[10px] font-bold text-emerald-400">98.4%</span>
              </div>
            </div>

            {/* Collection Graph Simulation */}
            <div className="bg-slate-800/60 p-1.5 rounded border border-slate-700/40">
              <div className="h-6 flex items-end space-x-1 px-1">
                {[35, 50, 45, 70, 85, 95, 80, 100, 90].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-emerald-400 rounded-xs opacity-90"
                  />
                ))}
              </div>
            </div>

            <div className="text-[8px] text-slate-400 flex items-center justify-between pt-1">
              <span>Rudrapur Municipal Zone</span>
              <span className="text-emerald-400 font-semibold">+240% Recovery</span>
            </div>
          </div>
        );

      case 'agritech':
        return (
          <div className="w-full h-full bg-[#0D1F17] p-3 text-white flex flex-col justify-between select-none">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-2 border-b border-emerald-900/60 text-[10px]">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="font-semibold text-slate-200">AgroMesh Telemetry</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[8px] font-mono">
                Sensors OK
              </span>
            </div>

            {/* Mockup Stats */}
            <div className="grid grid-cols-3 gap-1.5 my-2">
              <div className="bg-emerald-950/60 p-1.5 rounded border border-emerald-800/40 text-center">
                <span className="text-[7px] text-emerald-300 block">Germination</span>
                <span className="text-[10px] font-bold text-emerald-400">99.8%</span>
              </div>
              <div className="bg-emerald-950/60 p-1.5 rounded border border-emerald-800/40 text-center">
                <span className="text-[7px] text-emerald-300 block">Temp</span>
                <span className="text-[10px] font-bold text-amber-300">21.4°C</span>
              </div>
              <div className="bg-emerald-950/60 p-1.5 rounded border border-emerald-800/40 text-center">
                <span className="text-[7px] text-emerald-300 block">QR Bags</span>
                <span className="text-[10px] font-bold text-white">250k+</span>
              </div>
            </div>

            {/* Cold Chain IoT Pulse */}
            <div className="bg-emerald-950/40 border border-emerald-800/30 p-1.5 rounded flex items-center justify-between text-[8px]">
              <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-200">Warehouse #4 Climate Telemetry</span>
              </div>
              <span className="text-amber-300 font-mono">48% RH</span>
            </div>

            <div className="text-[8px] text-emerald-400/80 flex items-center justify-between pt-1">
              <span>Pantnagar Seed Center</span>
              <span className="text-emerald-300 font-semibold">Anti-Counterfeit QR</span>
            </div>
          </div>
        );

      case 'cloud-k8s':
        return (
          <div className="w-full h-full bg-[#081225] p-3 text-white flex flex-col justify-between select-none">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-2 border-b border-sky-900/60 text-[10px]">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="font-semibold text-slate-200">KubeOps Cluster</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[8px] font-mono">
                AWS + GCP
              </span>
            </div>

            {/* Mockup Stats */}
            <div className="grid grid-cols-3 gap-1.5 my-2">
              <div className="bg-sky-950/60 p-1.5 rounded border border-sky-800/40 text-center">
                <span className="text-[7px] text-sky-300 block">Cloud Spend</span>
                <span className="text-[10px] font-bold text-emerald-400">-42%</span>
              </div>
              <div className="bg-sky-950/60 p-1.5 rounded border border-sky-800/40 text-center">
                <span className="text-[7px] text-sky-300 block">Deployments</span>
                <span className="text-[10px] font-bold text-white">5x / Day</span>
              </div>
              <div className="bg-sky-950/60 p-1.5 rounded border border-sky-800/40 text-center">
                <span className="text-[7px] text-sky-300 block">Uptime SLA</span>
                <span className="text-[10px] font-bold text-cyan-300">99.99%</span>
              </div>
            </div>

            {/* Node Pods Active */}
            <div className="bg-sky-950/40 border border-sky-800/30 p-1.5 rounded flex items-center justify-between text-[8px]">
              <span className="text-slate-300">ArgoCD GitOps Sync:</span>
              <span className="text-emerald-400 font-bold">12 Clusters Healthy</span>
            </div>

            <div className="text-[8px] text-slate-400 flex items-center justify-between pt-1">
              <span>Terraform AutoScale</span>
              <span className="text-sky-400 font-semibold">Zero Downtime</span>
            </div>
          </div>
        );

      case 'biometric-campus':
      default:
        return (
          <div className="w-full h-full bg-[#120D24] p-3 text-white flex flex-col justify-between select-none">
            {/* Mockup Header */}
            <div className="flex items-center justify-between pb-2 border-b border-purple-900/60 text-[10px]">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="font-semibold text-slate-200">CampusGate Access</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[8px] font-mono">
                Edge AI IR
              </span>
            </div>

            {/* QR Scan & Gate Cards */}
            <div className="flex items-center space-x-2 my-2">
              <div className="w-14 h-14 bg-slate-900 border border-purple-800/60 p-1 rounded-md shrink-0 flex items-center justify-center">
                <div className="w-full h-full bg-purple-950/80 rounded-xs flex flex-col items-center justify-center text-[7px] text-purple-200 font-mono">
                  <span>[ FACE ID ]</span>
                  <span className="text-emerald-400 font-bold">&lt; 0.2s</span>
                </div>
              </div>
              <div className="space-y-1 flex-1">
                <div className="text-[9px] font-bold text-slate-200">Student: ID #2024-884</div>
                <div className="text-[8px] text-purple-300">Gate 4 Speed-Gate Turnstile</div>
                <div className="text-[7px] text-emerald-400 font-semibold">Authorized &amp; Logged to ERP</div>
              </div>
            </div>

            <div className="bg-purple-950/40 border border-purple-800/40 px-2 py-1 rounded text-[8px] text-purple-200 flex items-center justify-between">
              <span>Turnstile Barrier Relay</span>
              <span className="font-bold text-emerald-400">UNLOCKED</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl md:rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-float transition-all duration-300 flex flex-col justify-between">
      {/* Top UI Preview Window */}
      <div className="relative h-44 sm:h-48 w-full bg-slate-950 overflow-hidden border-b border-slate-100">
        {/* Browser / Window Chrome Header */}
        <div className="h-5 bg-slate-900 flex items-center justify-between px-3 border-b border-slate-800">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/70" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
          </div>
          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors" />
        </div>

        {/* Mockup Canvas */}
        <div className="h-[calc(100%-20px)] w-full transition-transform duration-500 group-hover:scale-105">
          {renderMockup(project.previewType)}
        </div>

        {/* Hover Overlay with CTA */}
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to="/projects"
            className="px-4 py-2 rounded-full bg-white text-brand-navy text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-50"
          >
            <span>Read Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-blue" />
          </Link>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Verified Client Badge */}
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand-blue uppercase tracking-wider mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="truncate">{project.client}</span>
          </div>

          <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-3 line-clamp-2">
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50/80 text-brand-blue border border-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
