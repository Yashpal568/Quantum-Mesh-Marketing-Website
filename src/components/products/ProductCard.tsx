import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  GraduationCap, 
  BookOpen, 
  UtensilsCrossed, 
  ArrowRight,
  RotateCw,
  RotateCcw,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import type { Product } from '../../types';
import { useModal } from '../../context/ModalContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { openModal } = useModal();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-orange-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-pink-600" />;
      default:
        return <Building2 className="w-5 h-5 text-blue-600" />;
    }
  };

  interface CardTheme {
    cardBg: string;
    backBg: string;
    border: string;
    backBorder: string;
    iconBg: string;
    badgeBg: string;
    badgeText: string;
    accentColor: string;
    btnText: string;
    btnBg: string;
    btnPrimary: string;
    glow: string;
    highlights: string[];
    metricHighlight: { value: string; label: string };
  }

  // Card themes matching reference exactly with rich front/back palettes:
  // HMS: icy blue, VMS: mint emerald, UMS: royal purple, LMS: warm peach, Restaurant: rose pink
  const themeMap: Record<string, CardTheme> = {
    hms: {
      cardBg: 'from-[#F0F7FF] via-[#F6FAFF] to-white',
      backBg: 'from-[#EBF5FF] via-white to-[#F0F7FF]',
      border: 'border-[#D8EAFF]',
      backBorder: 'border-[#BFDBFE]',
      iconBg: 'bg-[#DBEAFE]',
      badgeBg: 'bg-blue-100/90 text-blue-700 border-blue-200/60',
      badgeText: 'text-blue-700',
      accentColor: 'text-blue-600',
      btnText: 'text-blue-600 group-hover:text-blue-700',
      btnBg: 'hover:bg-blue-50 text-blue-600 border-blue-200/70',
      btnPrimary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25',
      glow: 'hover:shadow-[0_20px_35px_-8px_rgba(37,99,235,0.16)]',
      highlights: [
        'Patient EHR & Doctor Consultations',
        'OPD / IPD Ward & Bed Allocation',
        'Automated Pharmacy & Expiry Tracking',
        'Cashless Insurance & HL7 Lab Sync'
      ],
      metricHighlight: { value: '65%', label: 'OPD Queue Cut' }
    },
    vms: {
      cardBg: 'from-[#F0FDF4] via-[#F6FDF8] to-white',
      backBg: 'from-[#ECFDF5] via-white to-[#F0FDF4]',
      border: 'border-[#DCFCE7]',
      backBorder: 'border-[#A7F3D0]',
      iconBg: 'bg-[#DCFCE7]',
      badgeBg: 'bg-emerald-100/90 text-emerald-700 border-emerald-200/60',
      badgeText: 'text-emerald-700',
      accentColor: 'text-emerald-600',
      btnText: 'text-emerald-600 group-hover:text-emerald-700',
      btnBg: 'hover:bg-emerald-50 text-emerald-600 border-emerald-200/70',
      btnPrimary: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25',
      glow: 'hover:shadow-[0_20px_35px_-8px_rgba(16,185,129,0.16)]',
      highlights: [
        'WhatsApp QR Visitor Pass System',
        'Facial Recognition & Gate Scans',
        'Host Instant Approval Alerts',
        'Overstay & Contractor Badge Monitor'
      ],
      metricHighlight: { value: '< 15s', label: 'Check-In Speed' }
    },
    ums: {
      cardBg: 'from-[#FAF5FF] via-[#FCF8FF] to-white',
      backBg: 'from-[#F5F3FF] via-white to-[#FAF5FF]',
      border: 'border-[#F3E8FF]',
      backBorder: 'border-[#DDD6FE]',
      iconBg: 'bg-[#F3E8FF]',
      badgeBg: 'bg-purple-100/90 text-purple-700 border-purple-200/60',
      badgeText: 'text-purple-700',
      accentColor: 'text-purple-600',
      btnText: 'text-purple-600 group-hover:text-purple-700',
      btnBg: 'hover:bg-purple-50 text-purple-600 border-purple-200/70',
      btnPrimary: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/25',
      glow: 'hover:shadow-[0_20px_35px_-8px_rgba(147,51,234,0.16)]',
      highlights: [
        'Online Admission & Merit Funnel',
        'Dynamic Timetables & Faculty Roster',
        'CBCS Exam Grading & Digital Ledger',
        'Multi-Campus Fee & Hostel Records'
      ],
      metricHighlight: { value: '70%', label: 'Admin Time Saved' }
    },
    lms: {
      cardBg: 'from-[#FFF7ED] via-[#FFFBF5] to-white',
      backBg: 'from-[#FFEDD5]/40 via-white to-[#FFF7ED]',
      border: 'border-[#FFEDD5]',
      backBorder: 'border-[#FED7AA]',
      iconBg: 'bg-[#FFEDD5]',
      badgeBg: 'bg-orange-100/90 text-orange-700 border-orange-200/60',
      badgeText: 'text-orange-700',
      accentColor: 'text-orange-600',
      btnText: 'text-orange-600 group-hover:text-orange-700',
      btnBg: 'hover:bg-orange-50 text-orange-600 border-orange-200/70',
      btnPrimary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-orange-500/25',
      glow: 'hover:shadow-[0_20px_35px_-8px_rgba(234,88,12,0.16)]',
      highlights: [
        'DRM-Protected Video Streaming',
        'Auto-Graded Quizzes & Assignments',
        'Instant Verifiable Certificates',
        'Learner Retention & Dropout Telemetry'
      ],
      metricHighlight: { value: '88%', label: 'Completion Rate' }
    },
    'restaurant-saas': {
      cardBg: 'from-[#FDF2F8] via-[#FEF8FA] to-white',
      backBg: 'from-[#FCE7F3]/40 via-white to-[#FDF2F8]',
      border: 'border-[#FCE7F3]',
      backBorder: 'border-[#FBCFE8]',
      iconBg: 'bg-[#FCE7F3]',
      badgeBg: 'bg-pink-100/90 text-pink-700 border-pink-200/60',
      badgeText: 'text-pink-700',
      accentColor: 'text-pink-600',
      btnText: 'text-pink-600 group-hover:text-pink-700',
      btnBg: 'hover:bg-pink-50 text-pink-600 border-pink-200/70',
      btnPrimary: 'bg-pink-600 hover:bg-pink-700 text-white shadow-pink-500/25',
      glow: 'hover:shadow-[0_20px_35px_-8px_rgba(219,39,119,0.16)]',
      highlights: [
        'Contactless QR Menu Ordering',
        'Live Kitchen Display System (KDS)',
        'Cloud Billing POS & GST Split Bills',
        'Ingredient Inventory & Margin Alert'
      ],
      metricHighlight: { value: '+35%', label: 'Table Turnover' }
    },
  };

  const themeStyles: CardTheme = themeMap[product.id] || {
    cardBg: 'from-slate-50 via-white to-white',
    backBg: 'from-slate-100 via-white to-slate-50',
    border: 'border-slate-200',
    backBorder: 'border-slate-300',
    iconBg: 'bg-slate-100',
    badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
    badgeText: 'text-brand-blue',
    accentColor: 'text-brand-blue',
    btnText: 'text-brand-blue',
    btnBg: 'hover:bg-blue-50 text-brand-blue border-blue-200',
    btnPrimary: 'bg-brand-blue hover:bg-blue-700 text-white shadow-blue-500/25',
    glow: 'hover:shadow-premium',
    highlights: product.features.slice(0, 4),
    metricHighlight: { value: product.metrics[0]?.value || '100%', label: product.metrics[0]?.label || 'Production Ready' }
  };

  return (
    <div
      className="group perspective-1000 w-full h-[410px] select-none min-w-0"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      {/* 3D Flipping Container */}
      <div
        className={`relative w-full h-full duration-700 transition-transform preserve-3d cursor-pointer rounded-2xl md:rounded-3xl min-w-0 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ================= FRONT CARD FACE ================= */}
        <div
          className={`absolute inset-0 backface-hidden overflow-hidden bg-gradient-to-b ${themeStyles.cardBg} border ${themeStyles.border} rounded-2xl md:rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${themeStyles.glow}`}
        >
          {/* Top Subtle Gloss Highlight */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 via-white/20 to-transparent rounded-t-2xl md:rounded-t-3xl pointer-events-none" />

          {/* Front Content */}
          <div className="relative z-10 min-w-0">
            {/* Top Row: Icon + Badges */}
            <div className="flex items-center justify-between gap-1.5 mb-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-2xl ${themeStyles.iconBg} flex items-center justify-center border border-white/80 shadow-xs transition-transform duration-300 group-hover:scale-110 shrink-0`}
              >
                {getIcon(product.iconName)}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shadow-2xs whitespace-nowrap ${themeStyles.badgeBg}`}
                >
                  {product.category}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(true);
                  }}
                  title="Hover or click to flip card"
                  className="w-6 h-6 rounded-full bg-white/90 hover:bg-white text-slate-400 hover:text-slate-800 border border-slate-200/70 shadow-2xs flex items-center justify-center transition-all hover:scale-105 shrink-0"
                >
                  <RotateCw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Product Title */}
            <h3 className="text-[15px] sm:text-base font-extrabold text-slate-900 leading-snug mb-1.5 group-hover:text-slate-950 transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Product Description */}
            <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3 line-clamp-3">
              {product.description}
            </p>

            {/* Front Highlight & Metric Pill (Guaranteed strictly contained) */}
            <div className="w-full min-w-0 max-w-full bg-white/85 border border-slate-200/70 rounded-xl p-2 shadow-2xs space-y-1 overflow-hidden">
              <div className="flex items-center gap-1.5 min-w-0">
                <Sparkles className={`w-3 h-3 ${themeStyles.accentColor} shrink-0`} />
                <span className="text-[11px] font-semibold text-slate-700 truncate min-w-0 flex-1">
                  {themeStyles.highlights[0]}
                </span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium pt-1 border-t border-slate-100 min-w-0">
                <span className="shrink-0 text-slate-400 font-semibold">Key Metric</span>
                <span className={`font-bold ${themeStyles.accentColor} truncate ml-1`}>
                  {themeStyles.metricHighlight.value} {themeStyles.metricHighlight.label}
                </span>
              </div>
            </div>
          </div>

          {/* Front Bottom Bar: Learn More + Flip Hint */}
          <div className="relative z-10 pt-2.5 border-t border-slate-200/40 flex items-center justify-between gap-1.5 min-w-0">
            <Link
              to={`/products/${product.slug}`}
              onClick={(e) => e.stopPropagation()}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${themeStyles.btnText} ${themeStyles.btnBg} transition-all duration-200 border shadow-2xs whitespace-nowrap shrink-0`}
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </Link>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
              className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400 hover:text-slate-700 transition-colors whitespace-nowrap shrink-0"
            >
              <span>Flip specs</span>
              <RotateCw className="w-2.5 h-2.5 shrink-0" />
            </button>
          </div>
        </div>

        {/* ================= BACK CARD FACE (FLIPPED) ================= */}
        <div
          className={`absolute inset-0 backface-hidden overflow-hidden rotate-y-180 bg-gradient-to-b ${themeStyles.backBg} border ${themeStyles.backBorder} rounded-2xl md:rounded-3xl p-4 sm:p-5 flex flex-col justify-between shadow-xl`}
        >
          {/* Top Ambient Glow */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent rounded-t-2xl md:rounded-t-3xl pointer-events-none" />

          {/* Back Content */}
          <div className="relative z-10 min-w-0">
            {/* Header: Short Name + Flip Back Button */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 mb-2.5 min-w-0">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className={`w-2 h-2 rounded-full bg-current ${themeStyles.accentColor} animate-pulse shrink-0`} />
                <span className={`text-xs font-extrabold uppercase tracking-wider ${themeStyles.accentColor} truncate min-w-0`}>
                  {product.shortName || product.name}
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/90 hover:bg-white text-slate-600 border border-slate-200/80 shadow-2xs transition-all hover:scale-105 shrink-0 whitespace-nowrap"
                title="Flip back to front"
              >
                <RotateCcw className="w-2.5 h-2.5 shrink-0" />
                <span>Front</span>
              </button>
            </div>

            {/* Core Capabilities Header */}
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
              Core Capabilities
            </span>

            {/* 4 Feature Bullets */}
            <div className="space-y-1.5 mb-2.5 min-w-0">
              {themeStyles.highlights.slice(0, 4).map((feat, i) => (
                <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium leading-tight min-w-0">
                  <CheckCircle2 className={`w-3.5 h-3.5 ${themeStyles.accentColor} shrink-0 mt-0.5`} />
                  <span className="truncate min-w-0 flex-1">{feat}</span>
                </div>
              ))}
            </div>

            {/* Verified Performance / ROI Metric Box */}
            <div className="bg-white/90 border border-slate-200/80 rounded-xl p-2 flex items-center justify-between shadow-2xs min-w-0">
              <div className="min-w-0 pr-1.5 flex-1">
                <span className="text-[8.5px] font-bold text-slate-400 uppercase tracking-tight block leading-none">
                  Verified Metric
                </span>
                <span className="text-[10.5px] font-semibold text-slate-800 truncate block mt-0.5">
                  {themeStyles.metricHighlight.label}
                </span>
              </div>
              <div
                className={`text-xs font-extrabold ${themeStyles.accentColor} bg-slate-50 px-2 py-0.5 rounded-lg border border-slate-200/60 shadow-inner shrink-0`}
              >
                {themeStyles.metricHighlight.value}
              </div>
            </div>
          </div>

          {/* Back Action Buttons */}
          <div className="relative z-10 pt-2 border-t border-slate-200/50 space-y-1.5 min-w-0">
            <Link
              to={`/products/${product.slug}`}
              onClick={(e) => e.stopPropagation()}
              className={`w-full py-2 px-2.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 whitespace-nowrap min-w-0 ${themeStyles.btnPrimary}`}
            >
              <span className="truncate">Explore Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openModal('demo');
              }}
              className="w-full py-1.5 px-2.5 rounded-xl text-[11px] font-bold text-slate-600 hover:text-slate-900 bg-white/80 hover:bg-white border border-slate-200/70 shadow-2xs transition-colors flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap min-w-0"
            >
              <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
              <span className="truncate">Book Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
