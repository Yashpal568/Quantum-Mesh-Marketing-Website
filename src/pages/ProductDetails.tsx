import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  TrendingUp, 
  Cpu,
  Layers,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Check
} from 'lucide-react';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';
import { FinalCTA } from '../components/cta/FinalCTA';
import { SEOHead } from '../components/seo/SEOHead';

export const ProductDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const product = products.find((p) => 
    p.slug === slug || 
    (slug === 'school-erp' && p.slug === 'school-management-saas') || 
    (slug === 'school-management-system-saas' && p.slug === 'school-management-saas') ||
    (slug === 'school-management' && p.slug === 'school-management-saas')
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <SEOHead
        title={`${product.name} | Quantum Mesh Software Products`}
        description={`${product.longDescription || product.description} Enterprise grade software platform built for scale, reliability and deep workflow automation.`}
        keywords={`${product.name}, ${product.category} software, ${product.shortName} software, custom management system in uttarakhand, hospital management system, school erp, visitor management system`}
        canonicalPath={`/products/${product.slug}`}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.name, url: `/products/${product.slug}` }
        ]}
        schema={{
          '@type': 'SoftwareApplication',
          'name': product.name,
          'applicationCategory': `${product.category}Application`,
          'operatingSystem': 'Web, Cloud, Cross-Platform',
          'description': product.longDescription || product.description,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Quantum Mesh'
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/products"
            className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-brand-blue transition-colors gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Products</span>
          </Link>

          <span className="text-xs font-medium text-slate-400">
            Product Category: <strong className="text-slate-700">{product.category}</strong>
          </span>
        </div>

        {/* Product Hero: Rich 2-Column Split Layout with High-Resolution Mockup Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 mb-12 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold border border-blue-100">
                  {product.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready v3.4
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {product.longDescription}
              </p>

              {/* Highlight Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                {product.features.slice(0, 4).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                    <Check className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 w-full max-w-md">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openModal('demo', product.name)}
                  leftIcon={<Calendar className="w-4 h-4" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Book a Live Demo
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('inquiry', product.name)}
                  leftIcon={<MessageSquare className="w-4 h-4" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Customer Inquiry
                </Button>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  Enterprise Uptime SLA
                </span>
                <span>•</span>
                <span>Custom On-Demand Deployment</span>
              </div>
            </div>

            {/* Right Showcase Image Banner (5 cols) */}
            <div className="lg:col-span-5">
              {product.image && (
                <div className="relative group rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900">
                  <img
                    src={product.image}
                    alt={`${product.name} User Interface`}
                    className="w-full h-auto max-h-[380px] sm:max-h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                  
                  {/* Floating live badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold border backdrop-blur-md shadow-xs bg-white/95 text-brand-blue border-blue-100">
                      Interactive UI Showcase
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span className="font-semibold px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20">
                      {product.shortName} Live Portal
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      100% Operational
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Performance Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {product.metrics.map((metric, i) => (
            <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-200 transition-colors">
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider block mb-1">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Core Enterprise Modules (In-Depth Breakdown) */}
        {product.modules && product.modules.length > 0 && (
          <div className="mb-16">
            <div className="text-left mb-8">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>DEEP-DIVE MODULES</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Enterprise Module Specifications
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Engineered for end-to-end operational visibility, compliance, and department coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.modules.map((mod, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-extrabold text-sm mb-4 border border-blue-100">
                      0{i + 1}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {mod.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {mod.desc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-3">
                      {mod.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start text-xs text-slate-700 gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features & Capabilities Grid */}
        <div className="mb-16">
          <div className="text-left mb-8">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              ALL CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Included Standard Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.features.map((feat, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{feat}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Tested for high concurrency and zero data loss.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Workflow Steps */}
        <div className="mb-16 bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200/90">
          <div className="text-left mb-8">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Standard Operational Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.workflow.map((wf) => (
              <div key={wf.step} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs relative">
                <span className="text-2xl font-black text-blue-100 block mb-2">{wf.step}</span>
                <h4 className="text-base font-bold text-slate-900 mb-1">{wf.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Benefits & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Benefits (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <div className="flex items-center space-x-2 text-brand-blue mb-4">
              <TrendingUp className="w-5 h-5" />
              <h3 className="text-lg font-bold text-slate-900">Proven Business Benefits</h3>
            </div>
            <ul className="space-y-3.5">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-brand-blue mb-4">
                <Cpu className="w-5 h-5" />
                <h3 className="text-lg font-bold text-slate-900">Under the Hood Architecture</h3>
              </div>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Built with modern, open standards and high-throughput databases. Easily connects to legacy software or third-party web services via REST & Webhooks.
              </p>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">Need custom modules or integrations?</span>
              <button
                onClick={() => openModal('inquiry', product.name)}
                className="text-xs font-bold text-brand-blue hover:underline"
              >
                Request Scope →
              </button>
            </div>
          </div>
        </div>

        {/* Product FAQs */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="mb-16 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
            <div className="text-left mb-6">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {product.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaq === i ? 'rotate-180 text-brand-blue' : ''
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
};
