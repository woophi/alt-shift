'use client';
import { $applicationsStore } from '@/core/applications/store';
import { routes } from '@/core/routes';
import { Button } from '@/ui/button';
import { typography } from '@/ui/styles/typography.css';
import { useUnit } from 'effector-react';
import Link from 'next/link';
import { Ponits } from '../points';
import { APPLICATIONS_GOAL_COUNT } from '../points/constants';
import { homeStyles } from './style.css';

export const GoalBanner = () => {
  const { applicationsNumber } = useUnit($applicationsStore);

  if (applicationsNumber >= APPLICATIONS_GOAL_COUNT) {
    return null;
  }

  return (
    <div className={homeStyles.contentContainer}>
      <div className={homeStyles.contentInner}>
        <h2 className={typography({ variant: 'h2', weight: 600 })}>Hit your goal</h2>
        <p className={typography({ variant: 'caption', font: 'text' })}>
          Generate and send out couple more job applications today to get hired faster
        </p>
        <Link href={routes.generator}>
          <Button size="l" icon="plus">
            Create New
          </Button>
        </Link>
        <Ponits variant="flattened" />
      </div>
    </div>
  );
};
