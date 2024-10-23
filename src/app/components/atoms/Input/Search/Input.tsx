'use client'
import React from "react";
import { StyledInput } from "./InputStyles"
import Icon from '../../Icons/Icon';

interface InputProps {
  type: string;
  id:string;
  placeholder: string;
  children: React.ReactNode; // Texto del botón
  icon?: React.ReactNode;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; 
  name: string;
  required?: boolean; 
  autoComplete?: string;
}

const InputSearch: React.FC<InputProps> = ({
  type,
  id,
  children,
  icon,
  placeholder,
  value,
  onChange,
  disabled,
  name,
  required = false,
  autoComplete
}) => {
  return (
    <StyledInput type={type}
    id={id}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
    name={name}
    required={required} 
    autoComplete= {autoComplete}>
    {children}
    {icon && <Icon>{icon}</Icon>} 
    </StyledInput>
    
  );
};

export default InputSearch;