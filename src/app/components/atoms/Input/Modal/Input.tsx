'use client'
import React from "react";
import { StyledInput } from "./InputStyles"

interface InputProps {
  type: string;
  id:string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean; 
  name: string;
  required?: boolean; 
  autoComplete?: string;
  outlineColor?: string;
}

const InputModal: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  disabled,
  name,
  required = false,
  autoComplete,
  outlineColor
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
    autoComplete= {autoComplete}
    outlineColor={outlineColor}>
    </StyledInput>
    
  );
};

export default InputModal;