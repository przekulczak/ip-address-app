import { FC } from 'react';
import { StyledDetail, StyledDetailLabel } from './styledDetails';

//to do change value type

interface Props {
  label: string;
  value: any;
}

const Details: FC<Props> = ({ label, value }: Props) => (
  <StyledDetail>
    <StyledDetailLabel>{label}:</StyledDetailLabel>
    <p>{value}</p>
  </StyledDetail>
);

export default Details;
