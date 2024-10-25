"use client";
import React from 'react';
import { StyledButton } from './ButtonStyles';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string; 
  focusColor?: string; 
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  onClick,
  children,
  bgColor,
  textColor,
  hoverColor, 
  focusColor, 
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      bgColor={bgColor}
      textColor={textColor}
      hoverColor={hoverColor} 
      focusColor={focusColor} 
    >
      {children}
    </StyledButton>
  );
};

export default Button;


