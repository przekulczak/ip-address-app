import styled from 'styled-components';
import { variables } from '../../../styleConfig/variables';

export const StyledSidebar = styled.aside`
  flex: 2;
  background: ${variables.colorBackgroundBox};
  display: flex;
  flex-direction: column;
  padding: ${variables.bigSpacing};
  margin: ${variables.bigSpacing} ${variables.mainSpacing};
  border-radius: ${variables.borderRadius};
`;
