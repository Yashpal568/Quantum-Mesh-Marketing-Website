import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const FinalCTA: React.FC = () => {
  const { openModal } = useModal();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navy Banner Container matching reference image */}
        <div className="relative bg-[#081426] rounded-3xl md:rounded-4xl overflow-hidden px-6 py-12 sm:px-12 sm:py-16 shadow-2xl border border-slate-800">
          {/* Luminous Mesh Wave Graphic & Glow Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Ambient Radial Mesh Glow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-l from-cyan-500/20 via-blue-600/25 to-transparent blur-3xl" />
            <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-purple-600/15 blur-3xl" />

            {/* Glowing SVG Wave Mesh Paths */}
            <svg
              className="absolute right-0 top-0 bottom-0 h-full w-full sm:w-2/3 opacity-75"
              viewBox="0 0 700 300"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100,280 C 250,220 300,100 450,180 C 550,230 620,120 700,200"
                stroke="url(#ctaWave1)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 120,290 C 270,230 320,120 470,195 C 570,240 640,140 700,220"
                stroke="url(#ctaWave2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
              <path
                d="M 140,295 C 290,245 340,140 490,210 C 590,250 660,160 700,240"
                stroke="url(#ctaWave1)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 160,300 C 310,260 360,160 510,225 C 610,260 670,180 700,255"
                stroke="url(#ctaWave2)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              
              {/* Connected glowing nodes */}
              <circle cx="450" cy="180" r="4" fill="#00E5FF" filter="drop-shadow(0 0 6px #00E5FF)" />
              <circle cx="550" cy="230" r="3" fill="#3B82F6" filter="drop-shadow(0 0 6px #3B82F6)" />
              <circle cx="470" cy="195" r="3" fill="#8B5CF6" />
              <circle cx="620" cy="120" r="4" fill="#00E5FF" />

              <defs>
                <linearGradient id="ctaWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00E5FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="ctaWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
                  <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.7" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Banner Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase">
                LET'S BUILD TOGETHER
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight">
                Have a Project in Mind?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                Get in touch with us or book a demo to see our solutions in action.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full">
                <Button
                  variant="white"
                  size="lg"
                  onClick={() => openModal('demo')}
                  leftIcon={<Calendar className="w-4 h-4 text-brand-blue" />}
                  className="w-full sm:w-auto justify-center font-bold text-slate-900"
                >
                  Book a Demo
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => openModal('inquiry')}
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                  className="w-full sm:w-auto justify-center text-white border-slate-700 bg-slate-800/40 hover:bg-slate-800 hover:text-white"
                >
                  Customer Inquiry
                </Button>
              </div>
            </div>

            {/* Right Quote Column matching reference image (5 cols) */}
            <div className="lg:col-span-5 flex lg:justify-end items-center pointer-events-none">
              <div className="text-right font-script text-xl sm:text-2xl text-cyan-200/90 leading-snug drop-shadow-md select-none hidden sm:block">
                <span className="block opacity-75">"Ideas</span>
                <span className="block text-cyan-300 opacity-90 pl-4">Technology</span>
                <span className="block text-blue-300 pl-8 font-bold">Real Impact"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
