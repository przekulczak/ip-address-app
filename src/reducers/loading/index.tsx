import { LoadingStateType, LoadingAction, LoadingActionsType } from './types';

const initialState: LoadingStateType = {
  loading: false,
};

export default (state = initialState, action: LoadingAction): LoadingStateType => {
  switch (action.type) {
    case LoadingActionsType.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
