import { Dispatch } from 'redux';
import { toast } from 'react-toastify';
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
        toast.error('API key limit reached. Change it in the env file and run the repo locally. Or contact me :)');
        history.push('/error');
      }
      if (response.data.detail === 'Not Found') {
        dispatch({
          type: actionName,
          payload: 'Not found',
        });
      } else {
        dispatch({
          type: actionName,
          payload: response.data,
        });
      }
    })
    .catch(() => {
      history.push('/error');
    })
    .then(() => {
      dispatch({ type: LoadingActionsType.SET_LOADING, payload: false });
    });
};
