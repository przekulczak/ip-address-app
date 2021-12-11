import { FC } from 'react';
import { StyledDetail, StyledDetailLabel } from './styledDetails';

interface Props {
  label: string;
  value: string | number;
}

const Details: FC<Props> = ({ label, value }: Props) => (
  <StyledDetail>
    <StyledDetailLabel>{label}:</StyledDetailLabel>
    <p>{value}</p>
  </StyledDetail>
);

export default Details;
