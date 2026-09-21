import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RotateCw } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from './ProductCard';

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Top Label, Heading, Subtitle & View All Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
                OUR PRODUCTS
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-brand-blue text-[10.5px] font-semibold shadow-2xs">
                <RotateCw className="w-3 h-3 text-brand-blue" />
                <span>Hover or tap card to flip</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready-to-Use Software Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Powerful, customizable and built for real-world businesses.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-blue-200 text-brand-blue hover:border-brand-blue hover:bg-blue-50/60 text-xs sm:text-sm font-semibold transition-all duration-200 group shadow-xs"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 5 Pastel Product Cards Grid (5-col on xl/2xl) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
