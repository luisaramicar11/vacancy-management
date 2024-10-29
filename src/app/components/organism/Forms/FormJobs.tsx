"use client";
import React, { useEffect, useState } from "react";
import Title from "../../atoms/Text/Title";
import InputField from "../../molecules/InputField/InputField";
import TextAreaField from "../../molecules/TextAreaField/TextAreaField";
import SelectField from "../../molecules/SelectField/SelectField";
import Button from "../../atoms/Button/Form/Button";
import { FormContainer } from "./FormStyles";
import { useTheme } from 'styled-components';
import {  IBasicVacant, IContentVacant } from "../../../../models/vacant.model";
import { useRouter } from "next/navigation";
import { IContent } from "../../../../models/company.model"
import { CompanyService} from "../../../../services/company.service";
import { VacantService } from "../../../../services/vacants.service";

interface AddJobFormProps {
  initialData?: IContentVacant | null;
  onClose: () => void;
}

const initialForm: IBasicVacant = {
  title: "",
  description: "",
  status: "",
  companyId: "",
};

const AddJobForm = ({initialData, onClose}: AddJobFormProps) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState<string>("");
  const [ companies, setCompanies] = useState<IContent[]>([])

  console.log(error)
  const theme = useTheme(); 
  const router = useRouter();

  const vacantService = new VacantService();
  const companyService = new CompanyService();
   useEffect(()=>{
    if(initialData){
      setForm({
        title: initialData.title,
        description: initialData.description,
        status: initialData.status,
        companyId: (initialData.id).toString()
      });
    }  
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
  }, [initialData]);

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
      if(initialData){
        await vacantService.update((initialData.id).toString(), form)
        console.log("Vacant updated")
      }else{
        await vacantService.create(form)
        console.log("Vacant created")
      }
      router.refresh();
      setForm(initialForm)
      onClose();
    } catch (error) {
      setError("Error al crear la vacante")
      console.log(error)
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title size="large">{initialData ? "Editar Vacante " : "Agregar Vacante"}</Title>

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
