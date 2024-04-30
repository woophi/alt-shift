import { NewApplicationData } from '../contracts';

export const textTemplate = (payload: NewApplicationData) =>
  `Dear ${payload.company} Team,\n\nI am writing to express my interest in the ${payload.jobTitle} position.\n\nMy experience in the realm combined with my skills in ${payload.bestSkills} make me a strong candidate for this role.\n\n${payload.additionalDetails}\n\nI am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.\n\nThank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`;
