"use client";
import React from "react";
import {SelectStyled} from "./SelectStyles";
import Option from '../Option/Option';

interface SelectProps {
  id:string
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
  ariaLabel: string;
  name: string;
  required?: boolean;
  autoComplete?: string;
  options: { value: string; label: string }[];
  outlineColor?: string;
  hidden?: boolean;
  placeholder?: string; 
}

const Select: React.FC<SelectProps> = ({
  id,
  value,
  onChange,
  className,
  disabled,
  ariaLabel,
  name,
  required = false,
  autoComplete,
  options,
  outlineColor,
  placeholder, 
}) => {
  return (
    <SelectStyled
      id={id}
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      name={name}
      required={required}
      autoComplete={autoComplete}
      outlineColor={outlineColor}
    >
      <Option value="" disabled="" >
        {placeholder}
      </Option>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectStyled>
  );
};

export default Select;