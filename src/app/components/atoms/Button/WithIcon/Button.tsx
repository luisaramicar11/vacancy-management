import React from 'react';
import {StyledButton} from './ButtonStyles';
import Icon from '../../Icons/Icon';

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode; 
    icon?: React.ReactNode; 
    bgColorHover?: string;
    bgColor?: string; 
    textColorIcon?: string; 
    textColor?: string; 
    hoverColorIcon?: string;
    textHoverColorIcon?: string;
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
    bgColorHover
  }) => {
    return (
      <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        bgColor={bgColor}
        textColor={textColor}
        bgColorHover={bgColorHover}
      >
        {icon && <Icon textColorIcon={textColorIcon} textHoverColorIcon={textHoverColorIcon}>{icon}</Icon>} 
        {children}
      </StyledButton>
    );
  };
  
  export default Button;