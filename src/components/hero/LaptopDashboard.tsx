import React from 'react';
import { 
  Users, 
  MessageSquare, 
  LayoutDashboard, 
  Calendar, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  ChevronDown 
} from 'lucide-react';

export const LaptopDashboard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] bg-slate-900 rounded-t-2xl rounded-b-lg p-2.5 pb-3 shadow-device border border-slate-700/60 select-none">
      {/* Laptop Screen Bezel */}
      <div className="relative bg-[#0D1527] rounded-xl overflow-hidden border border-slate-800 shadow-inner">
        {/* Top Screen Bar with Webcam */}
        <div className="h-6 bg-[#090E1A] flex items-center justify-between px-3 border-b border-slate-800/80">
          <div className="flex items-center space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          {/* Webcam */}
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700 border border-slate-600" />
          <div className="w-10" />
        </div>

        {/* Dashboard Top Header */}
        <div className="bg-[#0F1A30] px-3.5 py-2 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2">
            {/* Logo in Dashboard */}
            <div className="w-5 h-5 rounded-md bg-brand-blue flex items-center justify-center text-[10px] font-bold text-white">
              Q
            </div>
            <span className="text-xs font-bold tracking-wider text-white">
              QUANTUM<span className="text-brand-blue">MESH</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-slate-800/80 border border-slate-700/60 rounded-full px-2.5 py-1 text-[11px] text-slate-400 w-44">
            <Search className="w-3 h-3 mr-1.5 text-slate-500" />
            <span>Search...</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <button className="text-slate-400 hover:text-white p-1">
              <Bell className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center space-x-1.5 bg-slate-800/60 pl-1 pr-2 py-0.5 rounded-full border border-slate-700/60">
              <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-[9px] font-bold text-white flex items-center justify-center">
                A
              </div>
              <span className="text-[10px] font-medium text-slate-300">Admin</span>
              <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Dashboard Body with Sidebar & Content */}
        <div className="flex min-h-[220px] sm:min-h-[280px]">
          {/* Sidebar */}
          <div className="w-28 sm:w-32 bg-[#090E1A] p-2 border-r border-slate-800/80 flex flex-col justify-between hidden xs:flex">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 px-2 py-1.5 rounded-lg bg-brand-blue text-white text-[11px] font-medium">
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Dashboard</span>
              </div>
              <div className="flex items-center space-x-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 text-[11px]">
                <Users className="w-3.5 h-3.5" />
                <span>Users</span>
              </div>
              <div className="flex items-center space-x-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 text-[11px]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Appointments</span>
              </div>
              <div className="flex items-center space-x-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 text-[11px]">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Analytics</span>
              </div>
              <div className="flex items-center space-x-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40 text-[11px]">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Messages</span>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center space-x-2 px-2 py-1.5 rounded-lg text-slate-400 hover:text-white text-[11px]">
                <Settings className="w-3.5 h-3.5" />
                <span>Settings</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-3 bg-[#0B1424] overflow-hidden">
            {/* 4 Stats Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
              <div className="bg-[#121E36] p-2 rounded-lg border border-slate-800">
                <span className="text-[9px] text-slate-400 block">Total Users</span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-white">2,450</span>
                  <span className="text-[9px] text-emerald-400 font-semibold flex items-center">↑ 12%</span>
                </div>
              </div>

              <div className="bg-[#121E36] p-2 rounded-lg border border-slate-800">
                <span className="text-[9px] text-slate-400 block">Active Visitors</span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-white">1,284</span>
                  <span className="text-[9px] text-emerald-400 font-semibold flex items-center">↑ 6%</span>
                </div>
              </div>

              <div className="bg-[#121E36] p-2 rounded-lg border border-slate-800">
                <span className="text-[9px] text-slate-400 block">Total Revenue</span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-white">₹92,89,000</span>
                  <span className="text-[9px] text-emerald-400 font-semibold flex items-center">↑ 18%</span>
                </div>
              </div>

              <div className="bg-[#121E36] p-2 rounded-lg border border-slate-800">
                <span className="text-[9px] text-slate-400 block">New Inquiries</span>
                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-xs sm:text-sm font-bold text-white">320</span>
                  <span className="text-[9px] text-emerald-400 font-semibold flex items-center">↑ 24%</span>
                </div>
              </div>
            </div>

            {/* Charts Section: Spline Curve + Donut Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {/* Spline Area Chart (2 cols) */}
              <div className="sm:col-span-2 bg-[#121E36] p-2.5 rounded-lg border border-slate-800 relative">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-semibold text-slate-200">Visitor Analytics</span>
                  <div className="bg-brand-blue/20 text-brand-blue px-2 py-0.5 rounded text-[9px] font-medium border border-brand-blue/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" />
                    1,284 Active Visitors
                  </div>
                </div>

                {/* SVG Area Chart */}
                <div className="h-24 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 90" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0066FF" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Horizontal Grid lines */}
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="300" y2="80" stroke="#1E293B" strokeDasharray="3 3" />

                    {/* Gradient Area */}
                    <path
                      d="M 0,75 Q 35,60 70,68 T 140,40 T 210,50 T 260,25 L 300,32 L 300,90 L 0,90 Z"
                      fill="url(#chartGrad)"
                    />
                    {/* Spline Line */}
                    <path
                      d="M 0,75 Q 35,60 70,68 T 140,40 T 210,50 T 260,25 L 300,32"
                      fill="none"
                      stroke="#0080FF"
                      strokeWidth="2.5"
                    />
                    {/* Active Data Point */}
                    <circle cx="260" cy="25" r="4.5" fill="#00A3FF" stroke="#FFFFFF" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* X-axis months */}
                <div className="flex justify-between text-[8px] text-slate-500 mt-1 px-1">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>
              </div>

              {/* Donut Chart (1 col) - hidden on mobile to maintain sleek laptop ratio */}
              <div className="hidden sm:flex bg-[#121E36] p-2.5 rounded-lg border border-slate-800 flex-col justify-between">
                <span className="text-[10px] font-semibold text-slate-200">Inquiries</span>
                
                <div className="relative w-16 h-16 mx-auto my-1 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    {/* Background circle */}
                    <path
                      className="text-slate-700"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Blue segment */}
                    <path
                      className="text-brand-blue"
                      strokeDasharray="70, 100"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Amber segment */}
                    <path
                      className="text-amber-500"
                      strokeDasharray="20, 100"
                      strokeDashoffset="-70"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-xs font-bold text-white">320</span>
                  </div>
                </div>

                <div className="space-y-1 text-[8px]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> Completed
                    </span>
                    <span className="font-semibold">230</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Pending
                    </span>
                    <span className="font-semibold">60</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> Canceled
                    </span>
                    <span className="font-semibold">30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop Base / Hinge */}
      <div className="relative -mt-1 h-3 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-xl flex items-center justify-center shadow-lg">
        <div className="w-16 h-1 bg-slate-900/60 rounded-full" />
      </div>
    </div>
  );
};
