import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 0.7rem;
  padding: 16px 40px; 
  border-radius: 3rem;
  border: 3px solid ${({ theme }) => theme.colors.borderGray};
  background-color: ${({ theme }) => theme.colors.bgWhite};
  color: ${({ theme }) => theme.colors.textMediumGray};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLightGray};
  }
`;

export const ContainerSearch = styled.div`
  position: relative;
`;

export const IconSearch = styled.div<{ color: string }>` 
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: ${({ color }) => color}; 
  font-size: 1rem;
`;
