import { LoadingStateType, SetLoading, LoadingActionsType } from './types';

const initialState: LoadingStateType = {
  loading: false,
};

type Action = SetLoading;

export default (state = initialState, action: Action): LoadingStateType => {
  switch (action.type) {
    case LoadingActionsType.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
