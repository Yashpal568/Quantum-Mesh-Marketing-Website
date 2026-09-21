import React, { useEffect } from 'react';
import { 
  Cpu, 
  Globe, 
  Smartphone, 
  Palette, 
  Compass, 
  Cloud, 
  GraduationCap, 
  Fingerprint, 
  Bot, 
  Sprout, 
  Headphones, 
  Sparkles
} from 'lucide-react';
import { services } from '../data/services';
import { ServiceCard3D } from '../components/services/ServiceCard3D';
import { useModal } from '../context/ModalContext';
import { FinalCTA } from '../components/cta/FinalCTA';
import { SEOHead } from '../components/seo/SEOHead';

export const Services: React.FC = () => {
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'Fingerprint':
        return <Fingerprint className="w-5 h-5 text-blue-600" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-indigo-600" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-pink-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-brand-blue" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-600" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-blue" />;
    }
  };

  const getSolutionLink = (id: string): string | null => {
    switch (id) {
      case 'biometric-attendance-ecosystem':
        return '/solutions/biometric-attendance';
      case 'agentic-ai-solutions':
        return '/solutions/agentic-ai';
      case 'cloud-devops-generative-ai':
        return '/solutions/cloud-devops-genai';
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEOHead
        title="IT Services, Custom Management Systems & Web Apps | Quantum Mesh Uttarakhand"
        description="Comprehensive IT services in Uttarakhand and India: custom website development, school management SaaS, hospital management ERP, biometric ecosystems, and cloud DevOps."
        keywords="custom management system in uttarakhand, IT services uttarakhand, school management software saas, website developer in dehradun, web development rudrapur, custom erp development india"
        canonicalPath="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold border border-blue-100 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING & ADVISORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Software & IT Engineering Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
            From concept to deployment, we build robust digital solutions designed for performance, enterprise scalability, and business impact.
          </p>
        </div>

        {/* 10 Services Detailed Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {services.map((svc) => (
            <ServiceCard3D
              key={svc.id}
              service={svc}
              icon={getServiceIcon(svc.iconName)}
              solutionLink={getSolutionLink(svc.id)}
              onOpenQuote={(title) => openModal('quote', title)}
            />
          ))}
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
};
