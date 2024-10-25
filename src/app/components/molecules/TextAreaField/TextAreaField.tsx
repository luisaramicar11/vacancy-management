"use client";
import React from 'react';
import TextArea from '../../atoms/TextArea/TextArea'; // Asegúrate de que tienes el componente TextArea
import LabelForm from '../../atoms/Label/Label';
import { TextAreaFieldContainer } from "./TextAreaFieldStyles";

interface TextAreaFieldProps {
  labelText: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  name: string;
  required?: boolean;
  placeholder?: string;
  outlineColor?: string; 
  maxLength?: number; 
  autoComplete?: string;  
  ariaLabel: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  labelText,
  id,
  value,
  onChange,
  disabled,
  name,
  required,
  placeholder,
  maxLength = 200, 
  autoComplete,
  outlineColor,
  ariaLabel
}) => {
  return (
    <TextAreaFieldContainer>
      <LabelForm text={labelText} htmlFor={id} />
      <TextArea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength} 
        autoComplete={autoComplete}
        outlineColor={outlineColor}
        ariaLabel={ariaLabel}
      />
    </TextAreaFieldContainer>
  );
};

export default TextAreaField;
