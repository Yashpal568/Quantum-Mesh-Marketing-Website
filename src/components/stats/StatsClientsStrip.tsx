import React from 'react';
import { CalendarCheck, Users, ShieldCheck, Clock } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';

const StatCard: React.FC<{
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}> = ({ value, suffix, label, icon }) => {
  const { count, elementRef } = useCountUp(value, 1600);

  return (
    <div ref={elementRef} className="flex items-center space-x-3 py-1">
      <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 border border-blue-100">
        {icon}
      </div>
      <div>
        <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-none">
          {count}
          <span className="text-brand-blue">{suffix}</span>
        </div>
        <span className="text-xs text-slate-500 font-medium tracking-tight mt-0.5 block">
          {label}
        </span>
      </div>
    </div>
  );
};

export const StatsClientsStrip: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left: 4 Statistics with count-up */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
            <StatCard
              value={50}
              suffix="+"
              label="Projects Delivered"
              icon={<CalendarCheck className="w-5 h-5" />}
            />
            <StatCard
              value={30}
              suffix="+"
              label="Happy Clients"
              icon={<Users className="w-5 h-5" />}
            />
            <StatCard
              value={99}
              suffix="%"
              label="Client Satisfaction"
              icon={<ShieldCheck className="w-5 h-5" />}
            />
            <StatCard
              value={24}
              suffix="/7"
              label="Support"
              icon={<Clock className="w-5 h-5" />}
            />
          </div>

          {/* Divider on desktop */}
          <div className="hidden lg:block w-px h-16 bg-slate-200" />

          {/* Right: Our Clients */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
              OUR CLIENTS
            </span>

            <div className="flex items-center flex-wrap gap-5 sm:gap-7">
              {/* Manipal University */}
              <div className="flex items-center space-x-2 text-slate-700 hover:text-brand-navy transition-colors">
                <div className="w-7 h-7 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 font-bold text-xs">
                  M
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-xs font-black tracking-tight text-amber-700">Manipal</span>
                  <span className="text-[8px] font-semibold text-slate-400 tracking-widest">UNIVERSITY</span>
                </div>
              </div>

              {/* Skynet Infotech */}
              <div className="flex items-center space-x-2 text-slate-700 hover:text-brand-navy transition-colors">
                <div className="w-7 h-7 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 font-bold text-xs">
                  ⚡
                </div>
                <span className="text-xs font-bold tracking-tight text-slate-800">
                  Skynet <span className="text-blue-600">Infotech</span>
                </span>
              </div>

              {/* Nagar Nigam Rudrapur */}
              <div className="flex items-center space-x-2 text-slate-700 hover:text-brand-navy transition-colors">
                <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 font-bold text-[9px]">
                  🏛️
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] font-black text-slate-800">NAGAR NIGAM</span>
                  <span className="text-[8px] font-semibold text-slate-500">RUDRAPUR</span>
                </div>
              </div>

              {/* And More... */}
              <span className="text-xs text-slate-400 font-medium italic">
                and more...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
