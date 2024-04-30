import { useCallback, useState } from 'react';
import { useTimeout } from './useTimeout';

type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>;

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const clearValue = useCallback(() => setCopiedText(null), []);

  useTimeout(clearValue, copiedText ? 2500 : null);

  const copy: CopyFn = async text => {
    if (!navigator?.clipboard) {
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.error('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return { copy, copiedText };
};
