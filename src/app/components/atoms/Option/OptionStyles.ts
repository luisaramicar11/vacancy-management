import styled from "styled-components";

export const OptionStyled = styled.option`
  padding: 1000px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  color: ${({ theme }) => theme.colors.textBlack};
  background: transparent;
  border-radius: 1rem;
  font-size: 1rem;
  width: 450px;
  height: 60px;
  box-sizing: border-box;
`;