"use client";
import React from 'react';
import { LuPencil } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from '../../atoms/Button/Card/Button'; 
import { ButtonContainer } from "./ButtonsCardStyles"
import { useTheme } from 'styled-components';
interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onEdit, onDelete }) => {
  const theme = useTheme(); 
  return (
    <ButtonContainer>
      <Button 
        onClick={onEdit} 
        textColorIcon={theme.colors.buttonPurple}
        textHoverColorIcon={theme.colors.textWhite}
        textColor={theme.colors.buttonPurple}
        bgColor={theme.colors.buttonPurpleHover}
        icon={<LuPencil />}
      />
      <Button 
        onClick={onDelete} 
        textColorIcon={theme.colors.buttonRedText}
        textHoverColorIcon={theme.colors.buttonRedTextHover}
        textColor={theme.colors.buttonRedText}
        bgColor={theme.colors.buttonRedBgHover}
        icon={<FaRegTrashAlt />}
      />
    </ButtonContainer>
  );
};

export default ActionButtons;
