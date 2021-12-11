import styled from 'styled-components';
import { device } from '../../../styleConfig/queryBreakpoints';
import { variables } from '../../../styleConfig/variables';

export const StyledMain = styled.main<{ changeJustification?: boolean }>`
  flex: 10;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.changeJustification ? 'space-between' : 'flex-start')};
  padding: ${variables.smallSpacing};
  background: ${variables.colorBackgroundBox};
  border-radius: ${variables.borderRadius};

  @media ${device.laptop} {
    margin: ${variables.bigSpacing};
    padding: ${variables.bigSpacing};
  }
`;
