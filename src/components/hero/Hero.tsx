import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Cog, 
  Users, 
  Headphones, 
  TrendingUp 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroDevices } from './HeroDevices';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useModal } from '../../context/ModalContext';

export const Hero: React.FC = () => {
  const { containerRef, rotateX, rotateY, translateX, translateY } = useMouseParallax(4, 6);
  const { openModal } = useModal();

  return (
    <section
      ref={containerRef}
      className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden hero-glow"
    >
      {/* Background Decorative Mesh Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/40 via-cyan-50/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-50/30 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & CTAs (7 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-left">
            {/* Small Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-brand-blue text-xs sm:text-sm font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>Innovative Software for a Smarter Tomorrow</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Turning Ideas into Powerful{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal">
              We build modern software products and provide IT solutions that help businesses grow, automate and scale.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full max-w-md">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openModal('demo')}
                leftIcon={
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center -ml-1">
                    <Play className="w-3 h-3 fill-current text-white ml-0.5" />
                  </div>
                }
                className="w-full sm:w-auto px-6 py-3.5 shadow-md hover:shadow-glow-blue justify-center"
              >
                Book a Demo
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => openModal('inquiry')}
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                className="w-full sm:w-auto px-6 py-3.5 justify-center"
              >
                Customer Inquiry
              </Button>
            </div>

            {/* Trust Indicators Row - clean 2x2 grid on mobile, row on desktop */}
            <div className="pt-6 border-t border-slate-100/80 grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap items-center gap-3 sm:gap-x-4 lg:gap-x-5 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                  <Cog className="w-3.5 h-3.5" />
                </div>
                <span>Product Driven</span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span>Trusted by Clients</span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Headphones className="w-3.5 h-3.5" />
                </div>
                <span>End-to-End Support</span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-6 h-6 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Scalable Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Product Showcase (6 cols on lg) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <HeroDevices
              rotateX={rotateX}
              rotateY={rotateY}
              translateX={translateX}
              translateY={translateY}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
