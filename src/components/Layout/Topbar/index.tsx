import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { triggerMenu } from '../../../actions/menu';
import { StyledTopbar, StyledTopbarButton } from './styledTopbar';

const Topbar: FC = () => {
  const dispatch = useDispatch();
  const handleButtonClick = () => dispatch(triggerMenu());
  return (
    <StyledTopbar>
      <StyledTopbarButton onClick={handleButtonClick}>History</StyledTopbarButton>
    </StyledTopbar>
  );
};

export default Topbar;
