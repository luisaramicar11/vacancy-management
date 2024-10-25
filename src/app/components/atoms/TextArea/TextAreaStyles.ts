import styled from "styled-components";

export const TextAreaStyled = styled.textarea<{ outlineColor?: string }>`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textBlack};
  background: transparent;
  border-radius: 0.5rem;
  font-size: 16px;
  width: 100%;
  height: 100px; 
  box-sizing: border-box;
  resize: none;
  &::placeholder {
    opacity: 0.7;
  } 
  &:hover {
    outline-offset: -5px;
  outline: 1px solid ${({ outlineColor }) => outlineColor || 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.textMediumGray};
  }
`;