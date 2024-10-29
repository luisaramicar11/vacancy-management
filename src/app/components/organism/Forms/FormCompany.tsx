"use client";
import React, { useState, useEffect } from "react";
import Title from "../../atoms/Text/Title";
import InputField from "../../molecules/InputField/InputField";
import Button from "../../atoms/Button/Form/Button";
import { FormContainer } from "./FormStyles";
import { useTheme } from 'styled-components';
import { IBasicCompany, IContent } from "../../../../models/company.model";
import {  CompanyService } from "../../../../services/company.service";
import { useRouter } from "next/navigation";
interface AddCompanyFormProps {
  initialData?: IContent | null;
  onClose: () => void;
}

const initialForm: IBasicCompany = {
  name: "",
  location: "",
  contact: "",
};

const AddCompanyForm = ({initialData, onClose}: AddCompanyFormProps) => {
  const [form, setForm] = useState(initialData || initialForm);
  const [error, setError ] = useState<string>("");
  console.log(error);
  const theme = useTheme();
  const router = useRouter();
  const companyService = new CompanyService();

  useEffect(()=>{
    if(initialData){
      setForm({
        name: initialData.name,
        location: initialData.location,
        contact: initialData.contact,
      });
    }
  }, [initialData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      if(initialData){
        await companyService.update(initialData.id, form);
        console.log("Company updated successfully");
      }else{
        await companyService.create(form);
        console.log("Company created successfully");
      }
      router.refresh();
      setForm(initialForm);
      onClose();
    } catch (error) {
      setError("Error al crear la compañía");
      console.log(error);
    }
    
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title size="large">{initialData ? "Editar compañía": "Agregar Compañía"}</Title>

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
        {initialData ? "Editar" : "Agregar"}
      </Button>
    </FormContainer>
  );
}

export default AddCompanyForm;
