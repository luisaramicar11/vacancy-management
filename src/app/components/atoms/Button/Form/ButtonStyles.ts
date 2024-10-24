import styled from 'styled-components';

export const StyledButton = styled.button<{
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;  // Prop para hover
  focusColor?: string;  // Prop para focus
}>`
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
    background-color: ${({ hoverColor, theme }) => hoverColor || theme.colors.buttonPurpleHover};
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid ${({ focusColor, theme }) => focusColor || theme.colors.buttonFocusPurple};
  }
`;
