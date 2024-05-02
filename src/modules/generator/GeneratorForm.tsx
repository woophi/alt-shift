'use client';
import { NewApplicationData } from '@/core/contracts';
import { Button } from '@/ui/button';
import { TextArea } from '@/ui/inputs/TextArea';
import { TextField } from '@/ui/inputs/TextField';
import { typography } from '@/ui/styles/typography.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUnit } from 'effector-react';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GoalBanner } from '../goal-banner';
import { GeneratedText } from './GeneratedText';
import { generateTextFX } from './api/effects';
import { $generatorStore } from './api/store';
import { schemaGeneratorForm } from './form-config';
import { generatorStyles } from './style.css';

export const GeneratorForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schemaGeneratorForm),
    mode: 'all',
  });
  const { generatedText } = useUnit($generatorStore);
  const hasGeneratedText = !!generatedText;
  const loading = useUnit(generateTextFX.pending);

  const [jobTitleValue, companyValue] = watch(['jobTitle', 'company']);
  const isCompleteApplicationTitle = !!jobTitleValue && !!companyValue;

  useEffect(
    () => () => {
      $generatorStore.reinit();
    },
    [],
  );

  const resetFormAndState = useCallback(() => {
    reset();
    $generatorStore.reinit();
  }, [reset]);

  const onSubmit = useCallback(
    (data: NewApplicationData) => {
      if (generatedText) {
        resetFormAndState();
      } else {
        generateTextFX(data);
      }
    },
    [generatedText, resetFormAndState],
  );

  return (
    <div className={generatorStyles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={generatorStyles.form}>
        <div className={generatorStyles.head({ placeholder: !isCompleteApplicationTitle })}>
          <h1 className={typography({ variant: 'h2', weight: 600, overflow: 'ellipsis4lines' })}>
            {isCompleteApplicationTitle ? `${jobTitleValue.trim()}, ${companyValue}` : 'New application'}
          </h1>
        </div>

        <div className={generatorStyles.grid2c}>
          <TextField label="Job title" placeholder="Product manager" {...register('jobTitle')} disabled={hasGeneratedText} />
          <TextField label="Company" placeholder="Apple" {...register('company')} disabled={hasGeneratedText} />
        </div>
        <TextField
          label="I am good at..."
          placeholder="HTML, CSS and doing things in time"
          {...register('bestSkills')}
          disabled={hasGeneratedText}
        />
        <TextArea
          limit={1200}
          label="Additional details"
          placeholder="Describe why you are a great fit or paste your bio"
          {...register('additionalDetails')}
          value={watch('additionalDetails')}
          error={!!errors.additionalDetails}
          disabled={hasGeneratedText}
        />
        <Button
          type="submit"
          variant={hasGeneratedText ? 'secondary' : 'primary'}
          icon={hasGeneratedText ? 'repeat' : undefined}
          size="l"
          disabled={!isDirty || !isValid}
          loading={loading}
        >
          {hasGeneratedText ? 'Try Again' : 'Generate Now'}
        </Button>
      </form>

      <GeneratedText />
      {generatedText && <GoalBanner onClick={resetFormAndState} className={generatorStyles.banner} />}
    </div>
  );
};
