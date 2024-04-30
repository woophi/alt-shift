'use client';
import { deleteApplicationFX } from '@/core/applications/effects';
import { $applicationsStore } from '@/core/applications/store';
import { textTemplate } from '@/core/applications/template';
import { cn } from '@/core/utils/cn';
import { typography } from '@/ui/styles/typography.css';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import { CopyItem } from '../copy-item';
import { homeStyles } from './style.css';

export const Applications = () => {
  const { data } = useUnit($applicationsStore);

  if (!data.length) {
    return null;
  }

  return (
    <div className={homeStyles.applicationsContainer}>
      {data.map(application => (
        <div key={application.id} className={homeStyles.application}>
          <p
            className={cn(typography({ variant: 'caption', font: 'text' }), homeStyles.applicationText)}
            dangerouslySetInnerHTML={{
              __html: textTemplate(application).replaceAll('\n', '<br />'),
            }}
          />
          <div className={homeStyles.applicationFooter}>
            <div className={homeStyles.deleteContainer} onClick={() => deleteApplicationFX(application.id)}>
              <Image src="/icons/trash.svg" width={20} height={20} alt="delete icon" />
              <p className={typography({ variant: 'body', font: 'text', weight: 600 })}>Delete</p>
            </div>

            <CopyItem copyValue={textTemplate(application)} />
          </div>
        </div>
      ))}
    </div>
  );
};
