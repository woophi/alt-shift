import { Button } from '@/ui/button';
import { typography } from '@/ui/styles/typography.css';
import { Ponits } from '../points';
import { homeStyles } from './style.css';

export const HomeLayout = () => {
  return (
    <div>
      <div className={homeStyles.headContainer}>
        <h1 className={typography({ variant: 'h1', weight: 600 })}>Applications</h1>

        <Button icon="plus">Create New</Button>
      </div>

      <div className={homeStyles.contentContainer}>
        <div className={homeStyles.contentInner}>
          <h2 className={typography({ variant: 'h2', weight: 600 })}>Hit your goal</h2>
          <p className={typography({ variant: 'caption', font: 'text' })}>
            Generate and send out couple more job applications today to get hired faster
          </p>
          <Button size="l" icon="plus">
            Create New
          </Button>
          <Ponits variant="flattened" />
        </div>
      </div>
    </div>
  );
};
