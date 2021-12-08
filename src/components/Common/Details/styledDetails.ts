import styled from 'styled-components';
import { variables } from '../../../styleConfig/variables';

export const StyledDetail = styled.div`
  border-bottom: 1px solid ${variables.colorBorder};
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledDetailLabel = styled.p`
  font-weight: 600;
`;
