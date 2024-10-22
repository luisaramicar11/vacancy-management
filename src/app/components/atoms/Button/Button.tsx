import React from 'react';
import {StyledButton} from './ButtonStyles';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode; // Texto del botón
    icon?: React.ReactNode; // Componente de ícono opcional
    bgColor?: string; // Color de fondo opcional
    textColor?: string; // Color de texto opcional
  };
  
  const Button: React.FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    onClick,
    children,
    icon,
    bgColor,
    textColor,
  }) => {
    return (
      <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        bgColor={bgColor}
        textColor={textColor}
      >
        {children}
        {icon && <Icon>{icon}</Icon>} {/* Usa el componente de ícono aquí */}
      </StyledButton>
    );
  };
  
  export default Button;