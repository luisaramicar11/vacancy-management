import styled from 'styled-components';

export const StyledInput = styled.input`
  display: flex;
  justify-content: left;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textLightGray};
  border-radius: 2rem;
  font-size: 16px;
  box-sizing: border-box;
  width: 3rem;
  height:1rem;
  padding: 10px;
  margin-bottom: 1rem;
  background: transparent;
  
  &::placeholder {
    opacity: 0.7;
  }
`;