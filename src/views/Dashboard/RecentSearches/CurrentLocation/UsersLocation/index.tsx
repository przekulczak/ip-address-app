import { FC } from 'react';
import { useSelector } from 'react-redux';
import TextData from '../../../../../components/Common/TextData';
import ResultInnerContainer from '../../../../../components/Layout/ResultContainer/ResultInnerContainer';
import { ApplicationState } from '../../../../../reducers';

const UsersLocation: FC = () => {
  const usersLocationData = useSelector((state: ApplicationState) => state.location.usersLocation);
  return (
    <ResultInnerContainer flex="3">
      <TextData locationData={usersLocationData!} header="Your data" />
    </ResultInnerContainer>
  );
};

export default UsersLocation;
