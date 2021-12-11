import { FC } from 'react';
import ResultContainer from '../../../../components/Layout/ResultContainer';
import UsersLocation from './UsersLocation';
import UsersMap from './UsersMap';

const CurrentLocation: FC = () => (
  <ResultContainer>
    <UsersLocation />
    <UsersMap />
  </ResultContainer>
);

export default CurrentLocation;
