import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building2, CheckCircle2, Shield, Clock } from 'lucide-react';
import { CITIES_DATA } from '../../data/locations';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const RegionalPresenceSection: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white border-y border-slate-200/60 relative overflow-hidden">
      {/* Background Accent Grids */}
      <div className="absolute inset-0 bg-radial-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-brand-blue text-xs font-extrabold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-brand-blue" />
            <span>Regional Reach & Local Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Uttarakhand's Premier IT & Software Development Hub
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Ranked #1 for businesses searching <strong>"website developer near me"</strong> or custom management systems in Uttarakhand. 
            Headquartered in <strong>Rudrapur</strong>, delivering same-day on-site consultation and cloud engineering across all 13 districts and India.
          </p>
        </div>

        {/* Corporate Headquarters Callout Card */}
        <div className="mt-10 bg-white rounded-2xl border border-blue-200 shadow-sm p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/70 flex items-center justify-center text-brand-blue shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-base">Corporate Software Lab & Operations HQ</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                  Verified Local Hub
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                PSA Plaza, Awas Vikas, U.S.Nagar, Rudrapur, Uttarakhand, 263153
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Full-time R&D engineers • Live biometric test-beds • Client strategy lounge
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => openModal('quote')}
              className="w-full sm:w-auto text-xs justify-center"
            >
              Book In-Office Visit
            </Button>
            <Link
              to="/locations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-xs font-bold text-brand-blue hover:text-blue-700 px-3 py-2"
            >
              <span>View All Cities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* City Clusters Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CITIES_DATA.slice(0, 8).map((city) => (
            <Link
              key={city.id}
              to={`/locations#${city.slug}`}
              className="group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-brand-blue/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    city.region === 'Kumaon'
                      ? 'bg-emerald-50 text-emerald-700'
                      : city.region === 'Garhwal'
                      ? 'bg-purple-50 text-purple-700'
                      : 'bg-blue-50 text-blue-700'
                  }`}>
                    {city.region}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {city.deliveryMode}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors flex items-center justify-between">
                  <span>{city.cityName}</span>
                  <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {city.tagline}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-600 font-medium">
                <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                <span className="truncate">{city.popularServices[0]}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3 Core Trust Pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 pt-8 border-t border-slate-200/60">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-100/70 text-brand-blue flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Rapid Same-Day Presence</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Direct on-site engineering team dispatch to any school, factory, or healthcare facility across Uttarakhand.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">Enterprise Uptime & SLA</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                99.9% cloud availability guarantee, encrypted automated backups, and 2-hour emergency resolution.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-100/70 text-indigo-700 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">100% In-House Engineering</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Zero outsourcing. Every line of code and hardware deployment is handled directly by Quantum Mesh engineers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Explorer Action */}
        <div className="mt-8 text-center px-2">
          <Link
            to="/locations"
            className="w-full sm:w-auto inline-flex items-center justify-center text-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-brand-blue text-xs sm:text-sm font-bold shadow-sm transition-colors leading-normal"
          >
            <span>Explore All City Hubs & Targeted Uttarakhand Services</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
};
