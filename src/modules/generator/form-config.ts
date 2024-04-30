import { NewApplicationData } from '@/core/contracts';
import * as yup from 'yup';

export const schemaGeneratorForm: yup.ObjectSchema<NewApplicationData> = yup
  .object({
    jobTitle: yup.string().required(),
    company: yup.string().required(),
    bestSkills: yup.string().required(),
    additionalDetails: yup.string().max(1200).required(),
  })
  .required();
