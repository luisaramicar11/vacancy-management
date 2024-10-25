"use client";
import React from "react";
import {TextAreaStyled} from "./TextAreaStyles"

interface TextAreaProps {
  id:string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number; 
  autoComplete?: string;
  outlineColor?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  value,
  onChange,
  className,
  disabled,
  ariaLabel,
  name,
  placeholder,
  required = false,
  maxLength = 200, 
  autoComplete,
  outlineColor
}) => {
  return (
    <TextAreaStyled
      id={id}
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      name={name}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength} 
      autoComplete={autoComplete}
      outlineColor={outlineColor}
    />
  );
};

export default TextArea;