import { useSelector } from 'react-redux';
import TextData from '../../../../components/Common/TextData';
import { ApplicationState } from '../../../../reducers';

const UsersLocation = () => {
  const usersLocationData = useSelector((state: ApplicationState) => state.location.usersLocation);
  return <TextData locationData={usersLocationData!} />;
};

export default UsersLocation;
