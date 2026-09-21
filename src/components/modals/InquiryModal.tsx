import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, CheckCircle2, AlertCircle, Send, FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import confetti from 'canvas-confetti';
import { submitLead } from '../../services/leadService';

const inquirySchema = z.object({
  fullName: z.string().min(2, 'Full name is required (min 2 characters)'),
  companyName: z.string().optional(),
  email: z.string().email('Please enter a valid work email'),
  phone: z.string().optional(),
  industry: z.string().min(1, 'Please select your industry'),
  product: z.string().min(1, 'Please select a product or interest area'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please enter a brief message (min 10 characters)'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  isQuote?: boolean;
  defaultProduct?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  isQuote = false,
  defaultProduct,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      industry: 'Enterprise',
      product: defaultProduct || 'Hospital Management System',
      projectType: isQuote ? 'Project Quote' : 'New Project',
      budget: 'Not Decided',
      message: '',
    },
  });

  useEffect(() => {
    if (isQuote) {
      setValue('projectType', 'Project Quote');
    }
    if (defaultProduct) {
      setValue('product', defaultProduct);
    }
  }, [isQuote, defaultProduct, setValue]);

  if (!isOpen) return null;

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await submitLead({
        formType: isQuote ? 'Project Quote Request' : 'Contact Page Inquiry',
        fullName: data.fullName,
        companyName: data.companyName,
        email: data.email,
        phone: data.phone,
        industry: data.industry,
        product: data.product,
        projectType: data.projectType,
        budget: data.budget,
        message: data.message,
      });
      
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Safe fallback
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    setIsSubmitted(false);
    setError(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      onKeyDown={(e) => e.key === 'Escape' && handleClose()}
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-8 overflow-hidden transition-all transform animate-scale-up max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {isQuote ? 'Quote Request Received' : 'Inquiry Received'}
            </h3>
            <p className="text-slate-600 max-w-md mb-6 leading-relaxed">
              Thank you! Your inquiry has been received. Our team will review your requirements and get back to you shortly.
            </p>
            <Button onClick={handleClose} variant="primary" size="md">
              Close Window
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue border border-blue-100 mb-2">
                <FileText className="w-3.5 h-3.5" />
                {isQuote ? 'Custom Estimation' : 'Direct Communication'}
              </span>
              <h2 id="inquiry-modal-title" className="text-2xl font-bold text-slate-900">
                {isQuote ? 'Get a Project Quote' : 'Customer Inquiry'}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {isQuote
                  ? 'Tell us about your project scale and we will prepare an upfront architectural & cost estimate.'
                  : 'Have a question or custom software requirement? Talk directly to our technical consultants.'}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    placeholder="e.g. Priyanshu Joshi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name
                  </label>
                  <input
                    {...register('companyName')}
                    placeholder="e.g. Quantum Infotech"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Industry <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('industry')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white transition-colors"
                  >
                    <option value="Healthcare">Healthcare & Hospitals</option>
                    <option value="Education">Education & Universities</option>
                    <option value="Enterprise">Enterprise & Corporate</option>
                    <option value="Hospitality">Hospitality & Hotels</option>
                    <option value="Restaurant">Restaurant & F&B</option>
                    <option value="Retail">Retail & Commerce</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Government">Government & Public Sector</option>
                    <option value="Other">Other Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Interested Product / Area <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('product')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white transition-colors"
                  >
                    <option value="Hospital Management System">Hospital Management System</option>
                    <option value="Visitor Management System">Visitor Management System</option>
                    <option value="University Management System">University Management System</option>
                    <option value="Learning Management System">Learning Management System</option>
                    <option value="Restaurant SaaS">Restaurant SaaS</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('projectType')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white transition-colors"
                  >
                    <option value="New Project">New Project</option>
                    <option value="Existing Project">Existing Project</option>
                    <option value="Product Demo">Product Demo</option>
                    <option value="Customization">Customization</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Project Quote">Project Quote</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Budget Range
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white transition-colors"
                  >
                    <option value="Not Decided">Not Decided</option>
                    <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                    <option value="₹1–5 Lakh">₹1–5 Lakh</option>
                    <option value="₹5–10 Lakh">₹5–10 Lakh</option>
                    <option value="₹10 Lakh+">₹10 Lakh+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register('message')}
                  rows={3}
                  placeholder="Describe your requirements, goals, or questions in detail..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4 ml-1" />}
                >
                  {isQuote ? 'Submit Quote Request' : 'Send Inquiry'}
                </Button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  We reply within 24 business hours. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
