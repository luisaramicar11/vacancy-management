import React from 'react';
import Card from '../../molecules/Cards/CardCompany'; 
import { CardsContainer } from "./ContainerStyles";

const mockData = [
  {
    id: 1,
    name: 'Compañia',
    location: 'Cuidad 1.',
    contact: '5555555'
  },
  {
    id: 2,
    name: 'Compañia',
    location: 'Cuidad 1.',
    contact: '5555555'
  },
  {
    id: 3,
    name: 'Compañia',
    location: 'Cuidad 1.',
    contact: '5555555'
  },
  {
    id: 4,
    name: 'Compañia',
    location: 'Cuidad 1.',
    contact: '5555555'
  }
];

const handleDelete = (id: number) => {
    console.log(`Deleted job with id: ${id}`);
  };
  
  const handleEdit = (id: number) => {
    console.log(`Edited job with id: ${id}`);
  };

const CardsGrid: React.FC = () => {
  return (
    <CardsContainer>
      {mockData.map((job) => (
        <Card
          key={job.id}
          name={job.name}
          location={job.location}
          contact={job.contact}
          onDelete={() => handleDelete(job.id)}  
          onEdit={() => handleEdit(job.id)}   
        />
      ))}
    </CardsContainer>
  );
};

export default CardsGrid;