"use client";
import React, {useState} from 'react';
import Card from '../../molecules/Cards/CardJob'; 
import { CardsContainer } from "./ContainerStyles";
import { IContentVacant, IVacant } from "../../../../models/vacant.model";
//import {  VacantService } from "../../../../services/vacants.service"
import Modal from "../Modals/ModalJobs"
interface ICardProps {
  data: IVacant;
}

const CardsGrid = ({data}: ICardProps) => {
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [ selectVacant, setSelectVacant] = useState<IContentVacant | null>(null);

  //const vacantService = new VacantService();
  //const router = useRouter();

  const handleDelete = () => {
    console.log(`Deleted job with id: `);
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
          onDelete={() => handleDelete()}  
          onEdit={() => handleEdit(job)}   
        />
      ))}
    </CardsContainer>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} vacant={selectVacant} />
    </>
    
  );
};

export default CardsGrid;
