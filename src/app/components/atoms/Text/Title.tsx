"use client";
import React from 'react';
import { TitleStyled } from './TitleStyles';

interface TitleProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'xlarge'; // Tamaño del título
  className?: string; // Para estilos adicionales
}

const Title: React.FC<TitleProps> = ({
  children,
  size = 'medium',
  className,
}) => {
  return (
    <TitleStyled size={size} className={className}>
      {children}
    </TitleStyled>
  );
};

export default Title;