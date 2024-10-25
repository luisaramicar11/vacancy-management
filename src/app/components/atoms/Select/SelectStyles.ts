import styled from "styled-components";

export const SelectStyled = styled.select<{ outlineColor?: string }>`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textBlack};
  background: transparent;
  border-radius: 0.5rem;
  font-size: 16px;
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  &::placeholder {
    opacity: 0.7;
  }
  &:hover {
    outline-offset: -5px;
  outline: 1px solid ${({ outlineColor }) => outlineColor || 'transparent'};
  border: 1px solid ${({ theme }) => theme.colors.textMediumGray};
  }
`;

