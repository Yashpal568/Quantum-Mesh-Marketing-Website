import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { Service } from '../../types';
import { Button } from '../ui/Button';

interface ServiceCard3DProps {
  service: Service;
  icon: React.ReactNode;
  solutionLink: string | null;
  onOpenQuote: (title: string) => void;
}

export const ServiceCard3D: React.FC<ServiceCard3DProps> = ({
  service,
  icon,
  solutionLink,
  onOpenQuote,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth clamped 3D rotation angles (-8 to +8 deg)
    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18,
    });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl h-full"
      style={{ perspective: '1100px' }}
    >
      <div
        style={{
          transform: isHovered
            ? `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            : 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transformStyle: 'preserve-3d',
          transition: isHovered
            ? 'transform 0.12s ease-out'
            : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease-out, border-color 0.4s ease-out',
        }}
        className={`group bg-white rounded-3xl border border-slate-200/90 border-b-[3px] border-b-slate-300/80 hover:border-blue-400 hover:border-b-brand-blue flex flex-col justify-between overflow-hidden relative h-full ${
          isHovered
            ? 'shadow-[0_24px_50px_-12px_rgba(30,58,138,0.22),0_12px_24px_-8px_rgba(15,23,42,0.1),inset_0_1px_1px_0_rgba(255,255,255,1)]'
            : 'shadow-[0_10px_25px_-5px_rgba(15,23,42,0.06),0_8px_16px_-6px_rgba(15,23,42,0.04),inset_0_1px_1px_0_rgba(255,255,255,0.9)]'
        }`}
      >
        {/* Dynamic 3D Light Glare Follower */}
        <div
          className="pointer-events-none absolute inset-0 z-30 rounded-3xl transition-opacity duration-300"
          style={{
            opacity: glarePos.opacity,
            background: `radial-gradient(circle 380px at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.85), transparent 70%)`,
          }}
        />

        {/* Top 3D Card Edge Highlight Line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Card Image Banner */}
        {service.image && (
          <div
            className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 border-b border-slate-100"
            style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d' }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-70 pointer-events-none" />

            {/* 3D Popping Badge */}
            {service.badge && (
              <div
                className="absolute top-3 left-3 z-10"
                style={{
                  transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
                  transition: 'transform 0.3s ease-out',
                }}
              >
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide border backdrop-blur-md bg-white/95 text-brand-blue border-white/60 shadow-md">
                  {service.badge}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Card Content with Layered 3D Depth */}
        <div
          className="p-6 sm:p-7 flex flex-col flex-grow justify-between relative z-10"
          style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
        >
          <div>
            {/* Header: 3D Floating Icon Box + Title */}
            <div className="flex items-center gap-3.5 mb-3.5">
              <div
                style={{
                  transform: isHovered ? 'translateZ(28px) scale(1.05)' : 'translateZ(0px) scale(1)',
                  transition: 'transform 0.3s ease-out',
                }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 group-hover:from-blue-100/80 group-hover:to-blue-50 flex items-center justify-center border border-slate-200/80 group-hover:border-blue-200 shrink-0 transition-colors shadow-sm shadow-blue-500/10"
              >
                {icon}
              </div>
              <h2
                style={{
                  transform: isHovered ? 'translateZ(22px)' : 'translateZ(0px)',
                  transition: 'transform 0.3s ease-out',
                }}
                className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-brand-blue transition-colors"
              >
                {service.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed font-normal">
              {service.longDescription}
            </p>

            {/* Core Capabilities */}
            <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Core Capabilities:
              </span>
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start text-xs sm:text-sm text-slate-700 gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span className="leading-snug">{cap}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {service.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60 text-[11px] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Buttons with 3D Elevation */}
          <div
            className="pt-4 border-t border-slate-100 mt-auto"
            style={{
              transform: isHovered ? 'translateZ(25px)' : 'translateZ(0px)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            {solutionLink ? (
              <div className="grid grid-cols-2 gap-2.5">
                <Link
                  to={solutionLink}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-blue-200 text-xs font-bold text-brand-blue hover:bg-blue-50 hover:border-brand-blue transition-all duration-150 text-center shadow-2xs hover:shadow-xs"
                >
                  <span>Deep-Dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenQuote(service.title)}
                  className="justify-center text-xs font-bold shadow-sm hover:shadow-md cursor-pointer"
                >
                  Get Quote
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => onOpenQuote(service.title)}
                className="w-full justify-between group text-brand-blue border-blue-200 hover:bg-blue-50 font-bold shadow-2xs hover:shadow-xs cursor-pointer"
                rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
              >
                Request Scope & Quote
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
