import React, { useEffect } from 'react';
import { 
  Bot, 
  Wrench, 
  Database, 
  UserCheck, 
  RefreshCw, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';
import { solutionsData } from '../../data/solutions';
import { Button } from '../../components/ui/Button';
import { useModal } from '../../context/ModalContext';
import { FinalCTA } from '../../components/cta/FinalCTA';
import { SEOHead } from '../../components/seo/SEOHead';

export const AgenticAI: React.FC = () => {
  const { openModal } = useModal();
  const solution = solutionsData['agentic-ai'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case 'Bot': return <Bot className="w-5 h-5 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-indigo-600" />;
      case 'Database': return <Database className="w-5 h-5 text-purple-600" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case 'RefreshCw': return <RefreshCw className="w-5 h-5 text-amber-600" />;
      case 'Activity': return <Activity className="w-5 h-5 text-cyan-600" />;
      default: return <Sparkles className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <div className="pt-28 pb-16">
      <SEOHead
        title="Agentic AI & Autonomous AI Agent Solutions India | Quantum Mesh"
        description="Goal-driven autonomous AI agents, multi-agent LangGraph workflows, and private enterprise RAG systems built for production scale by Quantum Mesh."
        keywords="business ready agentic ai solution india, ai agents for business, autonomous ai agent developers india, langgraph enterprise, custom llm fine tuning"
        canonicalPath="/solutions/agentic-ai"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/services' },
          { name: 'Agentic AI & Autonomous Agents', url: '/solutions/agentic-ai' }
        ]}
        schema={{
          '@type': 'Service',
          'name': 'Agentic AI & Multi-Agent Workflow Orchestration',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Quantum Mesh'
          },
          'description': 'Production-grade autonomous AI agents with live tool-calling and enterprise vector search RAG.'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solution Hero Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 mb-16 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-100">
                <Bot className="w-3.5 h-3.5" />
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
                  onClick={() => openModal('demo', 'Agentic AI Solutions')}
                  className="w-full sm:w-auto justify-center shadow-md hover:shadow-glow-blue"
                >
                  Schedule Agentic Demo
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openModal('quote', 'Agentic AI Deployment Quote')}
                  rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Build Custom AI Agent
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Response Time</span>
                  <span className="text-sm font-extrabold text-slate-900">&lt; 800ms Streaming</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Success Rate</span>
                  <span className="text-sm font-extrabold text-emerald-600">98.7% Tool Calls</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Data Governance</span>
                  <span className="text-sm font-extrabold text-slate-900">Zero Data Retention</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 font-semibold block">Execution Mode</span>
                  <span className="text-sm font-extrabold text-brand-blue">Cloud or Private VPC</span>
                </div>
              </div>
            </div>

            {/* Right Generated Showcase Image (5 cols) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group-hover:scale-[1.01] transition-transform duration-300">
                <img
                  src={solution.heroImage}
                  alt="Agentic AI Workflow Orchestrator and Autonomous Agents"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold flex items-center justify-between">
                  <span className="bg-slate-900/90 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700">
                    Aurora Agentic Orchestrator
                  </span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    16 Agents Active
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
              AGENTIC CAPABILITIES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Engineered for Real Enterprise Autonomy
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our agents don't stop at talking. They execute tools, fetch live data, verify calculations, and self-correct on failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.keyFeatures.map((feat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-float hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center mb-4 transition-colors">
                  {getFeatureIcon(feat.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Agent Architecture Showcase */}
        <div className="mb-20 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
              ORCHESTRATION ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Stateful Multi-Agent Graph Architecture
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Built on resilient state graphs with checkpointing, rate limiting, and private vector memories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {solution.architecture.points.map((point, i) => (
              <div key={i} className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/60 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200 leading-relaxed font-medium">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0B132B] p-5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-xs text-slate-400 font-semibold">Supported Model Engines:</span>
              <div className="flex flex-wrap gap-2">
                {['Claude 3.7 Sonnet', 'OpenAI GPT-4o', 'DeepSeek-R1', 'Llama 3.3 70B', 'Mistral Large'].map((m) => (
                  <span key={m} className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-semibold text-slate-300">
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <span className="text-xs text-emerald-400 font-medium">100% Private VPC Deployable</span>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 mb-20">
          <div className="text-left mb-8">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              HOW AGENTS EXECUTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Goal-Driven Agentic Execution Pipeline
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflows.map((wf) => (
              <div key={wf.step} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative">
                <span className="text-3xl font-black text-indigo-200 block mb-2">{wf.step}</span>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{wf.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{wf.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Tiers */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              DEPLOYMENT USE CASES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Choose an Agentic Package
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {solution.deploymentOptions.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-indigo-300 hover:shadow-float transition-all duration-300"
              >
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-600 inline-block mb-3">
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
                  onClick={() => openModal('quote', `Agentic AI: ${pkg.tier}`)}
                  className="w-full text-indigo-600 border-indigo-200 hover:bg-indigo-50 justify-between"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Architecture Plan
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
