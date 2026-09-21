import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  MapPin, 
  Phone, 
  Mail,
  Globe
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { submitLead } from '../../services/leadService';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const regionalHubs = [
    { name: 'Rudrapur (HQ)', hash: 'rudrapur', isHQ: true },
    { name: 'Dehradun', hash: 'dehradun' },
    { name: 'Haldwani', hash: 'haldwani' },
    { name: 'Haridwar & Roorkee', hash: 'haridwar-roorkee' },
    { name: 'Kashipur & Pantnagar', hash: 'kashipur-pantnagar' },
    { name: 'Rishikesh & Ramnagar', hash: 'rishikesh-ramnagar' },
    { name: 'Kichha & Sitarganj', hash: 'kichha-sitarganj-khatima' },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      try {
        await submitLead({
          formType: 'Newsletter Subscription',
          email: email.trim(),
        });
      } catch (err) {
        console.warn('Newsletter submission error:', err);
      }
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-10 text-slate-600 relative overflow-hidden">
      {/* Top subtle ambient highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid (Total: 4 + 2 + 2 + 2 + 2 = 12 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-12">
          
          {/* Column 1: Brand, Corporate Identity & HQ (4 cols) */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            <Logo size="md" />
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Quantum Mesh engineers mission-critical management software, enterprise web applications, and autonomous AI systems. Engineered for high performance, reliability, and scale.
            </p>

            {/* Corporate Engineering HQ Box */}
            <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2.5 max-w-sm shadow-2xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">Corporate Engineering HQ:</span>
                  <span className="text-slate-600 leading-relaxed block">
                    PSA Plaza, Awas Vikas, U.S.Nagar, Rudrapur, Uttarakhand, 263153
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 flex flex-col xs:flex-row xs:items-center justify-between gap-2 text-xs text-slate-600">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>+91 98765 43210</span>
                </a>
                <a 
                  href="mailto:quantumesh.ai@gmail.com" 
                  className="flex items-center gap-1.5 hover:text-brand-blue transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>quantumesh.ai@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-blue-50 text-slate-600 hover:text-brand-blue flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 border border-slate-200/60"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.69-1.69A1.7 1.7 0 0 0 6.46 5.37a1.7 1.7 0 0 0-1.7 1.7 1.69 1.69 0 0 0 1.7 1.69m1.4 9.74v-8.37H5.06v8.37z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 border border-slate-200/60"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 border border-slate-200/60"
                aria-label="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-pink-50 text-slate-600 hover:text-pink-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 border border-slate-200/60"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100/80 hover:bg-red-50 text-slate-600 hover:text-red-600 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 border border-slate-200/60"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Ready Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900 flex items-center gap-1.5">
              <span>Products</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-50 text-brand-blue font-bold border border-blue-100">
                Ready
              </span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/products/hms" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Hospital ERP (HMS)
                </Link>
              </li>
              <li>
                <Link to="/products/vms" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Visitor Pass (VMS)
                </Link>
              </li>
              <li>
                <Link to="/products/ums" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  University ERP (UMS)
                </Link>
              </li>
              <li>
                <Link to="/products/lms" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Learning Platform (LMS)
                </Link>
              </li>
              <li>
                <Link to="/products/restaurant-saas" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Restaurant SaaS (Servora)
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/products" className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-blue-700 transition-colors gap-1 group">
                  <span>View All 7 Systems</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/solutions/biometric-attendance" className="hover:text-brand-blue transition-colors flex items-center justify-between text-slate-600 hover:translate-x-0.5 duration-150">
                  <span>Biometric Ecosystem</span>
                  <span className="text-[9px] px-1 rounded bg-blue-100/70 text-blue-700 font-bold">IoT</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/agentic-ai" className="hover:text-brand-blue transition-colors flex items-center justify-between text-slate-600 hover:translate-x-0.5 duration-150">
                  <span>Agentic AI Agents</span>
                  <span className="text-[9px] px-1 rounded bg-indigo-100/70 text-indigo-700 font-bold">AI</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions/cloud-devops-genai" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  School ERP SaaS
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Seed Agritech Lot
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/services" className="inline-flex items-center text-xs font-semibold text-brand-blue hover:text-blue-700 transition-colors gap-1 group">
                  <span>Explore All 10 Services</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Locations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  About Quantum Mesh
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Our Work & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-brand-blue transition-colors flex items-center justify-between text-brand-blue font-semibold hover:translate-x-0.5 duration-150">
                  <span>Regional Hubs</span>
                  <span className="text-[9px] px-1 rounded bg-amber-100 text-amber-800 font-bold">Near Me</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-blue transition-colors flex items-center justify-between text-slate-600 hover:translate-x-0.5 duration-150">
                  <span>Careers</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-blue transition-colors block text-slate-600 hover:translate-x-0.5 duration-150">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay Updated & Dispatch (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-900">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Subscribe for software releases, architecture blueprints, and IT engineering updates.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter business email"
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-200/90 text-xs bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to updates"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-7 h-7 rounded-lg bg-brand-blue text-white flex items-center justify-center hover:bg-blue-600 transition-colors shadow-2xs"
                >
                  {isSubscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[11px] text-emerald-600 font-semibold animate-fade-in flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Subscribed successfully!</span>
                </p>
              )}
            </form>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO City Directory Strip */}
        <div className="mt-8 p-4 sm:p-5 bg-gradient-to-r from-slate-50 via-blue-50/20 to-slate-50 border border-slate-200/80 rounded-2xl shadow-2xs space-y-3">
          {/* Top Row: Label & Nationwide Scope */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-slate-200/60">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-100/80 border border-blue-200/70 text-brand-blue text-[11px] font-bold uppercase tracking-wider shrink-0">
                <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>Uttarakhand Regional Hubs</span>
              </div>
              <span className="text-xs text-slate-500 font-medium hidden md:inline">
                On-site engineering, client consultation & enterprise IT support across:
              </span>
            </div>

            <Link
              to="/locations#pan-india"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors group shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-brand-blue" />
              <span>Pan-India Enterprise Deployment</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Bottom Row: Cities as elegant interactive chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {regionalHubs.map((hub) => (
              <Link
                key={hub.name}
                to={`/locations#${hub.hash}`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all duration-150 ${
                  hub.isHQ
                    ? 'bg-brand-blue text-white font-bold shadow-xs hover:bg-blue-600 hover:shadow-sm'
                    : 'bg-white hover:bg-blue-50/60 text-slate-700 hover:text-brand-blue font-medium border border-slate-200/80 hover:border-blue-300 shadow-2xs'
                }`}
              >
                <span>{hub.name}</span>
                {hub.isHQ && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-white/20 text-white font-bold uppercase tracking-wide">
                    HQ
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal & Provenance */}
        <div className="pt-6 mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} Quantum Mesh Technologies. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-300">•</span>
            <Link to="/privacy-policy" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/terms-of-service" className="hover:text-brand-blue transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300">•</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors">
              LLMs Standard
            </a>
            <span className="text-slate-300">•</span>
            <Link to="/leads" className="text-slate-400 hover:text-brand-blue transition-colors font-medium">
              Leads CRM
            </Link>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Engineered with</span>
            <span className="text-red-500">❤️</span>
            <span>in Uttarakhand, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
