import { useForm } from 'react-hook-form';
import Header from '../../../../components/Common/Header';
import {
  StyledSearchForm,
  StyledSearchButton,
  StyledSearchInput,
  StyledSearchIcon,
  ErrorMessage,
} from './styledSearchForm';
import SearchContainer from '../../../../components/Layout/SearchContainer';
import { useSearch } from '../../../../hooks/useSearch';

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onSubmit, validation } = useSearch();

  return (
    <SearchContainer>
      <Header text="Search" />
      <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
        <StyledSearchInput
          {...register('search', {
            validate: validation,
          })}
        />
        <StyledSearchButton type="button">
          <StyledSearchIcon />
        </StyledSearchButton>
      </StyledSearchForm>
      {errors?.search && (
        <ErrorMessage>Queries in www.*example*.com, *exmaple*.com format and ip addresses are accepted.</ErrorMessage>
      )}
    </SearchContainer>
  );
};

export default Search;
