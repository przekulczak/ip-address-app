import { HistoryActionsType, HistoryAction, HistoryStateType } from './types';

const initialState: HistoryStateType = {
  history: [],
};

export default (state = initialState, action: HistoryAction): HistoryStateType => {
  switch (action.type) {
    case HistoryActionsType.ADD_TO_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};
