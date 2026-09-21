import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className,
  dot = false,
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 font-medium',
    md: 'text-xs md:text-sm px-3.5 py-1 font-semibold',
  };

  const variantStyles = {
    blue: 'bg-blue-50 text-brand-blue border border-blue-100',
    green: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    purple: 'bg-purple-50 text-purple-600 border border-purple-100',
    orange: 'bg-orange-50 text-orange-600 border border-orange-100',
    pink: 'bg-pink-50 text-pink-600 border border-pink-100',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  const dotColors = {
    blue: 'bg-brand-blue',
    green: 'bg-emerald-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500',
    neutral: 'bg-slate-400',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center gap-1.5 rounded-full',
          sizeStyles[size],
          variantStyles[variant],
          className
        )
      )}
    >
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full animate-pulse', dotColors[variant])} />}
      {children}
    </span>
  );
};
