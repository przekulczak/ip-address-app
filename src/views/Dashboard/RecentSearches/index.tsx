import { FC } from 'react';
import Main from '../../../components/Layout/Main';
import CurrentLocation from './CurrentLocation';
import CurrentSearch from './CurrentSearch';
import Search from './Search';

const AllSearches: FC = () => {
  return (
    <Main>
      <CurrentLocation />
      <Search />

      <CurrentSearch />
    </Main>
  );
};

export default AllSearches;
