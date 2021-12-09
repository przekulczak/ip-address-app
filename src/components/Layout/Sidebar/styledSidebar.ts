import styled from 'styled-components';
import { variables } from '../../../styleConfig/variables';

export const StyledSidebar = styled.aside`
  height: 100%;
  flex: 2;
  background: ${variables.colorBackgroundBox};
  display: flex;
  flex-direction: column;
  margin: ${variables.mainSpacing};
  border-radius: ${variables.borderRadius};
  padding: ${variables.mainSpacing};
`;
