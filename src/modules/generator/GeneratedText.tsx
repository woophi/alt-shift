import { typography } from '@/ui/styles/typography.css';
import { CopyItem } from './CopyItem';
import { generatorStyles } from './style.css';

export const GeneratedText = () => {
  return (
    <div className={generatorStyles.text}>
      <p className={typography({ variant: 'caption', font: 'text' })}>
        Your personalized job application will appear here...
      </p>
      <CopyItem />
      {/* <div className={generatorStyles.ball} /> */}
    </div>
  );
};
