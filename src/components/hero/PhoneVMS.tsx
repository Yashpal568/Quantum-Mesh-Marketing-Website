import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

export const PhoneVMS: React.FC = () => {
  return (
    <div className="w-[130px] xs:w-[155px] sm:w-[195px] bg-slate-900 rounded-[22px] sm:rounded-[28px] p-1.5 sm:p-2 shadow-2xl border border-slate-700/80 select-none">
      {/* Phone Screen */}
      <div className="bg-white rounded-[18px] sm:rounded-[22px] overflow-hidden p-2 sm:p-3 border border-slate-100 flex flex-col items-center text-center">
        {/* Notch / Speaker */}
        <div className="w-9 sm:w-12 h-2.5 sm:h-3.5 bg-slate-900 rounded-b-lg sm:rounded-b-xl mb-1 sm:mb-2 flex items-center justify-center">
          <div className="w-3 sm:w-4 h-0.5 sm:h-1 bg-slate-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center space-x-1 mb-1 sm:mb-2 text-slate-800">
          <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
          <h4 className="text-[9px] sm:text-[11px] font-bold">Visitor Entry</h4>
        </div>

        {/* Detailed High-Resolution QR Code Graphic */}
        <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-28 sm:h-28 bg-white p-1 sm:p-2 rounded-lg sm:rounded-xl border border-slate-200 shadow-xs sm:shadow-sm flex items-center justify-center mb-1.5 sm:mb-2.5">
          <svg className="w-full h-full text-slate-900" viewBox="0 0 29 29" fill="currentColor">
            {/* Top Left Corner */}
            <path d="M0 0h7v7H0zM1 1v5h5V1H1z" />
            <path d="M2 2h3v3H2z" />
            {/* Top Right Corner */}
            <path d="M22 0h7v7h-7zM23 1v5h5V1h-5z" />
            <path d="M24 2h3v3h-3z" />
            {/* Bottom Left Corner */}
            <path d="M0 22h7v7H0zM1 23v5h5v-5H1z" />
            <path d="M2 24h3v3H2z" />
            {/* Inner QR patterns */}
            <path d="M8 2h2v1H8zM12 2h1v2h-1zM15 1h2v2h-2zM18 2h2v1h-2zM9 4h2v2H9zM14 4h3v1h-3zM18 5h2v1h-2zM2 8h1v2H2zM4 9h2v2H4zM8 8h1v3H8zM11 9h2v1h-2zM14 8h1v2h-1zM17 7h1v3h-1zM20 9h1v1h-1zM23 8h2v2h-2zM27 9h1v2h-1z" />
            <path d="M9 12h2v1H9zM12 12h3v1h-3zM16 11h2v3h-2zM19 13h3v1h-3zM24 12h2v2h-2zM1 14h2v2H1zM4 14h3v2H4zM9 15h1v2H9zM12 15h2v2h-2zM15 15h3v1h-3zM20 15h1v1h-1zM23 15h2v1h-2zM26 14h2v3h-2z" />
            <path d="M8 18h2v2H8zM11 19h2v1h-2zM14 18h2v1h-2zM18 18h1v3h-1zM21 19h2v2h-2zM25 18h2v1h-2zM9 22h1v1H9zM12 22h2v2h-2zM16 23h2v1h-2zM20 22h1v1h-1zM23 23h1v3h-1zM26 22h2v2h-2zM8 25h2v1H8zM11 25h1v2h-1zM14 26h3v1h-3zM19 25h2v2h-2zM25 26h2v2h-2z" />
          </svg>
        </div>

        {/* Verification Badge */}
        <div className="flex items-center space-x-1 text-emerald-600 font-bold text-[8px] sm:text-[10px] mb-0.5 sm:mb-1">
          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
          <span>Access Granted</span>
        </div>

        {/* Date Stamp */}
        <span className="text-[6.5px] sm:text-[8px] text-slate-400 font-medium">
          12 Sep 2026, 10:24 AM
        </span>

        {/* Bottom Home Indicator */}
        <div className="w-8 sm:w-10 h-0.5 sm:h-1 bg-slate-300 rounded-full mt-1.5 sm:mt-2" />
      </div>
    </div>
  );
};
