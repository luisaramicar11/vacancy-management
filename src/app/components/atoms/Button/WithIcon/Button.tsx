"use client";
import React from 'react';
import { StyledButton } from './ButtonStyles';
import Icon from '../../Icons/Icon';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode; 
  icon?: React.ReactNode; 
  bgColorHover?: string;
  bgColor?: string; 
  textColorIcon?: string; 
  textColor?: string; 
  hoverColorIcon?: string;
  textHoverColorIcon?: string;
  width?: string | number; 
  borderRadius?: string | number;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  disabled = false,
  onClick,
  children,
  icon,
  bgColor,
  textColor,
  textColorIcon,
  textHoverColorIcon,
  bgColorHover,
  width,
  borderRadius 
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      bgColor={bgColor}
      textColor={textColor}
      bgColorHover={bgColorHover}
      width={width} 
      borderRadius={borderRadius}  
    >
      {icon && <Icon textColorIcon={textColorIcon} textHoverColorIcon={textHoverColorIcon}>{icon}</Icon>} 
      {children}
    </StyledButton>
  );
};

export default Button;
