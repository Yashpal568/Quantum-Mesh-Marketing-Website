import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Fingerprint, 
  Bot, 
  Cloud, 
  GraduationCap,
  MapPin,
  Building2,
  ShieldCheck,
  BookOpen,
  UtensilsCrossed
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'solutions' | null>(null);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(true);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const { openModal } = useModal();
  const location = useLocation();
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        productsDropdownRef.current &&
        !productsDropdownRef.current.contains(event.target as Node) &&
        solutionsDropdownRef.current &&
        !solutionsDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock background scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // 7 Ready-to-Use Software Systems (categorized strictly under Products)
  const productSystems = [
    {
      name: 'Hospital Management System (HMS)',
      desc: 'Complete healthcare OS: OPD, IPD, lab, billing & pharmacy',
      path: '/products/hms',
      badge: 'Healthcare',
      icon: <Building2 className="w-4 h-4 text-blue-600" />
    },
    {
      name: 'Visitor Management System (VMS)',
      desc: 'Smart visitor tracking with QR pass & biometric security',
      path: '/products/vms',
      badge: 'Security',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />
    },
    {
      name: 'School Management System SaaS',
      desc: 'Monthly rental or custom ERP: admissions, fees & bus GPS',
      path: '/products/school-management-saas',
      badge: 'SaaS Rental',
      icon: <GraduationCap className="w-4 h-4 text-amber-600" />
    },
    {
      name: 'Biometric Attendance & Access',
      desc: 'Hardware terminal + real-time cloud HRMS & payroll sync',
      path: '/solutions/biometric-attendance',
      badge: 'Hardware+Cloud',
      icon: <Fingerprint className="w-4 h-4 text-cyan-600" />
    },
    {
      name: 'University Management (UMS)',
      desc: 'Campus ERP for academics, faculty, exams & student portal',
      path: '/products/ums',
      badge: 'Campus ERP',
      icon: <GraduationCap className="w-4 h-4 text-purple-600" />
    },
    {
      name: 'Learning Management (LMS)',
      desc: 'Digital academy: interactive courses, quizzes & certificates',
      path: '/products/lms',
      badge: 'EdTech',
      icon: <BookOpen className="w-4 h-4 text-orange-600" />
    },
    {
      name: 'Restaurant SaaS (Servora)',
      desc: 'Contactless QR menu ordering, KDS & cloud billing POS',
      path: '/products/restaurant-saas',
      badge: 'Hospitality',
      icon: <UtensilsCrossed className="w-4 h-4 text-pink-600" />
    }
  ];

  // Enterprise Flagship Solutions
  const flagshipSolutions = [
    {
      name: 'Biometric Attendance Ecosystem',
      desc: 'Hardware device + cloud HRMS & automated payroll',
      path: '/solutions/biometric-attendance',
      icon: <Fingerprint className="w-4 h-4 text-blue-600" />
    },
    {
      name: 'Agentic AI & Autonomous Agents',
      desc: 'Goal-driven AI agents with live tool calling & private RAG',
      path: '/solutions/agentic-ai',
      icon: <Bot className="w-4 h-4 text-indigo-600" />
    },
    {
      name: 'Cloud, DevOps & Generative AI',
      desc: 'Kubernetes orchestration, CI/CD & private LLM serving',
      path: '/solutions/cloud-devops-genai',
      icon: <Cloud className="w-4 h-4 text-sky-600" />
    },
    {
      name: 'Uttarakhand Regional Hubs & Near Me',
      desc: 'Local software engineers in Rudrapur HQ, Dehradun, Haldwani',
      path: '/locations',
      icon: <MapPin className="w-4 h-4 text-emerald-600" />
    }
  ];

  const standardNavLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div onMouseEnter={() => setActiveDropdown(null)}>
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav 
          className="hidden md:flex items-center space-x-1 lg:space-x-1.5" 
          aria-label="Main Navigation"
        >
          <NavLink
            to="/"
            onMouseEnter={() => setActiveDropdown(null)}
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive && location.pathname === '/'
                  ? 'text-brand-blue font-semibold'
                  : 'text-slate-600 hover:text-brand-blue hover:bg-blue-50/50'
              }`
            }
          >
            Home
          </NavLink>

          {/* 1. Products & Systems Dropdown Menu */}
          <div
            className="relative"
            ref={productsDropdownRef}
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
              onMouseEnter={() => setActiveDropdown('products')}
              className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname.startsWith('/products') || activeDropdown === 'products'
                  ? 'text-brand-blue font-semibold bg-blue-50/50'
                  : 'text-slate-600 hover:text-brand-blue hover:bg-blue-50/50'
              }`}
            >
              <span>Products</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180 text-brand-blue' : ''}`} />
            </button>

            {/* Desktop Products Dropdown Panel */}
            {activeDropdown === 'products' && (
              <div
                className="absolute top-full left-0 pt-2 w-[420px] z-50 animate-scale-up"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1">
                  <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-100 mb-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Ready Software Systems (7)
                    </span>
                    <Link
                      to="/products"
                      onClick={() => setActiveDropdown(null)}
                      className="text-[11px] font-bold text-brand-blue hover:underline flex items-center gap-1"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-1 max-h-[360px] overflow-y-auto">
                    {productSystems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50/70 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-white flex items-center justify-center shrink-0 border border-slate-200/60 shadow-xs mt-0.5">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-brand-blue truncate">
                              {item.name}
                            </span>
                            <span className="text-[9px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded shrink-0">
                              {item.badge}
                            </span>
                          </div>
                          <span className="text-[10.5px] text-slate-500 line-clamp-1">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 2. Solutions Dropdown Menu */}
          <div
            className="relative"
            ref={solutionsDropdownRef}
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
              onMouseEnter={() => setActiveDropdown('solutions')}
              className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname.startsWith('/solutions') || activeDropdown === 'solutions'
                  ? 'text-brand-blue font-semibold bg-blue-50/50'
                  : 'text-slate-600 hover:text-brand-blue hover:bg-blue-50/50'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180 text-brand-blue' : ''}`} />
            </button>

            {/* Dropdown Panel */}
            {activeDropdown === 'solutions' && (
              <div
                className="absolute top-full left-0 pt-2 w-84 sm:w-96 z-50 animate-scale-up"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 space-y-1">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Enterprise Flagship Ecosystems
                  </div>
                  {flagshipSolutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-white flex items-center justify-center shrink-0 border border-slate-200/60 shadow-xs">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 group-hover:text-brand-blue block">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {standardNavLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onMouseEnter={() => setActiveDropdown(null)}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-blue font-semibold'
                    : 'text-slate-600 hover:text-brand-blue hover:bg-blue-50/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center" onMouseEnter={() => setActiveDropdown(null)}>
          <Button
            variant="primary"
            size="md"
            onClick={() => openModal('quote')}
            rightIcon={<ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />}
            className="shadow-sm font-semibold text-sm px-5 py-2.5"
          >
            Get a Quote
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-brand-blue hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Professional Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white flex flex-col animate-fade-in">
          {/* Top Bar with Brand Logo and Close Button */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 shrink-0 bg-white shadow-xs">
            <Logo size="md" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Navigation List */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive && location.pathname === '/'
                    ? 'bg-blue-50 text-brand-blue'
                    : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              Home
            </NavLink>

            {/* 1. PRODUCTS & SYSTEMS ACCORDION (All systems categorized here) */}
            <div className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-bold text-slate-900 text-base hover:text-brand-blue transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>Products & Systems</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-brand-blue uppercase">
                    7 Systems
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    isMobileProductsOpen ? 'rotate-180 text-brand-blue' : ''
                  }`}
                />
              </button>

              {isMobileProductsOpen && (
                <div className="px-2.5 pb-3 space-y-1.5 animate-fade-in">
                  {productSystems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-blue-50/70 transition-colors bg-white border border-slate-100 shadow-2xs group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-brand-blue truncate">
                            {item.name}
                          </span>
                          <span className="text-[9px] font-medium text-slate-400 bg-slate-50 border border-slate-100 px-1.5 py-0.2 rounded shrink-0">
                            {item.badge}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  ))}

                  <Link
                    to="/products"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 pt-2 pb-1 text-xs font-bold text-brand-blue hover:underline text-center"
                  >
                    <span>View All Products & Systems Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* 2. ENTERPRISE SOLUTIONS ACCORDION */}
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-bold text-slate-900 text-base hover:text-brand-blue transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span>Enterprise Solutions</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    isMobileSolutionsOpen ? 'rotate-180 text-brand-blue' : ''
                  }`}
                />
              </button>

              {isMobileSolutionsOpen && (
                <div className="px-2.5 pb-3 space-y-1.5 animate-fade-in">
                  {flagshipSolutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white transition-colors bg-white/70 border border-slate-100 shadow-2xs group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center shrink-0 border border-slate-200/60 mt-0.5">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-bold text-slate-900 group-hover:text-brand-blue block truncate">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard Navigation Links */}
            <NavLink
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-blue-50 text-brand-blue' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-blue-50 text-brand-blue' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              Our Work
            </NavLink>

            <NavLink
              to="/locations"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-blue-50 text-brand-blue' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              📍 Uttarakhand Hubs & Near Me
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-blue-50 text-brand-blue' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-blue-50 text-brand-blue' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Bottom Actions Bar */}
          <div className="p-4 border-t border-slate-100 bg-slate-50 shrink-0 space-y-2.5">
            <Button
              variant="primary"
              size="lg"
              className="w-full justify-center shadow-md"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal('quote');
              }}
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Get a Quote
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full justify-center"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal('demo');
              }}
            >
              Book a Demo
            </Button>
            <div className="text-center pt-1">
              <span className="text-[10px] text-slate-500 font-medium">
                HQ: PSA Plaza, Awas Vikas, Rudrapur • +91 98765 43210
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
