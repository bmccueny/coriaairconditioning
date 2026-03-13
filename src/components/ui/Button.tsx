'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  external?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  type?: undefined;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  disabled?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-[#830f14] text-white hover:bg-[#5a0b0d] shadow-lg shadow-[#830f14]/30',
  secondary: 'bg-[#1a1a2e] text-white hover:bg-[#0f0f1a] border border-[#2a2a3a]',
  outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30',
  ghost: 'text-white hover:bg-white/10',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg font-semibold',
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth,
    icon,
    className = '',
    href,
  } = props;

  const baseClassName = [
    'inline-flex items-center justify-center gap-2.5 rounded-lg font-medium transition-all duration-200 cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && <span className="flex-shrink-0 flex items-center">{icon}</span>}
      {children}
    </>
  );

  // Render as a link
  if (href) {
    const { external, onClick: onClickLink } = props as ButtonAsLink;

    if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <motion.a
          href={href}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={baseClassName}
          onClick={onClickLink}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <Link href={href} className="inline-flex">
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={baseClassName}
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  // Render as a button
  const { type = 'button', onClick: onClickBtn, disabled } = props as ButtonAsButton;
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClassName}
      onClick={onClickBtn}
      disabled={disabled}
    >
      {content}
    </motion.button>
  );
}
