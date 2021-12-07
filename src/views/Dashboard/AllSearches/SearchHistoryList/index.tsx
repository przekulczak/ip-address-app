import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../../reducers';
import StyledHistoryListItem from './SearchHistoryListItem';

const SearchHistoryList: FC = () => {
  const searchHistory = useSelector((state: ApplicationState) => state.history.history);
  const list = searchHistory.map((query: string) => <StyledHistoryListItem query={query} key={uuidv4()} />);
  return <>{list}</>;
};

export default SearchHistoryList;