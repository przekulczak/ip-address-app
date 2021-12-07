import { Dispatch } from 'redux';
import axiosInstance from './axiosConfig';

export interface GetDataType {
  dispatch: Dispatch;
  loadingAction: string;
  actionName: string;
  url: string;
}

export const getData = ({ dispatch, loadingAction, actionName, url }: GetDataType) => {
  console.log('HEHE');
  dispatch({ type: loadingAction, payload: true });
  axiosInstance(`/${url}`)
    .then((response: any) => {
      dispatch({
        type: actionName,
        payload: response.data,
      });
    })
    .catch((response: any) => {
      console.log(response);
    })
    .then(() => {
      dispatch({ type: loadingAction, payload: false });
    });
};
