'use client';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizes = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  full: 'max-w-full',
};

export function Container({ children, className = '', size = 'xl' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'dark' | 'gradient' | 'surface';
}

const backgrounds = {
  default: '',
  dark: 'bg-[#0a0a0f]',
  gradient: 'bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]',
  surface: 'bg-[#16161d]',
};

export function Section({ children, className = '', background = 'default' }: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}
