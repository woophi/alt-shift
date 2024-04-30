'use client';
import { $applicationsStore } from '@/core/applications/store';
import { routes } from '@/core/routes';
import { cn } from '@/core/utils/cn';
import { Button } from '@/ui/button';
import { typography } from '@/ui/styles/typography.css';
import { useUnit } from 'effector-react';
import Link from 'next/link';
import { Ponits } from '../points';
import { APPLICATIONS_GOAL_COUNT } from '../points/constants';
import { bannerStyles } from './style.css';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const GoalBanner = ({ className, onClick }: Props) => {
  const { applicationsNumber } = useUnit($applicationsStore);

  if (applicationsNumber >= APPLICATIONS_GOAL_COUNT) {
    return null;
  }

  return (
    <div className={cn(bannerStyles.contentContainer, className)}>
      <div className={bannerStyles.contentInner}>
        <h2 className={typography({ variant: 'h2', weight: 600 })}>Hit your goal</h2>
        <p className={typography({ variant: 'caption', font: 'text' })}>
          Generate and send out couple more job applications today to get hired faster
        </p>
        {onClick ? (
          <Button size="l" icon="plus" onClick={onClick}>
            Create New
          </Button>
        ) : (
          <Link href={routes.generator}>
            <Button size="l" icon="plus">
              Create New
            </Button>
          </Link>
        )}
        <Ponits variant="flattened" />
      </div>
    </div>
  );
};
