"use client";
import React, {useState} from 'react';
import Card from '../../molecules/Cards/CardJob'; 
import { CardsContainer } from "./ContainerStyles";
import { IContentVacant, IVacant } from "../../../../models/vacant.model";
import {  VacantService } from "../../../../services/vacants.service"
import Modal from "../Modals/ModalJobs"
import { useRouter } from "next/navigation";
interface ICardProps {
  data: IVacant;
}

const CardsGrid = ({data}: ICardProps) => {
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ selectVacant, setSelectVacant] = useState<IContentVacant | null>(null);

  const vacantService = new VacantService();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const isConfirmed = confirm("¿Estás seguro que deseas borrar la vacante?");
    if(!isConfirmed) return;
    try {
      await vacantService.destroy(id);
      console.log("Vacante eliminada");
      router.refresh();
    } catch (error) {
      console.log("Error al eliminar la vacante", error);
    }
  };
  
  const handleEdit = (job: IContentVacant) => {
    setSelectVacant(job);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectVacant(null);
  };

  return (
    <>
    <CardsContainer>
      {data.content.map((job) => (
        <Card
          key={job.id}
          title={job.title}
          description={job.description}
          status={job.status}
          company={job.company.name}
          onDelete={() => handleDelete(job.id)}  
          onEdit={() => handleEdit(job)}   
        />
      ))}
    </CardsContainer>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} vacant={selectVacant} />
    </>
    
  );
};

export default CardsGrid;
