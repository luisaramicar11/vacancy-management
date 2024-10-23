import styled from 'styled-components';

export const StyledIcon = styled.span<{ color?: string }>`
  margin-left: 8px;
  color: ${({ color }) => color || 'inherit'};
`;