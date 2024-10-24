import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import Button from '../../atoms/Button/Card/Button'; 
import { ButtonContainer } from "./ButtonsCardStyles"

interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onDelete }) => {
  return (
    <ButtonContainer>
      <Button 
        onClick={onEdit} 
        textColorIcon="theme.colors.buttonPurple" 
        textHoverColorIcon="theme.colors.buttonPurpleHover"
        textColor="theme.colors.buttonPurple"
        bgColor="transparent"
        icon={<FaEdit />}
      />
      <Button 
        onClick={onDelete} 
        textColorIcon="theme.colors.buttonRedText" 
        textHoverColorIcon="theme.colors.buttonRedTextHover"
        textColor="theme.colors.buttonRedText"
        bgColor="theme.colors.buttonRedBgHover"
        icon={<FaTrash />}
      />
    </ButtonContainer>
  );
};

export default ActionButtons;
