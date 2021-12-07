import { Dispatch } from 'redux';
import { GET_LOCATION, LOADING_LOCATION } from '../reducers/search';
import { getData } from '../utils/reduxFetcher';

export const getLocation = (query: string) => {
  return (dispatch: Dispatch) => {
    getData({ loadingAction: LOADING_LOCATION, actionName: GET_LOCATION, url: query, dispatch });
  };
};
