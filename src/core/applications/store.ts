import { createStore } from 'effector';
import { ApplicationData } from '../contracts';
import { LS, LSKeys } from '../local-store';
import { deleteApplicationFX } from './effects';

export const $applicationsStore = createStore<{ applicationsNumber: number; data: ApplicationData[] }>({
  applicationsNumber: LS.getItem(LSKeys.SavedApplications, []).length,
  data: LS.getItem(LSKeys.SavedApplications, []),
});

$applicationsStore.on(deleteApplicationFX.doneData, (state, id) => ({
  applicationsNumber: state.applicationsNumber - 1,
  data: state.data.filter(d => d.id !== id),
}));
