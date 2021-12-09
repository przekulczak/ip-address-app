import styled from 'styled-components';
import { variables } from '../../../../../styleConfig/variables';

export const StyledHistoryListItem = styled.button`
  background: transparent;
  margin-bottom: ${variables.mainSpacing};
  cursor: pointer;
  color: ${variables.colorFont};
  padding: ${variables.mainSpacing};
  font-size: 1rem;
  border: none;

  :hover {
    text-decoration: underline;
  }
`;
