import React from 'react';
import Title from '../../atoms/Text/Title';
import Paragraph from '../../atoms/Parragraph/Parragraph';
import ActionButtons from '../ButtonsCard/ButtonsCard';
import { CardContainer } from './CardStyles';

interface CardProps {
  title: string;
  description: string;
  status: string;
  company: string;
  onEdit: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, status, company, onEdit, onDelete }) => {
  return (
    <CardContainer>
      <Title size="medium">{title}</Title>
      <Paragraph size="small">{description}</Paragraph>
      <Paragraph size="small">{status}</Paragraph>
      <Paragraph size="small">{company}</Paragraph>
      <ActionButtons onEdit={onEdit} onDelete={onDelete} />
    </CardContainer>
  );
};

export default Card;
