import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { variables } from '../../../styleConfig/variables';

export const StyledLink = styled(Link)`
  color: ${variables.colorAccent};
  margin: ${variables.mainSpacing} 0;

  :hover {
    text-decoration: underline;
  }
`;
