import { useSelector } from 'react-redux';
import ResultInnerContainer from '../../../../../components/Layout/ResultContainer/ResultInnerContainer';
import TextData from '../../../../../components/Common/TextData';
import { ApplicationState } from '../../../../../reducers/types';
import { LocationResponse } from '../../../../../types/locationType';

const SearchResult = () => {
  const searchLocationData = useSelector(
    (state: ApplicationState) => state.location.searchLocation,
  ) as LocationResponse;
  return (
    <ResultInnerContainer flex="3">
      <TextData locationData={searchLocationData!} header={searchLocationData!.ip} />
    </ResultInnerContainer>
  );
};

export default SearchResult;
