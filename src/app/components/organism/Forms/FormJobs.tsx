"use client";
import React, { useEffect, useState } from "react";
import Title from "../../atoms/Text/Title";
import InputField from "../../molecules/InputField/InputField";
import TextAreaField from "../../molecules/TextAreaField/TextAreaField";
import SelectField from "../../molecules/SelectField/SelectField";
import Button from "../../atoms/Button/Form/Button";
import { FormContainer } from "./FormStyles";
import { useTheme } from 'styled-components';
import {  IBasicVacant } from "../../../../models/vacant.model";
import { useRouter } from "next/navigation";
import { IContent } from "../../../../models/company.model"
import { CompanyService} from "../../../../services/company.service";
import { VacantService } from "../../../../services/vacants.service"

const initialForm: IBasicVacant = {
  title: "",
  description: "",
  status: "",
  companyId: "",
};

const AddJobForm = () => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState<string>("");
  const [ companies, setCompanies] = useState<IContent[]>([])

  console.log(error)
  const theme = useTheme(); 
  const router = useRouter();

  const vacantService = new VacantService();
  const companyService = new CompanyService();
   useEffect(()=>{
    const fetchCompanies = async () => {
      try {
        const response = await companyService.findAll();
        setCompanies(response || []);
      } catch (error) {
        console.log(error);
        setCompanies([])
      }
      
    }
    fetchCompanies();
  }, []);

  console.log(companies)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await vacantService.create(form)
      console.log("Vacant created")
      router.refresh();
      setForm(initialForm)
    } catch (error) {
      console.log(error)
    }
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
        id="status"
        onChange={handleChange}
        name="status"
        required
        ariaLabel="Seleccione el estado de la vacante"
        placeholder="Selecciona el estado de la vacante" 
        value={form.status}
        options={[
          { value: "ACTIVE", label: "ACTIVE" },
          { value: "INACTIVE", label: "INACTIVE" },
        ]}
        outlineColor={theme.colors.buttonPurple}
      />

      <SelectField
        labelText="Compañía"
        id="companyId"
        onChange={handleChange}
        name="companyId"
        required
        placeholder="Seleccione la compañía"
        ariaLabel="Seleccione la compañía"
        value={form.companyId}
        options={companies.length > 0 ? companies.map(company => ({
          value: company.id,
          label: company.name,
        })): []}
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
