import React, { useEffect } from 'react';
import { 
  Cloud, 
  Cpu, 
  GitBranch, 
  Sparkles, 
  TrendingDown, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Server 
} from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { Button } from '../../components/ui/Button';
import { useModal } from '../../context/ModalContext';
import { FinalCTA } from '../../components/cta/FinalCTA';
import { SEOHead } from '../../components/seo/SEOHead';

export const CloudDevopsGenAI: React.FC = () => {
  const { openModal } = useModal();
  const solution = solutionsData['cloud-devops-genai'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'TrendingDown': return <TrendingDown className="w-5 h-5 text-blue-600" />;
      case 'Code': return <Code className="w-5 h-5 text-amber-600" />;
      default: return <Server className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <div className="pt-28 pb-16">
      <SEOHead
        title="Multi-Cloud DevOps & Generative AI Infrastructure India | Quantum Mesh"
        description="Enterprise multi-cloud Kubernetes orchestration, automated GitOps CI/CD pipelines, and private LLM serving infrastructure deployed by Quantum Mesh."
        keywords="cloud devops consulting india, kubernetes migration services, generative ai pipeline deployment, terraform iac consulting"
        canonicalPath="/solutions/cloud-devops-genai"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/services' },
          { name: 'Cloud, DevOps & Generative AI', url: '/solutions/cloud-devops-genai' }
        ]}
        schema={{
          '@type': 'Service',
          'name': 'Multi-Cloud Architecture & Generative AI Pipeline Engineering',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Quantum Mesh'
          },
          'description': 'Production Kubernetes clusters, automated GitOps CI/CD, and private vLLM inferencing.'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 mb-16 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-100">
                <Cloud className="w-3.5 h-3.5" />
                <span>{solution.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {solution.overview}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4 w-full">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openModal('demo', 'Cloud & Generative AI Consultation')}
                  className="w-full sm:w-auto justify-center shadow-md hover:shadow-glow-blue"
                >
                  Schedule Architecture Review
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('quote', 'Cloud Infrastructure & DevOps Quote')}
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Request Cloud & GenAI Quote
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">SLA Target</span>
                  <span className="text-sm font-extrabold text-slate-900">99.99% Uptime</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Cloud Savings</span>
                  <span className="text-sm font-extrabold text-emerald-600">Up to 40% FinOps</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Deployments</span>
                  <span className="text-sm font-extrabold text-slate-900">Zero-Downtime GitOps</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">GenAI Models</span>
                  <span className="text-sm font-extrabold text-brand-blue">Private LLM Serving</span>
                </div>
              </div>
            </div>

            {/* Right Generated Showcase Image (5 cols) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group-hover:scale-[1.01] transition-transform duration-300">
                <img
                  src={solution.heroImage}
                  alt="Enterprise Multi-Cloud DevOps and Generative AI Pipeline"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold flex items-center justify-between">
                  <span className="bg-slate-900/90 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700">
                    Kubernetes + CI/CD + LLM Serving
                  </span>
                  <span className="text-sky-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    Multi-Cloud Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              CAPABILITIES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Cloud Reliability & Generative AI Speed
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Accelerate developer velocity, eliminate production firefighting, and deploy private AI models on enterprise cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-float hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-sky-50 flex items-center justify-center mb-4 transition-colors">
                  {getFeatureIcon(feat.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="mb-20 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase">
              ENTERPRISE CLOUD ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Battle-Tested Cloud-Native Stack
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We leverage cloud-native standards to ensure your platform never gets locked into a proprietary single-vendor silo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {solution.architecture.points.map((point, i) => (
              <div key={i} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed font-medium">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0B132B] p-5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-slate-400 font-semibold">Cloud Platforms:</span>
              <div className="flex flex-wrap gap-2">
                {['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Microsoft Azure', 'DigitalOcean'].map((p) => (
                  <span key={p} className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-semibold text-slate-300">
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-xs text-sky-400 font-medium">Terraform 100% Codified</span>
          </div>
        </div>

        {/* Workflow */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 mb-20">
          <div className="text-left mb-8">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              DevOps & AI Modernization Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflows.map((wf) => (
              <div key={wf.step} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-black text-sky-200 block mb-2">{wf.step}</span>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{wf.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              SERVICES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Engagement Models
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {solution.deploymentOptions.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-sky-300 hover:shadow-float transition-all duration-300"
              >
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-600 inline-block mb-3">
                    {pkg.tier}
                  </span>
                  <p className="text-xs text-slate-500 font-medium mb-4">{pkg.suitableFor}</p>

                  <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-6">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-slate-700 gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openModal('quote', `Cloud & GenAI: ${pkg.tier}`)}
                  className="w-full text-sky-600 border-sky-200 hover:bg-sky-50 justify-between"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Consult on Scope
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {solution.faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
};
