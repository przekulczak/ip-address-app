export enum LoadingActionsType {
  SET_LOADING = 'SET_LOADING',
}

export interface SetLoading {
  type: LoadingActionsType.SET_LOADING;
  payload: boolean;
}
export interface LoadingStateType {
  loading: boolean;
}
