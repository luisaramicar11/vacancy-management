import React from 'react';
import TextArea from '../../atoms/TextArea/TextArea'; // Asegúrate de que tienes el componente TextArea
import LabelForm from '../../atoms/Label/Label';

interface TextAreaFieldProps {
  labelText: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  name: string;
  required?: boolean;
  placeholder?: string;
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
}) => {
  return (
    <div>
      <LabelForm text={labelText} htmlFor={id} />
      <TextArea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaField;
