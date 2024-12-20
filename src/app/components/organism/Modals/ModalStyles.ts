import styled from 'styled-components';

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.bgWhite};
  width: 30%;
  padding: 24px;
  margin: 10% auto;
  border-radius: 8px;
  position: relative;
`;

