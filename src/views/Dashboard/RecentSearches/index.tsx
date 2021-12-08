import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersLocation } from '../../../actions/location';
import Main from '../../../components/Layout/Main';
import UsersLocation from './UsersLocation';
import SearchResult from './SearchResult';
import UsersMap from './UsersMap';
import SearchMap from './SearchMap';
import Search from './Search';
import { ApplicationState } from '../../../reducers';

const AllSearches: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersLocation());
  }, []);
  const loading = useSelector((state: ApplicationState) => state.location.loadingUsersLocation);
  return (
    <Main isLoading={loading}>
      <Search />
      <UsersLocation />
      <UsersMap />
      <SearchResult />
      <SearchMap />
    </Main>
  );
};

export default AllSearches;
