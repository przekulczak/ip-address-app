import { FC } from 'react';
import SearchHistoryList from './SearchHistoryList';
import HistoryContainer from '../../../components/Layout/HistoryContainer';

const AllSearches: FC = () => (
  <HistoryContainer>
    <SearchHistoryList />
  </HistoryContainer>
);

export default AllSearches;
