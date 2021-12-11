import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';
import { variables } from '../../../../styleConfig/variables';

export const StyledSearchForm = styled.form`
  width: 100%;
  display: flex;
  background: ${variables.colorBackgroundBox};
`;

export const StyledSearchButton = styled.button``;

export const StyledSearchInput = styled.input`
  margin-right: ${variables.mainSpacing};
  width: 100%;
`;

export const StyledSearchIcon = styled(SearchAlt)`
  height: 30px;
`;

export const StyledLabel = styled.label`
  padding: ${variables.bigSpacing};
`;

export const ErrorMessage = styled.p`
  margin-top: ${variables.mainSpacing};
  color: ${variables.colorDanger};
`;
