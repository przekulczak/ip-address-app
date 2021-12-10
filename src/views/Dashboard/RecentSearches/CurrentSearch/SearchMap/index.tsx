import { useSelector } from 'react-redux';
import ResultInnerContainer from '../../../../../components/Layout/ResultContainer/ResultInnerContainer';
import Map from '../../../../../components/Common/Map';
import { ApplicationState } from '../../../../../reducers/types';
import { LocationResponse } from '../../../../../types/locationType';

const SearchMap = () => {
  const position = useSelector((state: ApplicationState) => state.location.searchLocation) as LocationResponse;
  const latLng = [position?.latitude || 0, position?.longitude || 0] as [number, number];
  return (
    <ResultInnerContainer flex="10">
      <Map position={latLng} />
    </ResultInnerContainer>
  );
};

export default SearchMap;
