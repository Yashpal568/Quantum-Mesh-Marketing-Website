import React, { useEffect } from 'react';
import { 
  Zap, 
  Calendar, 
  DollarSign, 
  Building2, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Fingerprint 
} from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { Button } from '../../components/ui/Button';
import { useModal } from '../../context/ModalContext';
import { FinalCTA } from '../../components/cta/FinalCTA';
import { SEOHead } from '../../components/seo/SEOHead';

export const BiometricEcosystem: React.FC = () => {
  const { openModal } = useModal();
  const solution = solutionsData['biometric-attendance'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Zap': return <Zap className="w-5 h-5 text-blue-600" />;
      case 'Calendar': return <Calendar className="w-5 h-5 text-indigo-600" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5 text-emerald-600" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-purple-600" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-rose-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-cyan-600" />;
      default: return <Fingerprint className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <div className="pt-28 pb-16">
      <SEOHead
        title="Biometric Attendance Machine & Cloud Ecosystem | Quantum Mesh Uttarakhand"
        description="Complete biometric hardware and cloud HRMS ecosystem in Rudrapur Sidcul, Dehradun, and Haridwar. Facial recognition terminals, fingerprint scanners, turnstiles, and automated payroll sync."
        keywords="biometric attendance machine rudrapur sidcul, biometric attendance device near me, facial recognition machine uttarakhand, time office software rudrapur, turnstiles haridwar"
        canonicalPath="/solutions/biometric-attendance"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/services' },
          { name: 'Biometric Attendance Ecosystem', url: '/solutions/biometric-attendance' }
        ]}
        schema={{
          '@type': 'Product',
          'name': 'Quantum Mesh Biometric Attendance Ecosystem',
          'description': 'Integrated facial recognition & fingerprint biometric hardware terminals with automated cloud payroll sync.',
          'brand': {
            '@type': 'Brand',
            'name': 'Quantum Mesh'
          },
          'offers': {
            '@type': 'Offer',
            'price': 'Contact for Quote',
            'priceCurrency': 'INR',
            'availability': 'https://schema.org/InStock'
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 mb-16 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold border border-blue-100">
                <Fingerprint className="w-3.5 h-3.5" />
                <span>{solution.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {solution.overview}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 w-full">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openModal('demo', 'Biometric Attendance Ecosystem')}
                  className="w-full sm:w-auto justify-center shadow-md hover:shadow-glow-blue"
                >
                  Request Device Demo
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('quote', 'Biometric Hardware & Software Quote')}
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Get Hardware & Software Quote
                </Button>
              </div>

              {/* Quick Specs Highlight Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Face Scan Speed</span>
                  <span className="text-sm font-extrabold text-slate-900">&lt; 0.2s IR Liveness</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Connectivity</span>
                  <span className="text-sm font-extrabold text-slate-900">4G SIM + Wi-Fi</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Cloud Push</span>
                  <span className="text-sm font-extrabold text-emerald-600">Real-time WebSocket</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Battery Runtime</span>
                  <span className="text-sm font-extrabold text-slate-900">4 Hours Backup</span>
                </div>
              </div>
            </div>

            {/* Right Generated Showcase Image (5 cols) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group-hover:scale-[1.01] transition-transform duration-300">
                <img
                  src={solution.heroImage}
                  alt="Biometric Attendance Terminal and Cloud Software"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold flex items-center justify-between">
                  <span className="bg-slate-900/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700">
                    Dual IR Face Terminal + Cloud HRMS
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Live Sync
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Specifications Section */}
        {solution.hardwareSpecs && (
          <div className="mb-20 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                COMMERCIAL GRADE TERMINAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                {solution.hardwareSpecs.title}
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Built to withstand continuous high-volume shift traffic in corporate headquarters, industrial manufacturing plants, hospitals, and schools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solution.hardwareSpecs.items.map((spec, i) => (
                <div key={i} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60 flex flex-col justify-between">
                  <span className="text-xs font-semibold text-cyan-400 mb-1">{spec.label}</span>
                  <span className="text-sm font-medium text-slate-200">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Software Modules Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              SOFTWARE PLATFORM
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              End-to-End Attendance & Payroll Automation
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Say goodbye to manual punch reconciliation, paper registers, and proxy attendance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-float hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center mb-4 transition-colors">
                  {getFeatureIcon(feat.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Workflow Steps */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 mb-20">
          <div className="text-left mb-8">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              DEPLOYMENT LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              From Box to Live Attendance in 4 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflows.map((wf) => (
              <div key={wf.step} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-black text-blue-200 block mb-2">{wf.step}</span>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{wf.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Options / Packages */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              PACKAGES & DEPLOYMENT
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Select Your Organization Model
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {solution.deploymentOptions.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-blue-300 hover:shadow-float transition-all duration-300"
              >
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-brand-blue inline-block mb-3">
                    {pkg.tier}
                  </span>
                  <p className="text-xs text-slate-500 font-medium mb-4">{pkg.suitableFor}</p>

                  <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-6">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-slate-700 gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openModal('quote', `Biometric Package: ${pkg.tier}`)}
                  className="w-full text-brand-blue border-blue-200 hover:bg-blue-50 justify-between"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Package Quote
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {solution.faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
};
