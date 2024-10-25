"use client";
import React from 'react';
import Select from '../../atoms/Select/Select';
import LabelForm from '../../atoms/Label/Label';
import { SelectFieldContainer } from "./SelectFieldStyles"

interface SelectFieldProps {
  labelText: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  name: string;
  required?: boolean;
  outlineColor?: string; 
  ariaLabel: string;
  options: { value: string; label: string }[];
  placeholder?: string; // Nueva prop para personalizar el mensaje por defecto
}

const SelectField: React.FC<SelectFieldProps> = ({
  labelText,
  id,
  value,
  onChange,
  disabled,
  name,
  required,
  ariaLabel,
  options,
  outlineColor,
  placeholder, // Nueva prop para personalizar el mensaje por defecto
}) => {
  return (
    <SelectFieldContainer>
      <LabelForm text={labelText} htmlFor={id} />
      <Select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        required={required}
        ariaLabel={ariaLabel}
        options={options}
        outlineColor={outlineColor}
        placeholder={placeholder} // Pasa el placeholder personalizado aquí
      />
    </SelectFieldContainer>
  );
};


export default SelectField;
