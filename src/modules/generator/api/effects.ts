import { textTemplate } from '@/core/applications/template';
import { NewApplicationData } from '@/core/contracts';
import { LS, LSKeys } from '@/core/local-store';
import { delay } from '@/core/utils/delay';
import { createEffect } from 'effector';

export const generateTextFX = createEffect(async (payload: NewApplicationData) => {
  await delay();
  const allApplications = LS.getItem(LSKeys.SavedApplications, []);
  let personalizedApplicationText = '';

  try {
    const res = await fetch('/api/applications/text', { method: 'POST', body: JSON.stringify(payload) });
    const { result } = await (res.json() as Promise<{ result: string }>);

    personalizedApplicationText = result;
  } catch {
    personalizedApplicationText = textTemplate(payload);
  }

  LS.setItem(
    LSKeys.SavedApplications,
    allApplications.concat({
      ...payload,
      id: Date.now(),
      personalizedApplicationText,
    }),
  );

  return personalizedApplicationText;
});
