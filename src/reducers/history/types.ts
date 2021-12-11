export enum HistoryActionsType {
  ADD_TO_HISTORY = 'ADD_TO_HISTORY',
}

export interface AddToHistory {
  type: HistoryActionsType.ADD_TO_HISTORY;
  payload: string;
}

export interface HistoryStateType {
  history: string[];
}

export type HistoryAction = AddToHistory;
