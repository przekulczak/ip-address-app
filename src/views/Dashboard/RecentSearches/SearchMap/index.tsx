import { useSelector } from 'react-redux';
import Map from '../../../../components/Common/Map';
import { ApplicationState } from '../../../../reducers';

const SearchMap = () => {
  const position = useSelector((state: ApplicationState) => state.location.searchLocation);
  const latLng = [position?.latitude || 0, position?.longitude || 0] as [number, number];
  return <Map position={latLng} />;
};

export default SearchMap;
