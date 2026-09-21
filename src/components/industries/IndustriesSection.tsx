import React from 'react';
import { 
  Activity, 
  GraduationCap, 
  Hotel, 
  UtensilsCrossed, 
  Building, 
  ShoppingBag, 
  Home, 
  Landmark, 
  ArrowRight 
} from 'lucide-react';
import { industries } from '../../data/industries';
import { useModal } from '../../context/ModalContext';

export const IndustriesSection: React.FC = () => {
  const { openModal } = useModal();

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case 'Activity':
        return <Activity className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-600" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-indigo-600" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-pink-600" />;
      case 'Building':
        return <Building className="w-5 h-5 text-emerald-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-amber-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-cyan-600" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-slate-700" />;
      default:
        return <Building className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAFCFF] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-blue uppercase">
            INDUSTRIES WE EMPOWER
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            Built for Diverse Sector Challenges
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Tailored software foundations configured for vertical-specific compliance, workflows, and user expectations.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.id}
              onClick={() => openModal('inquiry')}
              className="group cursor-pointer bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-float transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                  {getIndustryIcon(ind.iconName)}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-1.5">
                  {ind.name}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue group-hover:text-blue-700">
                <span>Discuss Solution</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
