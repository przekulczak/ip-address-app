import { ADD_TO_HISTORY } from '../reducers/history';

export const addToHistory = (payload: string) => ({
  type: ADD_TO_HISTORY,
  payload,
});
