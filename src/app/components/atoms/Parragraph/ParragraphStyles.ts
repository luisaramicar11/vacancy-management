import styled, { css } from 'styled-components';

const sizeStyles = {
  xsmall: css`
    font-size: 12px;
    line-height: 1.5;
  `,
  small: css`
    font-size: 14px;
    line-height: 1.5;
  `,
  medium: css`
    font-size: 16px;
    line-height: 1.5;
  `,
  large: css`
    font-size: 18px;
    line-height: 1.5;
  `,
};

export const ParagraphStyled = styled.p<{ size: 'xsmall' | 'small' | 'medium' | 'large'; color?: string }>`
  margin: 0;
  ${({ size }) => sizeStyles[size]};
  color: ${({ theme }) => theme.colors.textBlack};
`;
