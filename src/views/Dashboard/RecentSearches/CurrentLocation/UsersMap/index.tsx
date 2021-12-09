import { useSelector } from 'react-redux';
import Map from '../../../../../components/Common/Map';
import ResultInnerContainer from '../../../../../components/Layout/ResultContainer/ResultInnerContainer';
import { ApplicationState } from '../../../../../reducers';

const UsersMap = () => {
  const position = useSelector((state: ApplicationState) => state.location.usersLocation);
  const latLng = [position?.latitude || 0, position?.longitude || 0] as [number, number];
  return (
    <ResultInnerContainer flex="10">
      <Map position={latLng} />
    </ResultInnerContainer>
  );
};

export default UsersMap;
