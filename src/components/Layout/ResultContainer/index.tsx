import { FC } from 'react';
import { StyledResultContainer } from './styledResultContainer';

const InnerContainer: FC = ({ children }) => <StyledResultContainer>{children}</StyledResultContainer>;

export default InnerContainer;
