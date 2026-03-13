'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const variants = {
  default: 'bg-[#16161d] rounded-xl',
  glass: 'bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl',
  bordered: 'bg-[#16161d] border border-[#2a2a3a] rounded-xl',
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', hover, padding = 'md', className = '', ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' } : undefined}
        className={`
          ${variants[variant]}
          ${paddings[padding]}
          ${className}
        `}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
