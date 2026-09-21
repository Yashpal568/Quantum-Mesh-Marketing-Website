import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { useModal } from '../context/ModalContext';
import { FinalCTA } from '../components/cta/FinalCTA';

export const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { openModal } = useModal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Healthcare', 'Education', 'Enterprise', 'Restaurant'];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-semibold border border-blue-100 mb-3">
            <span>OFFICIAL PRODUCT SUITE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Software Built for Real Businesses
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Scalable, battle-tested software products designed for hospitals, educational institutions, enterprise facilities, and hospitality chains.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Product Showcase Cards */}
        <div className="space-y-12 mb-16">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              className={`bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-float transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-brand-blue border border-blue-100">
                    {product.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Category: {product.category}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {product.name}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.longDescription}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-100">
                  {product.features.map((feat, i) => (
                    <div key={i} className="flex items-center text-xs sm:text-sm text-slate-700 gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {product.metrics.map((m, i) => (
                    <div key={i} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-xs text-slate-500 block truncate">{m.label}</span>
                      <span className="text-sm sm:text-base font-bold text-slate-900">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Link to={`/products/${product.slug}`}>
                    <Button
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Learn More
                    </Button>
                  </Link>

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => openModal('demo', product.name)}
                    leftIcon={<Calendar className="w-4 h-4" />}
                  >
                    Book Demo
                  </Button>
                </div>
              </div>

              {/* Right Mockup Preview with Real UI Screenshot (5 cols) */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-slate-200/90 shadow-md bg-slate-900 min-h-[260px] flex flex-col justify-end">
                {product.image ? (
                  <>
                    <img
                      src={product.image}
                      alt={`${product.name} Interface`}
                      className="w-full h-full object-cover min-h-[260px] max-h-[340px] transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border backdrop-blur-md shadow-xs bg-white/95 text-brand-blue border-blue-100">
                        {product.shortName} OS
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                      <div className="flex flex-wrap gap-1">
                        {product.techStack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-md text-[10px] text-slate-200 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-600/90 backdrop-blur-md text-white font-medium text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Production
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="p-4 sm:p-6 text-white">
                    <div className="text-xs font-bold">{product.shortName} OS</div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <FinalCTA />
      </div>
    </div>
  );
};
