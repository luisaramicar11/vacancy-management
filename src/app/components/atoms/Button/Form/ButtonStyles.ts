import styled from 'styled-components';

export const StyledButton = styled.button<{ bgColor?: string; textColor?: string }>`
  padding: 15px;
  color: ${({ textColor, theme }) => textColor || theme.colors.bgGradient};
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.textWhite};
  border: none;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`;