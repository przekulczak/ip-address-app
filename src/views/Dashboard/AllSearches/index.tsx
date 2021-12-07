import { FC } from 'react';
import SearchHistoryList from './SearchHistoryList';
import Sidebar from '../../../components/Layout/Sidebar';

const AllSearches: FC = () => (
  <Sidebar>
    <SearchHistoryList />
  </Sidebar>
);

export default AllSearches;
