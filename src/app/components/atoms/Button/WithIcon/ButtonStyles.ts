import styled from 'styled-components';

export const StyledButton = styled.button<{ bgColor?: string; textColor?: string, bgColorHover?: string }>`
  padding: 15px;
  color: ${({ textColor, theme }) => textColor || theme.colors.bgGradient};
  border-radius: 3rem;
  font-size: 0.9rem;
  font-weight: bold;
  width: 8rem;
  height: 0.7rem;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.bgInactiveTabs};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0rem;

  &:hover {
    background-color: ${({ bgColorHover, theme }) => bgColorHover || theme.colors.textWhite};
  }
`;