"use client";
import React from 'react';
import Card from '../../molecules/Cards/CardCompany'; 
import { CardsContainer } from "./ContainerStyles";
import { ICompany, IContent } from "../../../../models/company.model";
import { useState } from "react";
import  Modal  from "../Modals/ModalCompany"
import { CompanyService } from '@/services/company.service';
import { useRouter } from "next/navigation";
interface ICardProps {
  data: ICompany;
}

const CardsGrid = ({data}: ICardProps) => {
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ selectedCompany, setSelectedCompany] = useState<IContent | null>(null);

  const companyService = new CompanyService();
  const router = useRouter();
  
  const handleDelete = async (id: string) => {
    const isConfirmed = confirm("¿Estás seguro que deseas borrar la compañía?");
    if(!isConfirmed) return;
    try {
      await companyService.destroy(id);
      console.log("Compañia eliminada");
      router.refresh();
    } catch (error) {
      console.log("Error al eliminar la compañía", error);
    }
  };

const handleEdit = (company: IContent) => {
  setSelectedCompany(company)
  setIsModalOpen(true);
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedCompany(null);
};
  return (
    <>
    <CardsContainer>
      {data.content.map((company) => (
        <Card
          key={company.id}
          name={company.name}
          location={company.location}
          contact={company.contact}
          onDelete={() => handleDelete(company.id)}  
          onEdit={() => handleEdit(company)}   
        />
      ))}
    </CardsContainer>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} company={selectedCompany} />
    </>
    
  );
};

export default CardsGrid;