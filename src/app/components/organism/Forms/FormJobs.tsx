"use client";
import React, { useState } from "react";
import Title from "../../atoms/Text/Title";
import InputField from "../../molecules/InputField/InputField";
import TextAreaField from "../../molecules/TextAreaField/TextAreaField";
import SelectField from "../../molecules/SelectField/SelectField";
import Button from "../../atoms/Button/Form/Button";
import { FormContainer } from "./FormStyles";
import { useTheme } from 'styled-components';

const initialForm = {
  title: "",
  description: "",
  state: "",
  company: "",
};

const AddJobForm: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const theme = useTheme();  

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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
      <Title size="large">Agregar Vacante</Title>

      <InputField
        labelText="Título"
        id="title"
        type="text"
        placeholder="Título de la vacante"
        value={form.title}
        onChange={handleChange}
        name="title"
        required
        outlineColor={theme.colors.buttonPurple}
      />

      <TextAreaField
        labelText="Descripción"
        id="description"
        value={form.description}
        onChange={handleChange}
        name="description"
        required
        placeholder="Descripción de la vacante"
        ariaLabel="Campo para ingresar la descripción"
        outlineColor={theme.colors.buttonPurple}
      />

      <SelectField
        labelText="Estado"
        id="state"
        value={form.state}
        onChange={handleChange}
        name="state"
        required
        ariaLabel="Seleccione el estado de la vacante"
        placeholder="Selecciona el estado de la vacante" 
        options={[
          { value: "OPEN", label: "OPEN" },
          { value: "CLOSE", label: "CLOSE" },
        ]}
        outlineColor={theme.colors.buttonPurple}
      />

      <SelectField
        labelText="Compañía"
        id="company"
        value={form.company}
        onChange={handleChange}
        name="company"
        required
        placeholder="Seleccione la compañía"
        ariaLabel="Seleccione la compañía"
        options={[
          { value: "company1", label: "Compañía 1" },
          { value: "company2", label: "Compañía 2" },
          { value: "company3", label: "Compañía 3" },
        ]}
        outlineColor={theme.colors.buttonPurple}
      />

      <Button
        type="submit"
        bgColor={theme.colors.buttonPurple}
        textColor={theme.colors.textWhite}
        hoverColor={theme.colors.buttonPurpleHover}
        focusColor= {theme.colors.buttonFocusPurple}
      >
        Agregar
      </Button>
    </FormContainer>
  );
};

export default AddJobForm;
