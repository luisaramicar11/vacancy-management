import styled, { css } from 'styled-components';

const sizeStyles = {
  small: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  medium: css`
    font-size: 24px;
    line-height: 1.5;
  `,
  large: css`
    font-size: 32px;
    line-height: 1.5;
  `,
};

export const TitleStyled = styled.h1<{ size: 'small' | 'medium' | 'large'}>`
  margin: 0;
  font-weight: bold;
  ${({ size }) => sizeStyles[size]};
  color: ${({ theme }) => theme.colors.textBlack};
`;
