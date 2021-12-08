import {
  LocationActionsType,
  SearchLocation,
  LoadingSearchLocation,
  GetUsersLocation,
  LoadingUsersLocation,
  LocationStateType,
} from './types';

const initialState: LocationStateType = {
  usersLocation: null,
  loadingUsersLocation: false,
  searchLocation: null,
  loadingSearchLocation: false,
};

type Action = SearchLocation | LoadingSearchLocation | LoadingUsersLocation | GetUsersLocation;

export default (state = initialState, action: Action): LocationStateType => {
  switch (action.type) {
    case LocationActionsType.SEARCH_LOCATION:
      return { ...state, searchLocation: action.payload };
    case LocationActionsType.LOADING_SEARCH_LOCATION:
      return { ...state, loadingSearchLocation: action.payload };
    case LocationActionsType.GET_USERS_LOCATION:
      return { ...state, usersLocation: action.payload };
    case LocationActionsType.LOADING_USERS_LOCATION:
      return { ...state, loadingUsersLocation: action.payload };
    default:
      return state;
  }
};
