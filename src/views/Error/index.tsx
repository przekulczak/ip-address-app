import { FC } from 'react';
import { StyledLink } from '../../components/Common/Link';
import Header from '../../components/Common/Header';
import Main from '../../components/Layout/Main';

const Error: FC = () => (
  <Main>
    <Header text="Error" />
    Error occured
    <StyledLink to="/">Go back to home page</StyledLink>
  </Main>
);

export default Error;
