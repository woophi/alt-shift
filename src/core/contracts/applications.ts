export type NewApplicationData = {
  jobTitle: string;
  company: string;
  bestSkills: string;
  additionalDetails: string;
};
export type ApplicationData = NewApplicationData & {
  id: number;
};
