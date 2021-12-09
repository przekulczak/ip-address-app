import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Header from '../../../../components/Common/Header';
import {
  StyledSearchForm,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchIcon,
  StyledLabel,
} from './styledSearchForm';
import { SearchReqType } from '../../../../types/searchReqType';
import { addToHistory } from '../../../../actions/history';
import { searchLocation } from '../../../../actions/location';
import SearchContainer from '../../../../components/Layout/SearchContainer';

const Search = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  // TO DO MOVE TO HOOK
  const onSubmit = (data: SearchReqType) => {
    const { search } = data;
    dispatch(addToHistory(search));
    dispatch(searchLocation(search));
  };
  const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
  const urlRegex =
    /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  const validation = (value: string) => ipRegex.test(value) || urlRegex.test(value);

  return (
    <SearchContainer>
      <StyledLabel>Search</StyledLabel>
      <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
        <StyledSearchInput
          {...register('search', {
            // validate: validation,
          })}
        />
        <StyledSearchButton type="button">
          <StyledSearchIcon />
        </StyledSearchButton>
      </StyledSearchForm>
    </SearchContainer>
  );
};

export default Search;
