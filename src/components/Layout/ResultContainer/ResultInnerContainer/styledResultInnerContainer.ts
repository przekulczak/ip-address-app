import styled from 'styled-components';
import { variables } from '../../../../styleConfig/variables';

export const StyledResultInnerContainer = styled.div<{ flex?: string; height?: string }>`
  background: ${variables.colorBackgroundBox};
  flex: ${(props) => props.flex || 1};
  padding: ${variables.mainSpacing};
  margin: ${variables.mainSpacing};
`;
