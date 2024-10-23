import styled from 'styled-components';

export const StyledInput = styled.input<{ outlineColor?: string }>`
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textBlack};
  border-radius: 1rem;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  height:1rem;
  padding: 10px;
  margin-bottom: 10px;
  background: transparent;
  outline: 2px solid ${({ outlineColor }) => outlineColor || 'transparent'};
  
  &::placeholder {
    opacity: 0.7;
  }
`;