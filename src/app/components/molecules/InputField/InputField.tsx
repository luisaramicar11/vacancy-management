import React from 'react';
import InputModal from '../../atoms/Input/Modal/Input';
import LabelForm from '../../atoms/Label/Label';
import {InputFieldContainer} from "./InputFieldStyles";

interface InputFieldProps {
  labelText: string;
  id: string;
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name: string;
  required?: boolean;
  autoComplete?: string;
  outlineColor?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  labelText,
  id,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  name,
  required,
  autoComplete,
  outlineColor,
}) => {
  return (
    <InputFieldContainer>
      <LabelForm text={labelText} htmlFor={id} />
      <InputModal
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        required={required}
        autoComplete={autoComplete}
        outlineColor={outlineColor}
      />
    </InputFieldContainer>
  );
};

export default InputField;