import styled from 'styled-components';
import { variables } from '../../../styleConfig/variables';

export const StyledDetail = styled.div`
  border-bottom: 1px solid ${variables.colorBorder};
  margin-bottom: ${variables.smallSpacing};
  padding: ${variables.smallSpacing} 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
`;

export const StyledDetailLabel = styled.p`
  font-weight: 600;
`;
