import { routes } from '@/core/routes';
import { Button } from '@/ui/button';
import { typography } from '@/ui/styles/typography.css';
import Link from 'next/link';
import { GoalBanner } from '../goal-banner';
import { Applications } from './Applications';
import { homeStyles } from './style.css';

export const HomeLayout = () => {
  return (
    <div>
      <div className={homeStyles.headContainer}>
        <h1 className={typography({ variant: 'h1', weight: 600 })}>Applications</h1>

        <Link href={routes.generator}>
          <Button icon="plus">Create New</Button>
        </Link>
      </div>

      <Applications />
      <GoalBanner />
    </div>
  );
};
