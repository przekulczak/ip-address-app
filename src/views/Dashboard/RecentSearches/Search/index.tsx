import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { StyledSearchForm, StyledSearchButton } from './styledSearchForm';
import { SearchReqType } from '../../../../types/searchReqType';
import { addToHistory } from '../../../../actions/history';
import { searchLocation } from '../../../../actions/location';

const Search = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  // TO DO MOVE TO HOOK
  const onSubmit = (data: SearchReqType) => {
    console.log('SUBMIT');
    const { search } = data;
    dispatch(addToHistory(search));
    dispatch(searchLocation(search));
  };
  const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
  const urlRegex =
    /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  const validation = (value: string) => ipRegex.test(value) || urlRegex.test(value);

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      {console.log('BASE URL', process.env.REACT_APP_BASE_URL)}
      <input
        {...register('search', {
          // validate: validation,
        })}
      />
      <StyledSearchButton type="button">Search</StyledSearchButton>
    </StyledSearchForm>
  );
};

export default Search;
