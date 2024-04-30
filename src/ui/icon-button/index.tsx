import { cn } from '@/core/utils/cn';
import Image from 'next/image';
import { forwardRef } from 'react';
import { iconBtnStyles } from './style.css';
import { Icon } from './types';

type Props = {
  icon: Icon;
} & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

export const IconButton = forwardRef<HTMLButtonElement, Props>(({ icon, className, ...rest }, ref) => {
  return (
    <button className={cn(iconBtnStyles.btn, className)} {...rest} ref={ref}>
      <Image src={`/icons/${icon}.svg`} width={20} height={20} alt={icon} />
    </button>
  );
});

IconButton.displayName = 'IconButton';
