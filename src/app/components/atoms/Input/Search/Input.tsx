"use client";
import React from "react";
import { FaSearch } from 'react-icons/fa';
import { StyledInput, ContainerSearch, IconSearch } from "./InputStyles";
import { useTheme } from 'styled-components';

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  value?: string | number;
  onChange?: (value: string) => void; 
  disabled?: boolean;
  name: string;
  required?: boolean;
  autoComplete?: string;
}

const InputSearch: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  disabled,
  name,
  required = false,
  autoComplete,
}) => {

  const theme = useTheme();

  return (
    <ContainerSearch>
      <IconSearch color={theme.colors.textLightGray}>
        <FaSearch />
      </IconSearch>
      <StyledInput
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e)=> onChange?.(e.target.value)}
        disabled={disabled}
        name={name}
        required={required}
        autoComplete={autoComplete}
      />
    </ContainerSearch>
  );
};

export default InputSearch;

