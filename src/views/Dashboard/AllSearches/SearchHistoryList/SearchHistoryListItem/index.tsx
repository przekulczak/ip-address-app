import { useDispatch } from 'react-redux';
import { searchLocation } from '../../../../../actions/location';
import { StyledHistoryListItem } from './styledHistoryListItem';

interface Props {
  query: string;
}

const SearchHistoryListItem = ({ query }: Props) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(searchLocation(query));
  return (
    <StyledHistoryListItem type="button" onClick={handleClick}>
      {query}
    </StyledHistoryListItem>
  );
};

export default SearchHistoryListItem;
