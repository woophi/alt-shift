import { Button } from '@/ui/button';
import { TextArea } from '@/ui/inputs/TextArea';
import { TextField } from '@/ui/inputs/TextField';
import { typography } from '@/ui/styles/typography.css';
import { CopyItem } from './CopyItem';
import { generatorStyles } from './style.css';

export const GeneratorLayout = () => {
  return (
    <div className={generatorStyles.container}>
      <div className={generatorStyles.form}>
        <div className={generatorStyles.head({ placeholder: true })}>
          <h1 className={typography({ variant: 'h2', weight: 600 })}>New application</h1>
        </div>

        <div className={generatorStyles.grid2c}>
          <TextField label="Job title" placeholder="Product manager" />
          <TextField label="Company" placeholder="Apple" />
        </div>
        <TextField label="I am good at..." placeholder="HTML, CSS and doing things in time" />
        <TextArea
          maxLength={1200}
          label="Additional details"
          placeholder="Describe why you are a great fit or paste your bio"
        />
        <Button type="submit" size="l" disabled>
          Generate Now
        </Button>
      </div>

      <div className={generatorStyles.text}>
        <p className={typography({ variant: 'caption', font: 'text' })}>
          Your personalized job application will appear here...
        </p>
        <CopyItem />
      </div>
    </div>
  );
};
