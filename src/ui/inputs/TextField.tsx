import { cn } from '@/core/utils/cn';
import { forwardRef, useId } from 'react';
import { inputsStyles } from './style.css';

type Props = {
  label: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, Props>(({ label, className, ...rest }, ref) => {
  const id = useId();

  return (
    <div className={cn(inputsStyles.container, className)}>
      <label htmlFor={id} className={inputsStyles.label}>
        {label}
      </label>
      <input className={inputsStyles.input} ref={ref} {...rest} id={id} />
    </div>
  );
});

TextField.displayName = 'TextField';
