import { cn } from '@/core/utils/cn';
import Image from 'next/image';
import { iconBtnStyles } from './style.css';
import { Icon } from './types';

type Props = {
  icon: Icon;
  className?: string;
};

export const IconButton = ({ icon, className }: Props) => {
  return (
    <button className={cn(iconBtnStyles.btn, className)}>
      <Image src={`/icons/${icon}.svg`} width={20} height={20} alt={icon} />
    </button>
  );
};
