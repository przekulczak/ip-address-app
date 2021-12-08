import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../reducers';
import Spinner from '../../Common/Spinner';
import { StyledContainer } from './styledContainer';

const Container: FC = ({ children }) => {
  const loading = useSelector((state: ApplicationState) => state.loading.loading);
  return (
    <StyledContainer>
      {loading && <Spinner />}
      {children}
    </StyledContainer>
  );
};

export default Container;
