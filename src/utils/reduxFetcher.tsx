import { Dispatch } from 'redux';
import { LoadingActionsType } from '../reducers/loading/types';
import axiosInstance from './axiosConfig';
import { history } from '../App';

export interface GetDataType {
  dispatch: Dispatch;
  actionName: string;
  url: string;
}

export const getData = ({ dispatch, actionName, url }: GetDataType) => {
  dispatch({ type: LoadingActionsType.SET_LOADING, payload: true });
  axiosInstance
    .get(`/${url}`)
    .then((response) => {
      if (response.data.success === false) {
        history.push('/error');
      } else {
        dispatch({
          type: actionName,
          payload: response.data,
        });
      }
    })
    .catch((response) => {
      console.log(response);
    })
    .then(() => {
      dispatch({ type: LoadingActionsType.SET_LOADING, payload: false });
    });
};
