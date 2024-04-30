'use client';
import { typography } from '@/ui/styles/typography.css';
import { useUnit } from 'effector-react';
import { CopyItem } from '../copy-item';
import { generateTextFX } from './api/effects';
import { $generatorStore } from './api/store';
import { generatorStyles } from './style.css';

export const GeneratedText = () => {
  const loading = useUnit(generateTextFX.pending);
  const { generatedText } = useUnit($generatorStore);

  return (
    <div className={generatorStyles.text}>
      {loading ? (
        <div className={generatorStyles.ball} />
      ) : (
        <>
          <p
            className={typography({ variant: 'caption', font: 'text' })}
            dangerouslySetInnerHTML={{
              __html: generatedText
                ? generatedText.replaceAll('\n', '<br />')
                : 'Your personalized job application will appear here...',
            }}
          />
          <CopyItem className={generatorStyles.copyItem} copyValue={generatedText} />
        </>
      )}
    </div>
  );
};
