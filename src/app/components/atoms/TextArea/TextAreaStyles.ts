import styled from "styled-components";

export const TextAreaStyled = styled.textarea<{ outlineColor?: string }>`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textBlack};
  background: transparent;
  border-radius: 1rem;
  font-size: 16px;
  width: 100%;
  height: 90px; 
  box-sizing: border-box;
  resize: none;
  outline: 2px solid ${({ outlineColor }) => outlineColor || 'transparent'};
  &::placeholder {
    opacity: 0.7;
  } 
`;