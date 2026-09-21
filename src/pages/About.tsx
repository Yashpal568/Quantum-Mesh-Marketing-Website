import React, { useEffect } from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Sparkles, 
  Server, 
  CheckCircle2, 
  Building2,
  ArrowRight
} from 'lucide-react';
import { FinalCTA } from '../components/cta/FinalCTA';
import { useModal } from '../context/ModalContext';
import { SEOHead } from '../components/seo/SEOHead';

export const About: React.FC = () => {
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: 'Reliability Over Hype',
      desc: 'We engineer digital systems that enterprise operations can rely on 24/7 without unexpected downtime, fragile abstractions, or bloated dependencies.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Product-First Discipline',
      desc: 'Whether configuring a turnkey SaaS platform or writing custom business logic, we build with modular, reusable, type-safe architecture.',
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Measurable Operational Impact',
      desc: 'Every feature, biometric firmware tweak, and AI workflow is targeted at reducing friction, eliminating time theft, or boosting productivity.',
      icon: <Target className="w-5 h-5 text-purple-600" />,
    },
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Discovery & Architecture',
      desc: 'We map your existing bottlenecks, user personas, and technical requirements into a precise blueprint.',
    },
    {
      num: '02',
      title: 'Iterative Engineering',
      desc: 'Sprint-based development cycles with continuous automated tests and transparent staging releases.',
    },
    {
      num: '03',
      title: 'Hardening & Deployment',
      desc: 'Rigorous security reviews, load testing, database optimizations, and zero-downtime production deployment.',
    },
    {
      num: '04',
      title: 'Lifecycle Partnership',
      desc: 'Ongoing monitoring, active SLA maintenance, version upgrades, and feature enhancements as your business scales.',
    },
  ];

  const leadership = [
    {
      name: 'Priyanshu Joshi',
      role: 'Founder & Principal Architect',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Over a decade leading enterprise digital transformation, distributed multi-tenant architectures, and mission-critical cloud deployments.',
      specialty: 'System Architecture & B2B SaaS'
    },
    {
      name: 'Aditya Sharma',
      role: 'Head of AI & Autonomous Systems',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Specialist in LangGraph stateful multi-agent architectures, hybrid vector retrieval, and private enterprise LLM fine-tuning.',
      specialty: 'Agentic AI & Neural Systems'
    },
    {
      name: 'Rohan Verma',
      role: 'Principal IoT & Hardware Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Leads edge firmware engineering, optical fingerprint sensor calibration, and encrypted biometric hardware security enclaves.',
      specialty: 'Biometrics & Embedded Linux'
    },
    {
      name: 'Neha Kapoor',
      role: 'Staff DevOps & Cloud Architect',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Maintains high-availability Kubernetes clusters across AWS and Azure, GitOps deployment pipelines, and zero-trust security.',
      specialty: 'Multi-Cloud & Site Reliability'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FAFCFF]">
      <SEOHead
        title="About Quantum Mesh — Enterprise Software Lab in Rudrapur, Uttarakhand"
        description="Learn about Quantum Mesh's in-house software engineering lab at PSA Plaza, Rudrapur. Leadership, mission, hardware R&D facility, and full-lifecycle client partnership."
        keywords="about quantum mesh, software engineering company rudrapur, it company uttarakhand leadership, psa plaza rudrapur office"
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
      />
      {/* About Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold border border-blue-100 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT QUANTUM MESH</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight max-w-3xl mx-auto">
            Technology for <span className="bg-gradient-to-r from-brand-blue to-cyan-500 bg-clip-text text-transparent">Real-World Impact</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Quantum Mesh is an engineering-first software and IT solutions company. We bridge the gap between deep technical engineering and the real-world operational needs of enterprises, healthcare networks, and educational institutions.
          </p>

          {/* Quick Stats Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-700">
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              50+ Enterprise Deployments
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-2">
              <Building2 className="w-4 h-4 text-brand-blue" />
              HQ: PSA Plaza, Rudrapur
            </span>
            <span className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-xs flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-500" />
              99.9% Uptime Commitment
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {/* Visual Hero Feature: Headquarters Office Showcase */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg relative bg-slate-900 group">
          <div className="aspect-[21/9] sm:aspect-[21/8] overflow-hidden">
            <img
              src="/assets/generated/tech-headquarters.jpg"
              alt="Quantum Mesh Engineering Headquarters & Collaborative Development Space"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end">
            <div className="p-6 sm:p-10 text-white max-w-2xl">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-blue text-white">
                Our Environment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white">
                Built by Engineers, Designed for Scalability
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Headquartered at PSA Plaza in Rudrapur (Uttarakhand), our engineering team collaborates across full-stack software development, biometric hardware diagnostics, and enterprise cloud systems.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To empower organizations with dependable, modern software products and custom digital infrastructure that automate manual tasks, streamline operations, and drive sustainable growth without unnecessary complexity.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To be the trusted technology foundation for institutions and enterprises seeking thoughtful digital modernization without bloat, downtime, or vendor lock-in.
            </p>
          </div>
        </div>

        {/* Behind The Technology: Engineering Lab Showcase */}
        <div className="mb-20 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold border border-blue-100">
              <Cpu className="w-3.5 h-3.5" />
              <span>THE ENGINEERING LAB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Where Hardware Precision Meets Modern Cloud Architecture
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We do not just assemble off-the-shelf software. In our hardware and systems testing lab, our engineers benchmark biometric algorithms against anti-spoof silicon models, calibrate Near-Infrared sensors, and orchestrate private vLLM clusters.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Biometric Edge Enclaves</h4>
                  <p className="text-xs text-slate-500">Mathematical facial hash generation on ARM TrustZone with sub-300ms verification.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">High-Throughput Microservices</h4>
                  <p className="text-xs text-slate-500">Kubernetes-orchestrated backends handling thousands of concurrent hospital & school records.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => openModal('demo')}
                className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-navy text-white hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
              >
                <span>Book a Virtual Lab Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] bg-slate-900">
            <img
              src="/assets/generated/engineering-team-lab.jpg"
              alt="Quantum Mesh Engineering Team Lab & Biometric Hardware Testing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:border-blue-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Engineering Leads */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              LEADERSHIP & EXPERTISE
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Meet the Architects
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Driven by hands-on engineering leads with deep domain experience across enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow space-y-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-slate-100 mx-auto">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-base font-bold text-slate-900">{person.name}</h4>
                  <p className="text-xs text-brand-blue font-semibold mt-0.5">{person.role}</p>
                  <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-slate-600">
                    {person.specialty}
                  </span>
                </div>
                <p className="text-xs text-slate-600 text-center leading-relaxed">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Work */}
        <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200/80 mb-20">
          <div className="text-left mb-10">
            <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
              DELIVERY PROCESS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-xs">
                <span className="text-3xl font-black text-blue-200 block mb-2">{step.num}</span>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Consultation Banner */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-gradient-to-r from-blue-600 to-indigo-700 text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
              Collaborative Delivery
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Ready to Modernize Your Digital Infrastructure?
            </h3>
            <p className="text-sm text-blue-100 leading-relaxed max-w-xl">
              Whether you require ready-to-deploy hospital or school SaaS or custom autonomous AI agents, we partner with your team from discovery to zero-downtime deployment.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <button
                onClick={() => openModal('inquiry')}
                className="w-full sm:w-auto text-center justify-center px-6 py-3 rounded-xl text-xs font-bold bg-white text-brand-navy hover:bg-slate-100 shadow-md transition-colors"
              >
                Talk to an Engineering Consultant
              </button>
              <button
                onClick={() => openModal('demo')}
                className="w-full sm:w-auto text-center justify-center px-5 py-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Request Product Demo
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden bg-blue-900">
            <img
              src="/assets/generated/client-consultation.jpg"
              alt="Quantum Mesh Client Consultation & Systems Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
};
