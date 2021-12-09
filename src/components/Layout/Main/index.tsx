import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../reducers';
import { StyledMain } from './styledMain';

const Main: FC = ({ children }) => {
  const searchLocation = useSelector((state: ApplicationState) => state.location.searchLocation);
  const changeJustification = !!searchLocation;
  return <StyledMain changeJustification={changeJustification}>{children}</StyledMain>;
};

export default Main;
