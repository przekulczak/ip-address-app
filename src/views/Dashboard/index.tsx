import { FC } from 'react';
import Container from '../../components/Layout/Container';
import AllSearches from './AllSearches';
import RecentSearches from './RecentSearches';

const Dashboard: FC = () => (
  <Container>
    <AllSearches />
    <RecentSearches />
  </Container>
);

export default Dashboard;
