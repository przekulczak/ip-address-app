import { FC } from 'react';
import Header from '../../../components/Common/Header';
import SearchHistoryList from './SearchHistoryList';
import Sidebar from '../../../components/Layout/Sidebar';

const AllSearches: FC = () => (
  <Sidebar>
    <Header text="History" />
    <SearchHistoryList />
  </Sidebar>
);

export default AllSearches;
