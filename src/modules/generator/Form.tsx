'use client';
import { Button } from '@/ui/button';
import { TextArea } from '@/ui/inputs/TextArea';
import { TextField } from '@/ui/inputs/TextField';
import { typography } from '@/ui/styles/typography.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schemaGeneratorForm } from './form-config';
import { generatorStyles } from './style.css';
import { GeneratorFormData } from './types';

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: yupResolver(schemaGeneratorForm),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<GeneratorFormData> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={generatorStyles.form}>
      <div className={generatorStyles.head({ placeholder: true })}>
        <h1 className={typography({ variant: 'h2', weight: 600 })}>New application</h1>
      </div>

      <div className={generatorStyles.grid2c}>
        <TextField label="Job title" placeholder="Product manager" {...register('jobTitle')} />
        <TextField label="Company" placeholder="Apple" {...register('company')} />
      </div>
      <TextField label="I am good at..." placeholder="HTML, CSS and doing things in time" {...register('bestSkills')} />
      <TextArea
        limit={1200}
        label="Additional details"
        placeholder="Describe why you are a great fit or paste your bio"
        {...register('additionalDetails')}
        value={watch('additionalDetails')}
        error={!!errors.additionalDetails}
      />
      <Button type="submit" size="l" disabled={!isDirty || !isValid}>
        Generate Now
      </Button>
    </form>
  );
};
