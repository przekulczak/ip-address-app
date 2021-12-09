import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersLocation } from '../../../actions/location';
import { ApplicationState } from '../../../reducers';
import Spinner from '../../Common/Spinner';
import { StyledContainer } from './styledContainer';

const Container: FC = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersLocation());
  }, []);
  const loading = useSelector((state: ApplicationState) => state.loading.loading);
  const currentContent = loading ? <Spinner /> : children;
  return <StyledContainer>{currentContent}</StyledContainer>;
};

export default Container;
