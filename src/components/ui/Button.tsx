import { type ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const variantClasses = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]',
  secondary:
    'bg-[var(--color-primary)] text-white hover:opacity-90',
  outline:
    'bg-transparent border-2 border-white text-white hover:bg-white/10',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 hover:scale-[1.02] font-[family-name:var(--font-body)] ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
