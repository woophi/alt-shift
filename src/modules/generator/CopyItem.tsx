'use client';
import { useCopyToClipboard } from '@/core/hooks/useCopyToClipBoard';
import { typography } from '@/ui/styles/typography.css';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import { useCallback } from 'react';
import { $generatorStore } from './api/store';
import { generatorStyles } from './style.css';

export const CopyItem = () => {
  const { copy, copiedText } = useCopyToClipboard();
  const { generatedText } = useUnit($generatorStore);

  const onClick = useCallback(() => {
    if (generatedText) {
      copy(generatedText);
    }
  }, [copy, generatedText]);

  return (
    <div className={generatorStyles.copyContainer({ noValue: !generatedText })} onClick={onClick}>
      <p className={typography({ variant: 'body', font: 'text', weight: 600 })}>
        {!!copiedText ? 'Copied' : 'Copy to clipboard'}
      </p>
      <Image src={!!copiedText ? '/icons/check.svg' : '/icons/copy.svg'} width={20} height={20} alt="copy icon" />
    </div>
  );
};
