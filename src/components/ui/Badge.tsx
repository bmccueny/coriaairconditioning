'use client';

import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md';
  className?: string;
}

const variants = {
  default: 'bg-white/10 text-white',
  primary: 'bg-[#830f14] text-white',
  secondary: 'bg-[#1a1a2e] text-white border border-[#2a2a3a]',
  success: 'bg-green-600/20 text-green-400 border border-green-600/30',
  warning: 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export function Badge({ children, variant = 'default', size = 'sm', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
