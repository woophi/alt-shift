'use client';
import { useCopyToClipboard } from '@/core/hooks/useCopyToClipBoard';
import { cn } from '@/core/utils/cn';
import { typography } from '@/ui/styles/typography.css';
import Image from 'next/image';
import { useCallback } from 'react';
import { copyStyles } from './style.css';

type Props = {
  copyValue: string;
  className?: string;
};
export const CopyItem = ({ copyValue, className }: Props) => {
  const { copy, copiedText } = useCopyToClipboard();

  const onClick = useCallback(() => {
    if (copyValue) {
      copy(copyValue);
    }
  }, [copy, copyValue]);

  return (
    <div className={cn(copyStyles.copyContainer({ noValue: !copyValue }), className)} onClick={onClick}>
      <p className={typography({ variant: 'body', font: 'text', weight: 600 })}>
        {!!copiedText ? 'Copied' : 'Copy to clipboard'}
      </p>
      <Image src={!!copiedText ? '/icons/check.svg' : '/icons/copy.svg'} width={20} height={20} alt="copy icon" />
    </div>
  );
};
