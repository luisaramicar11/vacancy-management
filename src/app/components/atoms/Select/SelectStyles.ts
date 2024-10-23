import styled from "styled-components";

export const SelectStyled = styled.select`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textBlack};
  background: transparent;
  border-radius: 1rem;
  font-size: 16px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
`;

