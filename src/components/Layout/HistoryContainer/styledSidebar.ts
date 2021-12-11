import styled from 'styled-components';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { device } from '../../../styleConfig/queryBreakpoints';
import { variables } from '../../../styleConfig/variables';

export const StyledHistoryContainer = styled.aside<{ isOpened: boolean }>`
  flex: 2;
  background: ${variables.colorBackgroundBox};
  display: ${(props) => (props.isOpened ? 'flex' : 'none')};
  flex-direction: column;
  padding: ${variables.biggerSpacing} ${variables.bigSpacing};
  border-radius: ${variables.borderRadius};
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  top: 0;
  left: 0;
  @media ${device.laptop} {
    display: flex;
    width: auto;
    height: auto;
    position: relative;
    margin: ${variables.bigSpacing} ${variables.mainSpacing};
  }
`;

export const StyledHistoryContainerTopWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledHistoryContainerCloseIcon = styled(CloseOutline)`
  height: 2rem;
  color: ${variables.colorAccent};
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
`;
