import React from 'react';
import { Users, Calendar, CreditCard, Pill, FileText, Activity } from 'lucide-react';

export const TabletHMS: React.FC = () => {
  return (
    <div className="w-[195px] xs:w-[230px] sm:w-[320px] bg-slate-900 rounded-[18px] sm:rounded-[22px] p-1.5 sm:p-2.5 shadow-2xl border border-slate-700/80 select-none">
      {/* Tablet Screen */}
      <div className="bg-gradient-to-b from-[#F4F9FF] to-[#E8F3FF] rounded-[14px] sm:rounded-[16px] overflow-hidden p-2 sm:p-3.5 border border-white/60 shadow-inner">
        {/* Top Tablet Camera Sensor */}
        <div className="flex justify-center mb-1 sm:mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400/40" />
        </div>

        {/* HMS Header */}
        <div className="text-center mb-2 sm:mb-3">
          <div className="w-5 h-5 sm:w-7 sm:h-7 mx-auto rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md mb-1 sm:mb-1.5">
            <Activity className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h4 className="text-[9px] sm:text-[11px] font-extrabold text-slate-900 tracking-wide">
            HOSPITAL MANAGEMENT SYSTEM
          </h4>
          <span className="text-[7.5px] sm:text-[9px] text-blue-600 font-medium tracking-tight">
            Complete Healthcare Solution
          </span>
        </div>

        {/* 5 Action Modules Grid */}
        <div className="grid grid-cols-5 gap-1 sm:gap-1.5 pt-1 border-t border-blue-100/70">
          <div className="bg-white p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-blue-50 text-center shadow-xs flex flex-col items-center justify-center">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
              <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[6.5px] sm:text-[8px] font-semibold text-slate-700">Patients</span>
          </div>

          <div className="bg-white p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-blue-50 text-center shadow-xs flex flex-col items-center justify-center">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[6.5px] sm:text-[8px] font-semibold text-slate-700">Appts</span>
          </div>

          <div className="bg-white p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-blue-50 text-center shadow-xs flex flex-col items-center justify-center">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
              <CreditCard className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[6.5px] sm:text-[8px] font-semibold text-slate-700">Billing</span>
          </div>

          <div className="bg-white p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-blue-50 text-center shadow-xs flex flex-col items-center justify-center">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
              <Pill className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[6.5px] sm:text-[8px] font-semibold text-slate-700">Rx</span>
          </div>

          <div className="bg-white p-1 sm:p-1.5 rounded-lg sm:rounded-xl border border-blue-50 text-center shadow-xs flex flex-col items-center justify-center">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center mb-0.5">
              <FileText className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </div>
            <span className="text-[6.5px] sm:text-[8px] font-semibold text-slate-700">Reports</span>
          </div>
        </div>
      </div>
    </div>
  );
};
