'use client';
import { $applicationsStore, initApplications } from '@/core/applications/store';
import { typography } from '@/ui/styles/typography.css';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { APPLICATIONS_GOAL_COUNT } from './constants';
import { pointsStyles } from './style.css';

type Props = {
  variant: 'bullets' | 'flattened';
};

const DEFAULT_GOAL = Array.from(Array(APPLICATIONS_GOAL_COUNT)).map(_ => 0);

export const Ponits = ({ variant }: Props) => {
  const [goal, setGoal] = useState(DEFAULT_GOAL);
  const { applicationsNumber } = useUnit($applicationsStore);
  const isFlattened = variant === 'flattened';
  const isGoalAchived = applicationsNumber >= APPLICATIONS_GOAL_COUNT;

  useEffect(() => {
    initApplications();
  }, []);

  useEffect(() => {
    setGoal(v => v.map((_, index) => (applicationsNumber >= index + 1 ? 1 : 0)));
  }, [applicationsNumber]);

  return (
    <div className={pointsStyles.container({ variant })}>
      {!isFlattened && (
        <p className={typography({ variant: 'caption', font: 'text' })}>
          {applicationsNumber}/{APPLICATIONS_GOAL_COUNT} applications generated
        </p>
      )}
      {isGoalAchived && variant === 'bullets' ? (
        <div className={pointsStyles.checkCircle}>
          <Image src="/icons/check.svg" width={14} height={12} alt="check icon" />
        </div>
      ) : (
        <div className={pointsStyles.points({ variant })}>
          {goal.map((v, index) => (
            <span key={index} className={pointsStyles.point({ variant, filled: !!v })} />
          ))}
        </div>
      )}
      {isFlattened && (
        <p className={typography({ variant: 'caption', font: 'text' })}>
          {applicationsNumber} out of {APPLICATIONS_GOAL_COUNT}
        </p>
      )}
    </div>
  );
};
