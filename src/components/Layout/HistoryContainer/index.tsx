import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { triggerMenu } from '../../../actions/menu';
import { ApplicationState } from '../../../reducers';
import Header from '../../Common/Header';
import {
  StyledHistoryContainer,
  StyledHistoryContainerTopWrapper,
  StyledHistoryContainerCloseIcon,
} from './styledSidebar';

const HistoryContainer: FC = ({ children }) => {
  const dispatch = useDispatch();
  const isMenuOpened = useSelector((state: ApplicationState) => state.menu.isOpened);
  const handleButtonClick = () => dispatch(triggerMenu());
  return (
    <StyledHistoryContainer isOpened={isMenuOpened}>
      <StyledHistoryContainerTopWrapper>
        <Header text="History" />
        <StyledHistoryContainerCloseIcon onClick={handleButtonClick} />
      </StyledHistoryContainerTopWrapper>
      {children}
    </StyledHistoryContainer>
  );
};

export default HistoryContainer;
