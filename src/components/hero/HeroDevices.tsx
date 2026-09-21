import React from 'react';
import { LaptopDashboard } from './LaptopDashboard';
import { TabletHMS } from './TabletHMS';
import { PhoneVMS } from './PhoneVMS';

interface HeroDevicesProps {
  rotateX: number;
  rotateY: number;
  translateX: number;
  translateY: number;
}

export const HeroDevices: React.FC<HeroDevicesProps> = ({
  rotateX,
  rotateY,
  translateX,
  translateY,
}) => {
  return (
    <div className="relative w-full max-w-[560px] lg:max-w-[680px] mx-auto perspective-1200 pt-6 sm:pt-14 pb-8 sm:pb-12">
      {/* Hand-Drawn Annotation Arrow & Script: "Technology for Real Impact" matching reference image */}
      <div className="absolute top-0 right-4 sm:right-10 z-30 pointer-events-none hidden sm:flex flex-col items-center">
        <span className="font-script text-xl sm:text-2xl text-slate-900 -rotate-6 font-bold tracking-wide select-none drop-shadow-sm leading-tight text-center">
          Technology <br />
          <span className="text-brand-blue">for Real Impact</span>
        </span>
        {/* Curved Hand-drawn SVG Arrow pointing down towards the laptop dashboard */}
        <svg
          className="w-9 h-9 sm:w-11 sm:h-11 text-slate-800 -rotate-12 mt-0.5"
          viewBox="0 0 50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 38 6 C 30 20 18 30 8 38" />
          <polyline points="4 28 8 38 18 38" />
        </svg>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Decorative Dots */}
      <div className="absolute top-12 left-4 w-3 h-3 rounded-full bg-blue-500/40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-16 right-6 w-2.5 h-2.5 rounded-full bg-cyan-400/60 animate-ping pointer-events-none" />
      <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-indigo-500/50 pointer-events-none" />

      {/* 3D Container with Mouse Parallax */}
      <div
        className="relative preserve-3d transition-transform duration-200 ease-out animate-float-slow"
        style={{
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Layer 1: Main Laptop Dashboard */}
        <div
          className="relative z-10 transition-transform duration-200"
          style={{
            transform: `translate3d(${translateX * 0.4}px, ${translateY * 0.4}px, 0px)`,
          }}
        >
          <LaptopDashboard />
        </div>

        {/* Layer 2: Tablet HMS (Angled in front-left of laptop) */}
        <div
          className="absolute -bottom-4 -left-1 xs:-left-3 sm:-bottom-8 sm:-left-8 z-20 transition-transform duration-200"
          style={{
            transform: `translate3d(${translateX * 1.2}px, ${translateY * 1.2}px, 40px) rotate(-3deg)`,
          }}
        >
          <TabletHMS />
        </div>

        {/* Layer 3: Phone VMS (Standing in front-right of laptop) */}
        <div
          className="absolute -bottom-5 -right-1 xs:-right-2 sm:-bottom-10 sm:-right-4 z-25 transition-transform duration-200"
          style={{
            transform: `translate3d(${translateX * 1.8}px, ${translateY * 1.8}px, 70px) rotate(4deg)`,
          }}
        >
          <PhoneVMS />
        </div>
      </div>
    </div>
  );
};
