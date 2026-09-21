import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Laptop, 
  Globe, 
  Zap, 
  Heart, 
  TrendingUp, 
  Coffee, 
  CheckCircle2, 
  ChevronRight, 
  X, 
  Upload, 
  Send 
} from 'lucide-react';
import { OPENINGS, PERKS, type JobOpening } from '../data/careers';
import { submitLead } from '../services/leadService';

export const Careers: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [appliedRole, setAppliedRole] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [appRef, setAppRef] = useState('QM-784920');

  // Application form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    experienceYears: '3-5 years',
    coverNote: ''
  });

  const departments = ['All', 'Engineering', 'AI & Machine Learning', 'IoT & Hardware', 'Product & Design', 'Sales & Solutions'];

  const filteredJobs = OPENINGS.filter(
    (job) => selectedDept === 'All' || job.department === selectedDept
  );

  const getPerkIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-5 h-5 text-brand-blue" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-500" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-purple-500" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-orange-500" />;
      default: return <Briefcase className="w-5 h-5 text-brand-blue" />;
    }
  };

  const handleApplyClick = (job: JobOpening) => {
    setAppliedRole(job);
    setIsApplying(true);
    setSubmitted(false);
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setAppRef(`QM-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
    
    try {
      await submitLead({
        formType: 'Career Application',
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: appliedRole?.title || 'Open Application',
        experienceYears: formData.experienceYears,
        portfolio: formData.portfolio,
        message: formData.coverNote,
      });
    } catch (err) {
      console.warn('Career application submission error:', err);
    }

    setTimeout(() => {
      // Clean up after 3.5 seconds
      setTimeout(() => {
        setIsApplying(false);
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          portfolio: '',
          experienceYears: '3-5 years',
          coverNote: ''
        });
      }, 2500);
    }, 500);
  };

  return (
    <div className="pt-24 pb-20 bg-[#FAFCFF]">
      {/* Header Banner */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Quantum Mesh</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight max-w-3xl mx-auto">
            Build the Future of <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">Enterprise Software & AI</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Work with engineers, designers, and systems architects creating high-impact solutions across autonomous agents, biometric edge hardware, and cloud infrastructure.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Perks & Benefits Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Work at Quantum Mesh?</h2>
            <p className="text-sm text-slate-600 mt-2">
              We empower our team with autonomy, world-class tools, and comprehensive benefits so you can do your best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((perk, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getPerkIcon(perk.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{perk.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-roles">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Open Positions</h2>
              <p className="text-sm text-slate-500 mt-1">
                Explore currently open engineering, AI, design, and solution roles.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedDept === dept
                      ? 'bg-brand-navy text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-200"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-brand-blue border border-blue-100">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
                        {job.workplace}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-brand-blue transition-colors">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {job.experience}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2 lg:pt-0">
                    <button
                      onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      {selectedJob?.id === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-blue-600 shadow-sm hover:shadow transition-all flex items-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Expanded Role Details Accordion */}
                {selectedJob?.id === job.id && (
                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-5 animate-fade-in text-sm text-slate-700">
                    <p className="text-slate-600 leading-relaxed">{job.overview}</p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                        Requirements & Qualifications
                      </h4>
                      <ul className="space-y-1.5">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {job.niceToHave && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                          Bonus Qualifications
                        </h4>
                        <ul className="space-y-1.5">
                          {job.niceToHave.map((bonus, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-500">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-2" />
                              <span>{bonus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2">
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="px-6 py-2.5 rounded-xl text-xs font-bold bg-brand-navy text-white hover:bg-slate-800 transition-colors"
                      >
                        Apply for this Role →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isApplying && appliedRole && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 p-6 sm:p-8">
            <button
              onClick={() => setIsApplying(false)}
              className="absolute right-5 top-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Application Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for applying for the <strong className="text-slate-800">{appliedRole.title}</strong> role at Quantum Mesh. Our talent acquisition team will review your profile and contact you within 3 business days.
                </p>
                <div className="pt-2">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue">
                    Application Reference: {appRef}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-brand-blue">
                    {appliedRole.department}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2">
                    Apply for {appliedRole.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {appliedRole.location} • {appliedRole.type}
                  </p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        LinkedIn or GitHub URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Years of Experience
                      </label>
                      <select
                        value={formData.experienceYears}
                        onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                      >
                        <option value="1-3 years">1 - 3 years</option>
                        <option value="3-5 years">3 - 5 years</option>
                        <option value="5-8 years">5 - 8 years</option>
                        <option value="8+ years">8+ years</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Resume / CV Link or Upload Note *
                    </label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
                      <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                      <p className="text-xs font-medium text-slate-700">Attach PDF / Doc (up to 10MB) or provide link</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">We accept Google Drive, Dropbox, or direct uploads</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Why are you excited about this role?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      placeholder="Tell us about a technical project or accomplishment you're proud of..."
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsApplying(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-blue-600 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
