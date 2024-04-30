import { textTemplate } from '@/core/applications/template';
import { NewApplicationData } from '@/core/contracts';
import { LS, LSKeys } from '@/core/local-store';
import { delay } from '@/core/utils/delay';
import { createEffect } from 'effector';

export const generateTextFX = createEffect(async (payload: NewApplicationData) => {
  await delay();
  const allApplications = LS.getItem(LSKeys.SavedApplications, []);
  LS.setItem(
    LSKeys.SavedApplications,
    allApplications.concat({
      ...payload,
      id: Date.now(),
    }),
  );

  return textTemplate(payload);
});
