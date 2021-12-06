import Container from '../../components/Layout/Container';
import AllSearches from './AllSearches';
import RecentSearches from './RecentSearches';

const Dashboard = () => (
  <Container>
    <AllSearches />
    <RecentSearches />
  </Container>
);

export default Dashboard;
