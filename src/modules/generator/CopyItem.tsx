'use client';
import { useCopyToClipboard } from '@/core/hooks/useCopyToClipBoard';
import { typography } from '@/ui/styles/typography.css';
import Image from 'next/image';
import { generatorStyles } from './style.css';

export const CopyItem = () => {
  const { copy, copiedText } = useCopyToClipboard();

  return (
    <div className={generatorStyles.copyContainer} onClick={() => copy('123')}>
      <p className={typography({ variant: 'body', font: 'text', weight: 600 })}>
        {!!copiedText ? 'Copied' : 'Copy to clipboard'}
      </p>
      <Image src={!!copiedText ? '/icons/check.svg' : '/icons/copy.svg'} width={20} height={20} alt="copy icon" />
    </div>
  );
};
