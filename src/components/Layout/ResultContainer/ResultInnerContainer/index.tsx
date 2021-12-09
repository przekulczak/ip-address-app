import { FC } from 'react';
import { StyledResultInnerContainer } from './styledResultInnerContainer';

interface Props {
  children: React.ReactNode;
  flex?: string;
}

const ResultInnerContainer: FC<Props> = ({ children, flex }) => (
  <StyledResultInnerContainer flex={flex}>{children}</StyledResultInnerContainer>
);

export default ResultInnerContainer;
