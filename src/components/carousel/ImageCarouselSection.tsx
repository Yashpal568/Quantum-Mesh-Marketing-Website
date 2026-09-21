import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Pause, 
  Play,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export interface CarouselSlide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  ctaText: string;
  ctaLink: string;
  accentColor: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    category: 'Govt & Smart City Portal',
    title: 'Smart Municipal Property Tax & Grievance Portal',
    subtitle: 'Nagar Nigam Rudrapur (Urban Local Body)',
    description: 'Empowering 45,000+ citizens with instant online property tax assessments, automated UPI receipts, GIS ward valuation, and WhatsApp grievance ticketing.',
    image: '/assets/generated/client-consultation.jpg',
    metrics: [
      { label: 'Online Compliance', value: '+240%' },
      { label: 'Active Wards', value: '40 Wards' },
      { label: 'Grievance SLA', value: '< 4 Hours' }
    ],
    ctaText: 'View Case Study',
    ctaLink: '/projects',
    accentColor: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'slide-2',
    category: 'Healthcare Cloud Operating System',
    title: 'Multi-Specialty Cloud EHR & Automated Lab Sync',
    subtitle: 'Metro Healthcare Group (3 Hospital Centers)',
    description: 'Unified clinical EHR platform connecting 3 regional hospital facilities with longitudinal health records, automated HL7 pathology analyzer telemetry, and digital OPD triage.',
    image: '/assets/generated/product-hms.jpg',
    metrics: [
      { label: 'OPD Wait Times', value: '-70%' },
      { label: 'Daily Consultations', value: '1,200+' },
      { label: 'Diagnostic Sync', value: 'Instant HL7' }
    ],
    ctaText: 'Explore Healthcare Suite',
    ctaLink: '/products/hospital-management-system-hms',
    accentColor: 'from-emerald-600 to-teal-500'
  },
  {
    id: 'slide-3',
    category: 'Turn-Key Hardware & Biometrics',
    title: 'Edge AI Biometric Attendance & Turnstile Access',
    subtitle: 'Dual-IR Camera Face Recognition + Optical Fingerprint + Cloud HRMS',
    description: 'Industrial attendance terminals with <0.2-second facial verification, anti-spoofing infrared cameras, automatic gate turnstile release, and seamless cloud payroll sync.',
    image: '/assets/generated/biometric-ecosystem.jpg',
    metrics: [
      { label: 'Clearance Speed', value: '< 0.2s' },
      { label: 'Daily Gate Punches', value: '15,000+' },
      { label: 'Cloud Sync Delay', value: '< 100ms' }
    ],
    ctaText: 'Explore Biometric Ecosystem',
    ctaLink: '/solutions/biometric-attendance',
    accentColor: 'from-purple-600 to-indigo-500'
  },
  {
    id: 'slide-4',
    category: 'Agritech IoT & Traceability',
    title: 'Seed Lot Climate Telemetry & Anti-Counterfeit QR',
    subtitle: 'Kumaon Agro Seeds Ltd (Pantnagar)',
    description: 'Wireless warehouse temperature and humidity IoT telemetry mesh with encrypted serialized QR verification codes printed on certified seed packaging bags.',
    image: '/assets/generated/seed-management.jpg',
    metrics: [
      { label: 'Germination Viability', value: '99.8%' },
      { label: 'Verified Seed Bags', value: '250,000+' },
      { label: 'Climate Telemetry', value: '6 Warehouses' }
    ],
    ctaText: 'View Agritech Case Study',
    ctaLink: '/projects',
    accentColor: 'from-amber-600 to-orange-500'
  },
  {
    id: 'slide-5',
    category: 'Autonomous Agentic AI',
    title: 'Business-Ready Agentic AI Workflows & Tool Calling',
    subtitle: 'Multi-Agent Collaborative Graphs with Zero Data Retention',
    description: 'Goal-driven autonomous agents capable of multi-step reasoning, enterprise tool execution (Slack, Gmail, HubSpot, SQL), and private RAG customer support automation.',
    image: '/assets/generated/agentic-ai.jpg',
    metrics: [
      { label: 'Workflow Execution', value: 'Autonomous' },
      { label: 'Support Resolution', value: '78% First-Touch' },
      { label: 'Data Retention', value: 'Zero (Private)' }
    ],
    ctaText: 'Explore Agentic AI Solutions',
    ctaLink: '/solutions/agentic-ai',
    accentColor: 'from-cyan-600 to-blue-500'
  },
  {
    id: 'slide-6',
    category: 'Cloud DevOps & FinOps',
    title: 'Multi-Cloud Kubernetes Migration & CI/CD Automation',
    subtitle: 'Skynet Infotech Solutions',
    description: 'Zero-downtime automated GitOps CI/CD pipelines, Terraform Infrastructure as Code, and FinOps autoscaling policies cutting enterprise cloud spend by 42%.',
    image: '/assets/generated/cloud-devops-genai.jpg',
    metrics: [
      { label: 'Monthly Cloud Spend', value: '-42%' },
      { label: 'Deployment Cadence', value: '5x Daily' },
      { label: 'Production Uptime', value: '99.99%' }
    ],
    ctaText: 'Explore Cloud DevOps',
    ctaLink: '/solutions/cloud-devops-genai',
    accentColor: 'from-sky-600 to-indigo-500'
  }
];

const SLIDE_DURATION = 3500; // 3.5 seconds per slide for lively automatic rotation

export const ImageCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const { openModal } = useModal();

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  }, []);

  // Automatic slide rotation (always active unless user explicitly pauses)
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) nextSlide();
    if (diff < -45) prevSlide();
    setTouchStart(null);
  };

  const current = carouselSlides[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-[#081225] text-white relative overflow-hidden border-y border-slate-800">
      {/* Dynamic Background Glow matching slide */}
      <div className="absolute inset-0 bg-radial-at-t from-blue-900/30 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VISUAL SHOWCASE & PLATFORMS IN ACTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Engineered for Scale, Built for Impact
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Explore our production-grade platforms, IoT biometric hardware deployments, and mission-critical systems in active operation across India.
            </p>
          </div>

          {/* Controls: Prev, Next, Play/Pause */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors shadow-sm cursor-pointer"
              title={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
              aria-label={isPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 text-cyan-400" />}
            </button>

            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-slate-800/80 hover:bg-brand-blue text-white border border-slate-700/60 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-cyan-400 px-2 select-none">
              0{currentIndex + 1} / 0{carouselSlides.length}
            </span>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-slate-800/80 hover:bg-brand-blue text-white border border-slate-700/60 transition-colors shadow-sm cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Cinema-Format Carousel Stage */}
        <div 
          className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/70 shadow-2xl h-[480px] sm:h-[540px] md:h-[600px] select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Automatic Countdown Progress Line */}
          {isPlaying && (
            <div className="absolute top-0 inset-x-0 h-1.5 bg-white/10 z-30 overflow-hidden">
              <div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-carousel-fill shadow-sm shadow-cyan-400"
                style={{ animationDuration: `${SLIDE_DURATION}ms` }}
              />
            </div>
          )}

          {/* Background Images with Smooth Cross-Fade */}
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transform scale-105 transition-transform duration-7000 ease-out"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
              <div className="absolute inset-0 bg-radial-at-b from-slate-950/80 via-transparent to-transparent" />
            </div>
          ))}

          {/* Top Banner Tag */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-white/95 text-slate-900 shadow-md backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
              <span>{current.category}</span>
            </span>
          </div>

          {/* Floating Glassmorphic Content Card (Animates dynamically on slide change) */}
          <div className="absolute bottom-4 sm:bottom-8 inset-x-4 sm:inset-x-8 z-20">
            <div 
              key={currentIndex}
              className="bg-slate-950/85 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-7 md:p-8 shadow-2xl max-w-4xl animate-fade-in"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>{current.subtitle}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {current.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl line-clamp-2 sm:line-clamp-3">
                {current.description}
              </p>

              {/* Verified Metrics Chips */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 my-4 sm:my-5 py-3 border-y border-white/10">
                {current.metrics.map((metric, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <div className="text-base sm:text-xl md:text-2xl font-black text-cyan-300">
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 font-medium truncate mt-0.5">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-3">
                  <Link
                    to={current.ctaLink}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-cyan-500/20"
                  >
                    <span>{current.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => openModal('quote', current.title)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition-colors cursor-pointer"
                  >
                    <span>Book Platform Demo</span>
                  </button>
                </div>

                {/* Progress Indicators (Pills) */}
                <div className="hidden md:flex items-center gap-1.5">
                  {carouselSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Clickable Slide Selector Strip with Active Timer Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mt-4 sm:mt-6">
          {carouselSlides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(i)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                i === currentIndex
                  ? 'bg-slate-800/90 border-cyan-400 shadow-md shadow-cyan-500/10'
                  : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className={i === currentIndex ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                  0{i + 1}
                </span>
                {i === currentIndex && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                )}
              </div>
              <div className={`text-xs font-bold truncate ${i === currentIndex ? 'text-white' : 'text-slate-400'}`}>
                {slide.category}
              </div>

              {/* Mini progress bar on active bottom card */}
              {i === currentIndex && isPlaying && (
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-cyan-400/20 overflow-hidden">
                  <div
                    key={currentIndex}
                    className="h-full bg-cyan-400 animate-carousel-fill"
                    style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                  />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
