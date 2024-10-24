import React from 'react';
import Title from '../../atoms/Text/Title';
import Paragraph from '../../atoms/Parragraph/Parragraph';
import ActionButtons from '../ButtonsCard/ButtonsCard';
import { CardContainer } from './CardStyles';

interface CardProps {
  name: string;
  location: string;
  contact: string;
  onEdit: () => void;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ name, location, contact, onEdit, onDelete }) => {
  return (
    <CardContainer>
      <Title size="medium">{name}</Title>
      <Paragraph size="small">{location}</Paragraph>
      <Paragraph size="small">{contact}</Paragraph>
      <ActionButtons onEdit={onEdit} onDelete={onDelete} />
    </CardContainer>
  );
};

export default Card;