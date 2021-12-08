import { Dispatch } from 'redux';
import { LoadingActionsType } from '../reducers/loading/types';
import axiosInstance from './axiosConfig';

export interface GetDataType {
  dispatch: Dispatch;
  actionName: string;
  url: string;
}

export const getData = ({ dispatch, actionName, url }: GetDataType) => {
  dispatch({ type: LoadingActionsType.SET_LOADING, payload: true });
  axiosInstance
    .get(`/${url}`)
    .then((response: any) => {
      dispatch({
        type: actionName,
        payload: response.data,
      });
    })
    .catch((response: any) => {
      // to do handle api error
      console.log(response);
    })
    .then(() => {
      dispatch({ type: LoadingActionsType.SET_LOADING, payload: false });
    });
};
