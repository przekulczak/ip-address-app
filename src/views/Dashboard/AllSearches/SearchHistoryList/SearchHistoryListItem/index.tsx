import { useDispatch } from 'react-redux';
import { StyledHistoryListItem } from './styledHistoryListItem';

interface Props {
  query: string;
}

const SearchHistoryListItem = ({ query }: Props) => {
  const dispatch = useDispatch();
  return <StyledHistoryListItem>{query}</StyledHistoryListItem>;
};

export default SearchHistoryListItem;
