"use client";
import React from 'react';
import Card from '../../molecules/Cards/CardCompany'; 
import { CardsContainer } from "./ContainerStyles";
import { ICompany } from "../../../../models/company.model";
interface ICardProps {
  data: ICompany;
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
      {data.content.map((company) => (
        <Card
          key={company.id}
          name={company.name}
          location={company.location}
          contact={company.contact}
          onDelete={() => handleDelete()}  
          onEdit={() => handleEdit()}   
        />
      ))}
    </CardsContainer>
  );
};

export default CardsGrid;