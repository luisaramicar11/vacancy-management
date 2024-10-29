"use client";
import React from 'react';
import Card from '../../molecules/Cards/CardJob'; 
import { CardsContainer } from "./ContainerStyles";
import { IVacant } from "../../../../models/vacant.model";

interface ICardProps {
  data: IVacant;
}

const handleDelete = () => {
  console.log(`Deleted job with id: `);
};

const handleEdit = () => {
  console.log(`Edited job with id:`);
};

const CardsGrid = ({data}: ICardProps) => {
  return (
    <CardsContainer>
      {data.content.map((job) => (
        <Card
          key={job.id}
          title={job.title}
          description={job.description}
          status={job.status}
          company={job.company.name}
          onDelete={() => handleDelete()}  
          onEdit={() => handleEdit()}   
        />
      ))}
    </CardsContainer>
  );
};

export default CardsGrid;
