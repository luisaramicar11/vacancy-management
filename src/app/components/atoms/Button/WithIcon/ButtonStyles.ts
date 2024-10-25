import styled from 'styled-components';

export const StyledButton = styled.button<{ bgColor?: string; textColor?: string; bgColorHover?: string; width?: string | number; borderRadius?: string | number }>`
  padding: 15px;
  color: ${({ textColor, theme }) => textColor || theme.colors.bgGradient};
  border-radius: ${({ borderRadius }) => (borderRadius ? (typeof borderRadius === 'number' ? `${borderRadius}%` : borderRadius) : '3rem')}; 
  font-size: 0.9rem;
  font-weight: 500;
  width: ${({ width }) => (width ? (typeof width === 'number' ? `${width}px` : width) : '8rem')}; 
  height: 2.5rem; 
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.bgInactiveTabs};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ bgColorHover, theme }) => bgColorHover || theme.colors.textWhite};
  }
`;
