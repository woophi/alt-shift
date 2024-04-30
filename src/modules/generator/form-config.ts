import * as yup from 'yup';
import { GeneratorFormData } from './types';

export const schemaGeneratorForm: yup.ObjectSchema<GeneratorFormData> = yup
  .object({
    jobTitle: yup.string().required(),
    company: yup.string().required(),
    bestSkills: yup.string().required(),
    additionalDetails: yup.string().max(1200).required(),
  })
  .required();
