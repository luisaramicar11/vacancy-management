"use client";
import React, { useState } from "react";
import Title from "../../atoms/Text/Title";
import InputField from "../../molecules/InputField/InputField";
import Button from "../../atoms/Button/Form/Button";
import { FormContainer } from "./FormStyles";
import { useTheme } from 'styled-components';

const initialForm = {
  name: "",
  location: "",
  contact: "",
};

const AddCompanyForm: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario:", form);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title size="large">Agregar Compañia</Title>

      <InputField
        labelText="Nombre"
        id="name"
        type="text"
        placeholder="Nombre de la compañia"
        value={form.name}
        onChange={handleChange}
        name="name"
        required
        outlineColor={theme.colors.buttonPink}
      />

      <InputField
        labelText="Ubicación"
        id="location"
        type="text"
        placeholder="Nombre de la ubicación"
        value={form.location}
        onChange={handleChange}
        name="location"
        required
        outlineColor={theme.colors.buttonPink}
      />

      <InputField
        labelText="Contacto"
        id="contact"
        type="text"
        placeholder="Nombre del contacto"
        value={form.contact}
        onChange={handleChange}
        name="contact"
        required
        outlineColor={theme.colors.buttonPink}
      />

      <Button
        type="submit"
        bgColor={theme.colors.buttonPink}
        textColor={theme.colors.textWhite}
        hoverColor={theme.colors.buttonPinkHover}
        focusColor={theme.colors.buttonFocusPink}
      >
        Agregar
      </Button>
    </FormContainer>
  );
};

export default AddCompanyForm;
