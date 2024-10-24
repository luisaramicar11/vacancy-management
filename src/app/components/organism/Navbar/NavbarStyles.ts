import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
`;

export const ButtonGroup = styled.div`
display: flex;
border-radius: 3rem;
gap: 0; 
background-color:${({ theme }) => theme.colors.bgInactiveTabs};
`;