import { useForm } from 'react-hook-form';
import Input from '../../../../components/Common/Input';
import { StyledSearchForm, StyledSearchButton } from './styledSearchForm';
import { SearchReqType } from '../../../../types/searchReqType';

const Search = () => {
  const { register, handleSubmit } = useForm();
  // TO DO MOVE TO HOOK
  const onSubmit = (data: SearchReqType) => console.log(data);
  const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
  const urlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  const validation = (value: string) => ipRegex.test(value) || urlRegex.test(value);

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('search', {
          validate: validation,
        })}
      />
      <StyledSearchButton type="button">Search</StyledSearchButton>
    </StyledSearchForm>
  );
};

export default Search;
