import React from 'react';
import {StyledButton} from './ButtonStyles';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode; 
    bgColor?: string; 
    textColor?: string; 
  };
  
  const Button: React.FC<ButtonProps> = ({
    type = 'button',
    disabled = false,
    onClick,
    children,
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
      </StyledButton>
    );
  };
  
  export default Button;