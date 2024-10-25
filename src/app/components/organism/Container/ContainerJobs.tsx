"use client";
import React from 'react';
import Card from '../../molecules/Cards/CardJob'; 
import { CardsContainer } from "./ContainerStyles";

const mockData = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Build and maintain user interfaces.',
    status: 'Open',
    company: 'TechCorp'
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Develop server-side logic and APIs.',
    status: 'Closed',
    company: 'DataSolutions'
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    description: 'Work on both frontend and backend technologies.',
    status: 'Open',
    company: 'Innovatech'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    description: 'Ensure seamless integration and deployment.',
    status: 'Open',
    company: 'CloudPro'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    description: 'Ensure seamless integration and deployment.',
    status: 'Open',
    company: 'CloudPro'
  },
  {
    id: 6,
    title: 'DevOps Engineer',
    description: 'Ensure seamless integration and deployment.',
    status: 'Open',
    company: 'CloudPro'
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    description: 'Ensure seamless integration and deployment.',
    status: 'Open',
    company: 'CloudPro'
  },
  {
    id: 8,
    title: 'DevOps Engineer',
    description: 'Ensure seamless integration and deployment.',
    status: 'Open',
    company: 'CloudPro'
  },
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
          title={job.title}
          description={job.description}
          status={job.status}
          company={job.company}
          onDelete={() => handleDelete(job.id)}  
          onEdit={() => handleEdit(job.id)}   
        />
      ))}
    </CardsContainer>
  );
};

export default CardsGrid;
