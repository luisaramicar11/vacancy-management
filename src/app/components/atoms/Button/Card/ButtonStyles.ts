import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 15px;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
  }
`;