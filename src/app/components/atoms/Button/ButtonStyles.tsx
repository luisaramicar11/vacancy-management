import styled from 'styled-components';

export const StyledButton = styled.button<{ bgColor?: string; textColor?: string }>`
  padding: 15px;
  color: ${({ textColor, theme }) => textColor || theme.colors.bgGradient};
  border-radius: 1.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  width: 7.5rem;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.textWhite};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 0.9;
  }
`;