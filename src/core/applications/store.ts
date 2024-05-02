import { createEvent, createStore } from 'effector';
import { ApplicationData } from '../contracts';
import { LS, LSKeys } from '../local-store';
import { deleteApplicationFX } from './effects';

export const initApplications = createEvent();

export const $applicationsStore = createStore<{ applicationsNumber: number; data: ApplicationData[] }>({
  applicationsNumber: 0,
  data: [],
});

$applicationsStore.on(deleteApplicationFX.doneData, (state, id) => ({
  applicationsNumber: state.applicationsNumber - 1,
  data: state.data.filter(d => d.id !== id),
}));
$applicationsStore.on(initApplications, () => ({
  applicationsNumber: LS.getItem(LSKeys.SavedApplications, []).length,
  data: LS.getItem(LSKeys.SavedApplications, []),
}));
