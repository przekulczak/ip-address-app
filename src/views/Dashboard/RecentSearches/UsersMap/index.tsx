import { useSelector } from 'react-redux';
import Map from '../../../../components/Common/Map';
import Spinner from '../../../../components/Common/Spinner';
import { ApplicationState } from '../../../../reducers';

const UsersMap = () => {
  const position = useSelector((state: ApplicationState) => state.location.usersLocation);
  const latLng = [position?.latitude || 0, position?.longitude || 0] as [number, number];
  return <Map position={latLng} />;
};

export default UsersMap;
