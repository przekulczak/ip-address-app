import { LocationResponse } from '../../types/locationType';

export enum LocationActionsType {
  LOADING_SEARCH_LOCATION = 'LOADING_SEARCH_LOCATION',
  SEARCH_LOCATION = 'SEARCH_LOCATION',
  LOADING_USERS_LOCATION = 'LOADING_USERS_LOCATION',
  GET_USERS_LOCATION = 'GET_USERS_LOCATION',
}

export interface SearchLocation {
  type: LocationActionsType.SEARCH_LOCATION;
  payload: LocationResponse;
}

export interface LoadingSearchLocation {
  type: LocationActionsType.LOADING_SEARCH_LOCATION;
  payload: boolean;
}

export interface GetUsersLocation {
  type: LocationActionsType.GET_USERS_LOCATION;
  payload: LocationResponse;
}

export interface LoadingUsersLocation {
  type: LocationActionsType.LOADING_USERS_LOCATION;
  payload: boolean;
}

export interface LocationStateType {
  usersLocation: LocationResponse | null;
  loadingUsersLocation: boolean;
  searchLocation: LocationResponse | null;
  loadingSearchLocation: boolean;
}

export type LocationAction = SearchLocation | LoadingSearchLocation | LoadingUsersLocation | GetUsersLocation;
