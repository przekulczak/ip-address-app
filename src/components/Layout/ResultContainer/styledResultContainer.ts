import styled from 'styled-components';
import { device } from '../../../styleConfig/queryBreakpoints';
import { variables } from '../../../styleConfig/variables';

export const StyledResultContainer = styled.section`
  display: flex;
  background: ${variables.colorBackgroundBox};
  padding: ${variables.mainSpacing};
  border-radius: ${variables.mainSpacing};
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
