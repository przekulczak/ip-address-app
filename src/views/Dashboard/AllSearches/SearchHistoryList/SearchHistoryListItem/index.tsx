import { StyledHistoryListItem } from './styledHistoryListItem';

interface Props {
  query: string;
}

const SearchHistoryListItem = ({ query }: Props) => {
  return <StyledHistoryListItem>{query}</StyledHistoryListItem>;
};

export default SearchHistoryListItem;
