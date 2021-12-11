import { useSelector } from 'react-redux';
import ResultContainer from '../../../../components/Layout/ResultContainer';
import { NotFoundContainer } from '../../../../components/Layout/NotFoundContainer';
import { ApplicationState } from '../../../../reducers/types';
import SearchMap from './SearchMap';
import SearchResult from './SearchResult';

const CurrentSearch = () => {
  const searchLocation = useSelector((state: ApplicationState) => state.location.searchLocation);
  if (!searchLocation) return null;
  else if (searchLocation === 'Not found') return <NotFoundContainer>Not found</NotFoundContainer>;
  return (
    <ResultContainer>
      <SearchResult />
      <SearchMap />
    </ResultContainer>
  );
};

export default CurrentSearch;
