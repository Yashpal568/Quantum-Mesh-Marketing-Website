import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Phone, 
  ShieldCheck, 
  ChevronDown, 
  Sparkles,
  Laptop,
  Cpu,
  Clock,
  Award
} from 'lucide-react';
import { CITIES_DATA, type CityLocation } from '../data/locations';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';
import { SEOHead } from '../components/seo/SEOHead';

export const Locations: React.FC = () => {
  const { openModal } = useModal();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Kumaon' | 'Garhwal' | 'National'>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Dynamic document title for SEO
    document.title = 'Website Developer Near Me & IT Software Company in Uttarakhand | Quantum Mesh';
  }, []);

  // Filter cities by search keyword and region
  const filteredCities = CITIES_DATA.filter((city) => {
    const matchesRegion = selectedRegion === 'All' || city.region === selectedRegion;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesRegion;
    const matchesQuery = 
      city.cityName.toLowerCase().includes(q) ||
      city.tagline.toLowerCase().includes(q) ||
      city.localFocus.toLowerCase().includes(q) ||
      city.targetKeywords.some(k => k.toLowerCase().includes(q)) ||
      city.popularServices.some(s => s.toLowerCase().includes(q)) ||
      city.clientTypes.some(c => c.toLowerCase().includes(q));
    return matchesRegion && matchesQuery;
  });

  const faqs = [
    {
      q: 'How can I find the best website developer near me in Uttarakhand?',
      a: 'Quantum Mesh is the premier website and software development firm headquartered in PSA Plaza, Awas Vikas, Rudrapur, Uttarakhand. We provide direct on-site consultations and dedicated engineering teams across Rudrapur, Dehradun, Haldwani, Haridwar, Roorkee, Kashipur, and all 13 districts of Uttarakhand. Unlike freelance platforms, we operate a dedicated engineering facility with local accountability and formal SLAs.'
    },
    {
      q: 'Can Quantum Mesh build a custom management system tailored specifically for our business?',
      a: 'Yes, custom management systems are our core specialty. We build end-to-end bespoke solutions including Hospital Management Systems (HMS) with NABH-ready EMR, School Management ERP SaaS (available either on monthly rental or one-time custom development), Seed Batch Traceability for Agritech, Visitor Management Systems (VMS), and Restaurant Cloud Billing (Servora).'
    },
    {
      q: 'Do you supply and install physical biometric attendance machines in Uttarakhand?',
      a: 'Yes. We offer an integrated biometric ecosystem combining industrial hardware (facial recognition, fingerprint scanners, RFID turnstiles) with our automated cloud HRMS software. We handle hardware delivery, on-site mounting, network configuration, and payroll system synchronization across Rudrapur Sidcul, Haridwar, Haldwani, Dehradun, and surrounding industrial corridors.'
    },
    {
      q: 'What is the pricing model for school management software or web development?',
      a: 'For schools and educational institutes, we offer flexible models: either an affordable monthly subscription SaaS with zero upfront server overhead, or a customized on-premise/dedicated cloud license with bespoke student portals. Website development and custom ERP projects are scoped transparently with clear milestone deliverables.'
    },
    {
      q: 'Do you serve clients outside Uttarakhand across India?',
      a: 'Absolutely. While our corporate headquarters and primary engineering center is in Rudrapur, Uttarakhand, our cloud architecture, Agentic AI, and enterprise SaaS teams serve funded startups, healthcare chains, and enterprises in Delhi NCR, Bengaluru, Mumbai, Pune, and throughout India.'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FAFCFF] min-h-screen">
      <SEOHead
        title="Website Developer Near Me & IT Software Company in Uttarakhand | Quantum Mesh"
        description="Looking for a top website developer near you or custom management system software company in Uttarakhand? Quantum Mesh (PSA Plaza, Rudrapur HQ) builds enterprise web apps, school ERPs, and biometric systems."
        keywords="website developer near me, software company near me, website development company in rudrapur, website developer in dehradun, web development in haldwani, IT company in uttarakhand, custom software development company uttarakhand, biometric attendance machine rudrapur"
        canonicalPath="/locations"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: 'Uttarakhand', url: '/locations/uttarakhand' }
        ]}
        schema={{
          '@type': 'FAQPage',
          'mainEntity': faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.a
            }
          }))
        }}
      />

      {/* 1. Hero Fold — High Intent Local Search SEO */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-200/60 bg-gradient-to-b from-blue-50/40 via-white to-[#FAFCFF]">
        <div className="absolute inset-0 bg-radial-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200/80 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6 shadow-xs animate-fade-in">
            <MapPin className="w-3.5 h-3.5 text-brand-blue" />
            <span>Uttarakhand's Official IT & Software Engineering Hub</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            #1 Website Developer & Custom Management System Company in{' '}
            <span className="text-brand-blue underline decoration-brand-blue/30 decoration-wavy decoration-2">
              Uttarakhand
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Searching for a trusted <strong>website developer near you</strong> or an enterprise software development partner? 
            Quantum Mesh delivers high-performance web applications, custom ERPs, biometric attendance systems, and agentic AI 
            across <strong>Rudrapur, Dehradun, Haldwani, Haridwar, Roorkee, Kashipur, Pantnagar</strong>, and pan-India.
          </p>

          {/* Value Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>Physical HQ: PSA Plaza, Rudrapur</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Same-Day Local On-Site Deployment</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Dedicated Enterprise SLAs & Support</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <Award className="w-4 h-4 text-amber-600" />
              <span>50+ Successful Deployments</span>
            </div>
          </div>

          {/* Quick Search & Filter Controls */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city (e.g. Rudrapur, Dehradun), service (e.g. school, biometric) or keyword..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300/80 shadow-md text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Region Filter Tabs */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              {(['All', 'Kumaon', 'Garhwal', 'National'] as const).map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedRegion === region
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {region === 'All' ? 'All Locations (14+ Cities)' : region === 'National' ? 'Pan-India Enterprise' : `${region} Region`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Official Single Headquarters Showcase Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl border-2 border-blue-200/80 shadow-lg p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-brand-blue font-extrabold text-[11px] tracking-wide uppercase">
                Official Corporate Headquarters
              </span>
              <span className="text-xs text-slate-500 font-medium">Serving All Uttarakhand & India</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Quantum Mesh Solutions Pvt. Ltd. — Rudrapur Lab
            </h3>
            <p className="text-sm text-slate-600 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span><strong>PSA Plaza, Awas Vikas, U.S.Nagar, Rudrapur, Uttarakhand, 263153</strong></span>
            </p>
            <p className="text-xs text-slate-500">
              Our central software lab, R&D facility, and hardware testing hub. Fully equipped for live biometric testing, ERP demos, and client strategy sessions.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-3 w-full lg:w-auto">
            <Button
              variant="primary"
              size="md"
              onClick={() => openModal('quote')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-sm"
            >
              Book In-Office Discovery
            </Button>
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Cities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Targeted IT Service Hubs & Local City Coverage
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Showing {filteredCities.length} active service clusters matching your filter
            </p>
          </div>
          <div className="hidden sm:block text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
            Rapid Response Across Uttarakhand
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city: CityLocation) => (
            <div
              key={city.id}
              id={city.slug}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                city.id === 'rudrapur'
                  ? 'bg-gradient-to-b from-blue-50/50 to-white border-blue-300 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              <div className="p-6 space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${
                      city.region === 'Kumaon' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/70' 
                        : city.region === 'Garhwal'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200/70'
                        : 'bg-blue-50 text-blue-700 border border-blue-200/70'
                    }`}>
                      {city.region} Region
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {city.deliveryMode}
                    </span>
                  </div>
                  {city.id === 'rudrapur' && (
                    <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wide">
                      Headquarters
                    </span>
                  )}
                </div>

                {/* City Title */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {city.cityName}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                    {city.tagline}
                  </p>
                </div>

                {/* Search Keyword Badges */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Primary Search Keywords
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {city.targetKeywords.slice(0, 4).map((kw, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[11px] hover:bg-blue-50 hover:text-brand-blue transition-colors"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popular Services Checklist */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Specialized Local Services
                  </div>
                  <ul className="space-y-1.5">
                    {city.popularServices.slice(0, 4).map((svc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Local Focus Area */}
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 leading-relaxed italic">
                    "{city.localFocus}"
                  </p>
                </div>

                {/* Target Clients */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {city.clientTypes.map((client, cIdx) => (
                    <span key={cIdx} className="text-[10px] font-medium bg-slate-50 text-slate-500 px-2 py-0.5 rounded border border-slate-200/50">
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => openModal('quote')}
                  className="text-xs font-bold text-brand-blue hover:text-blue-700 flex items-center gap-1 group/btn"
                >
                  <span>Request Proposal for {city.cityName.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  Available Now
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Deep Search Intent Mapping (Why Quantum Mesh Ranks #1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Uttarakhand Tech Partner</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight max-w-2xl">
              Why Search Engines & Businesses Rank Quantum Mesh at the Top
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-3xl leading-relaxed">
              When you search for <em>"website developer near me"</em> or <em>"software company in Uttarakhand"</em>, 
              you need more than a generic directory listing. You need a dedicated, in-house team that understands 
              your local business ecosystem and delivers enterprise-grade software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Local On-Site Accountability</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Headquartered in PSA Plaza, Rudrapur. We sit across the table with you, audit your facility workflows, and train your staff in person.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Integrated Hardware + Cloud</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unlike pure web shops, we deliver physical biometric access terminals, turnstiles, and IoT sensors alongside cloud dashboards and mobile apps.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold">Tailored SaaS & Rental Options</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  From monthly subscription School ERPs that eliminate capital expenditure to custom bespoke enterprise ERP codebases with complete IP ownership.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Ready to transform your business operations with Uttarakhand's leading software development team?
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => openModal('quote')}
                className="bg-brand-blue hover:bg-blue-600 text-white font-bold"
              >
                Schedule Local Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Local Search Intent FAQs (Schema.org compliant) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Questions by Uttarakhand Businesses
          </h2>
          <p className="text-sm text-slate-500">
            Clear answers about our software engineering, website development, and biometric services across Uttarakhand.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-brand-blue transition-colors"
                aria-expanded={openFaq === index}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === index ? 'rotate-180 text-brand-blue' : ''}`} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Comprehensive Keyword Cloud for Crawler Topical Authority */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-slate-200/60">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center">
          Comprehensive Regional Index — Serving Every Corner of Uttarakhand
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-500 leading-relaxed">
          <span>Website developer in Rudrapur</span> •
          <span>Software company in Dehradun</span> •
          <span>Web development in Haldwani</span> •
          <span>IT company in Haridwar</span> •
          <span>Website designer near me</span> •
          <span>School management software in Uttarakhand</span> •
          <span>Biometric attendance machine Rudrapur Sidcul</span> •
          <span>Hospital management software Nainital</span> •
          <span>Agritech seed software Kashipur</span> •
          <span>Mobile app developers Roorkee</span> •
          <span>Resort website development Rishikesh</span> •
          <span>Custom ERP software Sitarganj</span> •
          <span>Software developer in Pantnagar</span> •
          <span>IT solutions company India</span>
        </div>
      </section>
    </div>
  );
};
