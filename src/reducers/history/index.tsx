const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export { ADD_TO_HISTORY };

interface AddToHistory {
  type: 'ADD_TO_HISTORY';
  payload: string;
}

export interface HistoryStateType {
  history: string[];
}

const initialState: HistoryStateType = {
  history: [],
};

type Action = AddToHistory;

export default (state = initialState, action: Action): HistoryStateType => {
  switch (action.type) {
    case ADD_TO_HISTORY:
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
};
