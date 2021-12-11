import { Dispatch } from 'redux';
import { LocationActionsType } from '../reducers/location/types';
import { getData } from '../utils/reduxFetcher';

export const searchLocation = (query: string) => {
  return (dispatch: Dispatch) => {
    getData({
      actionName: LocationActionsType.SEARCH_LOCATION,
      url: query,
      dispatch,
    });
  };
};

export const getUsersLocation = () => {
  return (dispatch: Dispatch) => {
    getData({
      actionName: LocationActionsType.GET_USERS_LOCATION,
      url: 'check',
      dispatch,
    });
  };
};
