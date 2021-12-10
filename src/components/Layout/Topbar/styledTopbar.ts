import styled from 'styled-components';
import { device } from '../../../styleConfig/queryBreakpoints';
import { variables } from '../../../styleConfig/variables';

export const StyledTopbar = styled.header`
  height: ${variables.headerHeight};
  padding: ${variables.mainSpacing};
  margin-bottom: ${variables.bigSpacing};
  @media ${device.laptop} {
    display: none;
  }
`;

export const StyledTopbarButton = styled.button`
  background: ${variables.colorAccent};
  padding: ${variables.mainSpacing};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${variables.colorBackgroundBox};
  border: none;
  font-weight: 600;
  border-radius: ${variables.borderRadius};
`;
