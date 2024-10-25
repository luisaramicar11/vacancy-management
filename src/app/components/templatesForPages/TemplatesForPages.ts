// CompanyManagmentTemplateStyles.ts
import styled from 'styled-components';

export const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:3rem;
  justify-content: space-between; /* Asegura que la paginación quede abajo */
`;

export const ContentWrapper = styled.div`
  flex-grow: 1; /* Hace que el contenido principal crezca para ocupar el espacio disponible */
  display: flex;
  flex-direction: column;
  gap: 2rem; /* Espacio uniforme entre los elementos */
`;

