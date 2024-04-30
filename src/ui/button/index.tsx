import { cn } from '@/core/utils/cn';
import Image from 'next/image';
import { forwardRef } from 'react';
import { Icon } from '../icon-button/types';
import { btnStyles } from './style.css';

export type Props = {
  children?: React.ReactNode;
  icon?: Icon;
  size?: 'm' | 'l';
  fullWidth?: boolean;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
} & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

const iconSizes: Record<'m' | 'l', { w: number; h: number }> = {
  l: {
    h: 24,
    w: 24,
  },
  m: {
    h: 20,
    w: 20,
  },
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, fullWidth, icon, loading, size = 'm', variant, disabled, children, onClick, ...rest }, ref) => {
    return (
      <button
        disabled={disabled}
        className={cn(btnStyles.button({ size, variant, fullWidth, loading }), className)}
        onClick={disabled || !!loading ? undefined : onClick}
        type="button"
        {...rest}
        ref={ref}
      >
        {(icon || loading) && (
          <Image
            src={`/icons/${loading ? 'loading' : icon}.svg`}
            width={iconSizes[size].w}
            height={iconSizes[size].h}
            alt={icon ?? 'loading icon'}
            className={loading ? btnStyles.loadingIcon : undefined}
          />
        )}
        {!loading && <span>{children}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
