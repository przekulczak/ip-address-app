import { useSelector } from 'react-redux';

import ResultContainer from '../../../../components/Layout/ResultContainer';
import { ApplicationState } from '../../../../reducers/types';
import SearchMap from './SearchMap';
import SearchResult from './SearchResult';

const CurrentSearch = () => {
  const searchLocation = useSelector((state: ApplicationState) => state.location.searchLocation);
  if (!searchLocation) return null;
  return (
    <ResultContainer>
      <SearchResult />
      <SearchMap />
    </ResultContainer>
  );
};

export default CurrentSearch;
