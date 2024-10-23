import React from 'react';
import {StyledButton} from './ButtonStyles';
import Icon from '../../Icons/Icon';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode; // Texto del botón
    icon?: React.ReactNode; 
    iconColor?: string;
    // Componente de ícono opcional
  };
  
  const Button: React.FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    onClick,
    children,
    icon,
    iconColor,
  }) => {
    return (
      <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
        {icon && <Icon color={iconColor}>{icon}</Icon>} 
      </StyledButton>
    );
  };
  
  export default Button;