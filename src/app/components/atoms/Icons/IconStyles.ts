import styled from 'styled-components';

export const StyledIcon = styled.span<{ textColorIcon?: string; textHoverColorIcon?: string;}>`
  color: ${({ textColorIcon }) => textColorIcon || 'inherit'};
  &:hover {
    color: ${({ textHoverColorIcon }) => textHoverColorIcon || 'inherit'};
  }
`;