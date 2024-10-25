import styled from 'styled-components';

export const StyledInput = styled.input<{ outlineColor?: string }>`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textBlack};
  border-radius: 0.5rem;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  height:3rem;
  padding: 10px;
  background: transparent; 
  &::placeholder {
    opacity: 0.7;
  }
  &:hover {
    outline-offset: -5px;
  outline: 1px solid ${({ outlineColor }) => outlineColor || 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.textMediumGray};
  }
`;