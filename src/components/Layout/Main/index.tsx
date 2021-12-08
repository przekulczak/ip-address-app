import { FC } from 'react';
import Spinner from '../../Common/Spinner';
import { StyledMain } from './styledMain';

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
}

const Main: FC<Props> = ({ children, isLoading }: Props) => (
  <StyledMain>{isLoading ? <Spinner /> : children}</StyledMain>
);

export default Main;
