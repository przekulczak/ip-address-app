import { HistoryActionsType } from '../reducers/history/types';

export const addToHistory = (payload: string) => ({
  type: HistoryActionsType.ADD_TO_HISTORY,
  payload,
});
