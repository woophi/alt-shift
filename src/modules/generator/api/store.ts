import { $applicationsStore } from '@/core/applications/store';
import { LS, LSKeys } from '@/core/local-store';
import { createStore } from 'effector';
import { generateTextFX } from './effects';

export const $generatorStore = createStore<{ generatedText: string }>({
  generatedText: '',
});

$generatorStore.on(generateTextFX.doneData, (_, data) => ({
  generatedText: data,
}));
$applicationsStore.on(generateTextFX.done, state => ({
  data: LS.getItem(LSKeys.SavedApplications, []),
  applicationsNumber: state.applicationsNumber + 1,
}));
