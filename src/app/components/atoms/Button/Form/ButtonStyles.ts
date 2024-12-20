import styled from 'styled-components';

export const StyledButton = styled.button<{
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;  
  focusColor?: string;  
}>`
  padding: 15px;
  color: ${({ textColor, theme }) => textColor || theme.colors.bgGradient};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.textWhite};
  border: none;
  text-align: center;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ hoverColor, theme }) => hoverColor || theme.colors.buttonPurpleHover};
    opacity: 0.9;
  }

  &:focus {
    outline: 2px solid ${({ focusColor, theme }) => focusColor || theme.colors.buttonFocusPurple};
  }
`;
