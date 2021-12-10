import { v4 as uuidv4 } from 'uuid';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../../../reducers/types';
import StyledHistoryListItem from './SearchHistoryListItem';
import { StyledHistorySearchList, StyledEmptyHistoryIndicatior } from './styledSearchHistoryList';

const SearchHistoryList: FC = () => {
  const searchHistory = useSelector((state: ApplicationState) => state.history.history);
  const isListEmpty = Array.isArray(searchHistory) && searchHistory.length === 0;
  const list = isListEmpty ? (
    <StyledEmptyHistoryIndicatior>Search history is empty</StyledEmptyHistoryIndicatior>
  ) : (
    searchHistory.map((query: string) => <StyledHistoryListItem query={query} key={uuidv4()} />).reverse()
  );
  return <StyledHistorySearchList>{list}</StyledHistorySearchList>;
};

export default SearchHistoryList;
