import { useForm } from 'react-hook-form';
import Input from '../../../../components/Common/Input';
import { StyledSearchForm } from './styledSearchForm';

const Search = () => {
  const { register, handleSubmit } = useForm();

  return (
    <StyledSearchForm>
      <Input register={register} name="search" />
    </StyledSearchForm>
  );
};

export default Search;
