import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Headphones, 
  ChevronDown, 
  ChevronUp, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import confetti from 'canvas-confetti';
import { useModal } from '../context/ModalContext';
import { SEOHead } from '../components/seo/SEOHead';
import { submitLead } from '../services/leadService';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  companyName: z.string().optional(),
  email: z.string().email('Please enter a valid work email'),
  phone: z.string().optional(),
  industry: z.string().min(1, 'Please select an industry'),
  product: z.string().min(1, 'Please select product or service area'),
  projectType: z.string().min(1, 'Please select project type'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const { openModal } = useModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      industry: 'Enterprise',
      product: 'Custom Software',
      projectType: 'New Project',
      budget: 'Not Decided',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await submitLead({
        formType: 'Contact Page Inquiry',
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
          particleCount: 50,
          spread: 60,
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

  const officeLocation = {
    name: 'Quantum Mesh Corporate Headquarters',
    complex: 'PSA Plaza',
    area: 'Awas Vikas',
    district: 'U.S.Nagar, Rudrapur',
    state: 'Uttarakhand',
    pincode: '263153',
    fullAddress: 'PSA Plaza, Awas Vikas, U.S.Nagar, Rudrapur, Uttarakhand, 263153',
    phone: '+91 98765 43210',
    email: 'quantumesh.ai@gmail.com',
    hours: 'Monday – Saturday, 9:30 AM – 6:30 PM IST',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PSA+Plaza+Awas+Vikas+Rudrapur+Uttarakhand+263153',
    coverage: 'Serving clients pan-India with on-site deployment and global cloud SaaS delivery.'
  };

  const faqs = [
    {
      q: 'How quickly can we deploy Quantum Mesh ready products like HMS or Biometric Attendance?',
      a: 'Our ready SaaS products (Hospital Management, School ERP, Servora Restaurant POS) can be provisioned within 24 to 48 hours in cloud multi-tenant mode. Physical biometric terminals are configured, firmware-flashed, and dispatched within 3 business days with plug-and-play network pairing.',
    },
    {
      q: 'Do you provide on-site installation and technician training for biometric devices?',
      a: 'Yes. For enterprise campuses, universities, and hospitals, our certified field engineering partners handle complete physical mounting, door controller relay wiring, Wiegand interface setup, and IT administrator training on-site across India.',
    },
    {
      q: 'What are the terms for the School Management System monthly rental tier?',
      a: 'Our monthly rental model eliminates high upfront software fees. You pay an affordable per-student monthly rate with zero lock-in, including automatic board rubric updates, parent WhatsApp integration, and real-time GPS bus tracking.',
    },
    {
      q: 'Do you sign Non-Disclosure Agreements (NDAs) prior to architectural discovery?',
      a: 'Yes. We provide standard bilateral mutual NDAs before any deep technical scoping or codebase audits, ensuring complete confidentiality for proprietary IP and enterprise requirements.',
    },
    {
      q: 'Can Quantum Mesh Agentic AI integrate with our existing ERPs (SAP, Tally, Oracle)?',
      a: 'Absolutely. Our autonomous AI agents are built on LangGraph state machines with deterministic tool calling. We build bi-directional connectors for SAP, Oracle Cloud, Tally Prime, Zoho, and custom SQL/REST backends with human-in-the-loop validation.',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FAFCFF]">
      <SEOHead
        title="Contact Quantum Mesh — Software Company in Rudrapur, Uttarakhand"
        description="Connect with Quantum Mesh's software engineering center at PSA Plaza, Awas Vikas, Rudrapur. Direct phone: +91 98765 43210. In-office visits, project estimations, and live software demos."
        keywords="contact quantum mesh, software company in rudrapur, website developer in rudrapur contact, psa plaza awas vikas rudrapur"
        canonicalPath="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
        schema={{
          '@type': 'ContactPage',
          'name': 'Contact Quantum Mesh Solutions',
          'description': 'Official contact page for Quantum Mesh software engineering lab at PSA Plaza, Rudrapur, Uttarakhand.',
          'mainEntity': {
            '@type': 'LocalBusiness',
            'name': 'Quantum Mesh Solutions',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'PSA Plaza, Awas Vikas',
              'addressLocality': 'Rudrapur',
              'addressRegion': 'Uttarakhand',
              'postalCode': '263153',
              'addressCountry': 'IN'
            },
            'telephone': '+91-98765-43210',
            'email': 'quantumesh.ai@gmail.com'
          }
        }}
      />
      {/* Contact Page Hero */}
      <section className="relative overflow-hidden pt-12 pb-14 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold border border-blue-100 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DIRECT ARCHITECTURAL CONSULTATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight max-w-3xl mx-auto">
            Let's Build Something <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">Great Together</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Talk directly to our software architects and solution specialists about your requirements, hardware integrations, or enterprise modernization.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Unified HQ & Direct Inquiries Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            {/* Unified Office Hub & Registered Headquarters Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm flex flex-col flex-grow">
              {/* Image Header with Badge */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 shrink-0">
                <img
                  src="/assets/generated/tech-headquarters.jpg"
                  alt="Quantum Mesh Corporate Headquarters at PSA Plaza, Rudrapur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-blue text-white shadow-md">
                    Corporate Headquarters
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-extrabold text-white">Quantum Mesh — Rudrapur</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Software Engineering • Biometric Labs • Cloud Systems</p>
                </div>
              </div>

              {/* Card Body: Address + Direct Contacts */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                {/* Verified Address Box */}
                <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-200/70 space-y-2.5 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{officeLocation.complex}, {officeLocation.area}</p>
                      <p className="text-slate-600 mt-0.5">{officeLocation.district}, {officeLocation.state} – {officeLocation.pincode}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span><strong>Visiting Hours:</strong> {officeLocation.hours}</span>
                  </div>

                  <a
                    href={officeLocation.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl text-xs font-bold bg-white text-brand-blue border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>View Location on Google Maps →</span>
                  </a>
                </div>

                {/* Direct Contacts Grid */}
                <div className="space-y-3 text-xs text-slate-700 pt-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Email Us</span>
                      <a href="mailto:quantumesh.ai@gmail.com" className="text-xs font-bold text-slate-900 hover:text-brand-blue transition-colors">
                        quantumesh.ai@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold block uppercase tracking-wider">Enterprise Desk</span>
                      <a href="tel:+919876543210" className="text-xs font-bold text-slate-900 hover:text-brand-blue transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                {/* Integrated Emergency & SLA Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Guaranteed &lt; 24h RFP Response
                  </span>
                  <a
                    href="mailto:quantumesh.ai@gmail.com"
                    className="font-semibold text-brand-blue hover:underline flex items-center gap-1"
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    <span>24/7 SLA Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 max-w-md mb-6 leading-relaxed">
                  Your inquiry has been received. Our team will review your requirements and an engineering lead will connect with you within 24 hours.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    reset();
                  }}
                  variant="primary"
                  size="md"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Submit Your Requirements</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out the project scope below to receive a custom architecture proposal.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openModal('demo')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Prefer Live Demo?</span>
                  </button>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-xl text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        Company / Organization
                      </label>
                      <input
                        {...register('companyName')}
                        placeholder="e.g. Quantum Infotech"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Industry <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('industry')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white transition-colors"
                      >
                        <option value="Healthcare">Healthcare & Hospitals</option>
                        <option value="Education">Education & Universities (K-12 & Higher Ed)</option>
                        <option value="Enterprise">Enterprise & Corporate IT</option>
                        <option value="Manufacturing">Manufacturing & Industrial</option>
                        <option value="Hospitality">Hospitality & Restaurants</option>
                        <option value="Government">Government & Public Municipalities</option>
                        <option value="Agriculture">Agriculture & Seed Management</option>
                        <option value="Other">Other Industry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Interested Solution / Product <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('product')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white transition-colors"
                      >
                        <option value="Biometric Attendance Ecosystem">Biometric Attendance & Access Ecosystem</option>
                        <option value="Agentic AI & Autonomous Agents">Agentic AI & Autonomous Agents</option>
                        <option value="Cloud, DevOps & Generative AI">Cloud Infrastructure, DevOps & GenAI</option>
                        <option value="School Management SaaS">School Management System (SaaS / Rental)</option>
                        <option value="Hospital Management System">Hospital Management System (HMS)</option>
                        <option value="Seed Management & Traceability">Seed Management & Agritech</option>
                        <option value="AI English Learner">AI English Learner Software</option>
                        <option value="Mobile App Development">Mobile App Development (iOS & Android)</option>
                        <option value="Restaurant SaaS">Restaurant SaaS (Servora)</option>
                        <option value="Visitor Management">Visitor Management System (VMS)</option>
                        <option value="Custom Software">Custom Enterprise Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Project Scope / Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register('projectType')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white transition-colors"
                      >
                        <option value="New Project">New System Implementation</option>
                        <option value="Product Demo">Book a Live Architecture Demo</option>
                        <option value="Hardware + Cloud Deployment">Hardware + Cloud Combined Deployment</option>
                        <option value="Monthly Rental SaaS">Monthly Rental SaaS Subscription</option>
                        <option value="Customization & Integration">Customization & Legacy Migration</option>
                        <option value="Consulting">Consulting & System Audit</option>
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
                        <option value="Not Decided">Flexible / Not Decided Yet</option>
                        <option value="Monthly Rental">Monthly Rental Plan</option>
                        <option value="Under ₹2 Lakh">Under ₹2 Lakh ($2,500)</option>
                        <option value="₹2–5 Lakh">₹2–5 Lakh ($2,500 – $6,000)</option>
                        <option value="₹5–15 Lakh">₹5–15 Lakh ($6,000 – $18,000)</option>
                        <option value="₹15 Lakh+">₹15 Lakh+ ($18,000+ Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Details & Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      placeholder="Outline your scope, anticipated user count, deployment environment (Cloud / On-prem), or specific technical goals..."
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
                      Send Requirements Inquiry
                    </Button>
                    <p className="text-center text-xs text-slate-400 mt-2">
                      Protected by bilateral NDA and enterprise-grade confidentiality.
                    </p>
                  </div>
                </form>

                {/* Instant Technical Direct Channels Bar */}
                <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/60 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-800">Instant Callback</p>
                      <p className="text-[10px] text-slate-500">&lt; 15-min response</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/60 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-800">Mutual NDA</p>
                      <p className="text-[10px] text-slate-500">100% IP & Data Safe</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/60 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-800">Direct Architects</p>
                      <p className="text-[10px] text-slate-500">Zero sales middlemen</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* What Happens Next? (3-Step Roadmap) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              TRANSPARENT ONBOARDING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              What Happens After You Inquire?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Our structured 3-step engagement process ensures fast technical alignment and accurate estimation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/60 relative space-y-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue font-black text-sm flex items-center justify-center">
                1
              </span>
              <h4 className="text-base font-bold text-slate-900">Discovery Call & NDA</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Within 24 hours, a senior architect reviews your requirements, shares an NDA, and schedules a 30-minute discovery call to clarify constraints.
              </p>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/60 relative space-y-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h4 className="text-base font-bold text-slate-900">Live Demo & Architecture Scope</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We showcase live modules (Biometrics, AI agents, ERPs) matching your workflow and deliver an architectural topology map with tech recommendations.
              </p>
            </div>

            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/60 relative space-y-3">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h4 className="text-base font-bold text-slate-900">Fixed-Price SOW & Deployment</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive an itemized Statement of Work with fixed milestone pricing, hardware fulfillment logistics, and committed SLA delivery timelines.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Consultation Feature Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-navy to-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl mb-16 text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-cyan-400 text-xs font-semibold border border-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ARCHITECTURAL ADVISORY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Need a Custom Enterprise Solution Architecture?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              Schedule a dedicated 45-minute technical session with our principal engineers. We will analyze your system requirements, hardware connectivity, and compliance frameworks.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <button
                onClick={() => openModal('demo')}
                className="w-full sm:w-auto justify-center px-6 py-3 rounded-xl text-xs font-bold bg-brand-blue text-white hover:bg-blue-600 shadow-lg transition-colors flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Architectural Consultation</span>
              </button>
              <a
                href="mailto:quantumesh.ai@gmail.com"
                className="w-full sm:w-auto text-center justify-center px-5 py-3 rounded-xl text-xs font-bold bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Email Technical Leads
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 lg:h-full relative overflow-hidden bg-slate-800">
            <img
              src="/assets/generated/client-consultation.jpg"
              alt="Quantum Mesh Client Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-slate-900/40 to-slate-900" />
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              COMMON INQUIRIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900 hover:text-brand-blue transition-colors"
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-brand-blue shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  )}
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
