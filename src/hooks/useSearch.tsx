import { useDispatch } from 'react-redux';
import validator from 'validator';
import { addToHistory } from '../actions/history';
import { searchLocation } from '../actions/location';
import { SearchReqType } from '../types/searchReqType';

export const useSearch = () => {
  const dispatch = useDispatch();
  const onSubmit = (data: SearchReqType) => {
    const { search } = data;
    dispatch(addToHistory(search));
    dispatch(searchLocation(search));
  };
  const validation = (value: string) =>
    validator.isURL(value, { protocols: [], require_protocol: false }) || validator.isURL(value);
  return { onSubmit, validation };
};
