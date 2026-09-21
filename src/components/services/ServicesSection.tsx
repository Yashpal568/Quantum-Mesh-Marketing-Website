import React from 'react';
import { Link } from 'react-router-dom';
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
  ArrowRight
} from 'lucide-react';
import { services } from '../../data/services';
import { ServiceCard3D } from './ServiceCard3D';
import { useModal } from '../../context/ModalContext';

export const ServicesSection: React.FC = () => {
  const { openModal } = useModal();

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

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              End-to-End IT & Digital Engineering
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              From enterprise architecture to tailored digital systems, we build software designed to scale with your organization.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-200 text-brand-blue hover:border-brand-blue hover:bg-blue-50/60 text-xs sm:text-sm font-semibold transition-all duration-200 group shadow-xs"
            >
              <span>Explore All 10 Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 6 Core Services Grid with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services
            .filter((s) => [
              'custom-software',
              'web-application',
              'mobile-app-development',
              'cloud-devops-generative-ai',
              'agentic-ai-solutions',
              'ui-ux-design'
            ].includes(s.id))
            .map((service) => (
              <ServiceCard3D
                key={service.id}
                service={service}
                icon={getServiceIcon(service.iconName)}
                solutionLink={null}
                onOpenQuote={(title) => openModal('quote', title)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
