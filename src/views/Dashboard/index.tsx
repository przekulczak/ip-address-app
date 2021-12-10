import { FC } from 'react';
import Container from '../../components/Layout/Container';
import Topbar from '../../components/Layout/Topbar';
import AllSearches from './AllSearches';
import RecentSearches from './RecentSearches';

const Dashboard: FC = () => (
  <>
    <Topbar />
    <Container>
      <AllSearches />
      <RecentSearches />
    </Container>
  </>
);

export default Dashboard;
