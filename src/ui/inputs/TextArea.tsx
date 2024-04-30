import { cn } from '@/core/utils/cn';
import { forwardRef, useId } from 'react';
import { typography } from '../styles/typography.css';
import { inputsStyles } from './style.css';

type Props = {
  label: string;
  error?: boolean;
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className, maxLength, value, ...rest }, ref) => {
    const id = useId();

    return (
      <div className={cn(inputsStyles.container, className)}>
        <label htmlFor={id} className={inputsStyles.label}>
          {label}
        </label>
        <textarea
          className={inputsStyles.textArea({ error })}
          ref={ref}
          maxLength={maxLength}
          value={value}
          {...rest}
          id={id}
        />
        {maxLength && (
          <p className={typography({ variant: 'hint', font: 'text', error })}>
            {value ? String(value).length : 0}/{maxLength}
          </p>
        )}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
