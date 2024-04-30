import { createEffect } from 'effector';
import { LS, LSKeys } from '../local-store';

export const deleteApplicationFX = createEffect((id: number) => {
  const allApplications = LS.getItem(LSKeys.SavedApplications, []);
  LS.setItem(
    LSKeys.SavedApplications,
    allApplications.filter(d => d.id !== id),
  );
  return id;
});
