import { useSelector } from 'react-redux';
import TextData from '../../../../components/Common/TextData';
import { ApplicationState } from '../../../../reducers';

const SearchResult = () => {
  const searchLocationData = useSelector((state: ApplicationState) => state.location.searchLocation);
  return <TextData locationData={searchLocationData!} />;
};

export default SearchResult;
