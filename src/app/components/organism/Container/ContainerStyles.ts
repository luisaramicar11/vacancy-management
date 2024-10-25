import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Cambia a auto-fit para ser más responsivo */
  gap: 20px; 
  margin: 16px auto; 
  padding: 20px;
  width: 100%; /* Asegura que ocupe el 100% del contenedor */
  box-sizing: border-box; /* Para evitar problemas de tamaño con padding y borders */
`;
