import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'rose' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function Button({
  variant = 'gold',
  size = 'md',
  children,
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-[0.14em] uppercase transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B8893D]/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2 rounded-[4px] gap-2',
    md: 'text-[12px] px-6 py-3 rounded-[4px] gap-2.5',
    lg: 'text-[13px] px-8 py-3.5 rounded-[5px] gap-3'
  };

  const variantStyles = {
    gold: 'bg-[#B8893D] text-white hover:bg-[#A37833] shadow-sm hover:shadow-[0_4px_20px_rgba(184,137,61,0.28)] active:bg-[#8F6627]',
    outline:
      'border border-[#171717]/25 text-[#171717] bg-transparent hover:border-[#171717] hover:bg-[#171717]/5',
    rose: 'bg-[#C8747C] text-white hover:bg-[#B8656E] shadow-sm hover:shadow-[0_4px_20px_rgba(200,116,124,0.28)]',
    dark: 'bg-[#171717] text-white hover:bg-[#2C2927] shadow-sm',
    ghost: 'text-[#171717] hover:text-[#B8893D] hover:bg-[#171717]/5'
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
