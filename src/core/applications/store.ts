import { createStore } from 'effector';
import { LS, LSKeys } from '../local-store';

export const $applicationsStore = createStore<{ applicationsNumber: number }>({
  applicationsNumber: LS.getItem(LSKeys.SavedApplications, []).length,
});
