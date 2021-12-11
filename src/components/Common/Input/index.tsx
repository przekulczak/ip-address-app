import { FC } from 'react';
import { StyledInput } from './styledInput';

interface Props {
  register: any;
  name: string;
}

const Input: FC<Props> = ({ register, name }: Props) => <StyledInput {...register(name)} />;

export default Input;
