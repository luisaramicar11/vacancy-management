"use client";
import React from 'react';
import Button from "../../atoms/Button/WithIcon/Button";
import Title from "../../atoms/Text/Title";
import { Container } from "./Sections";
import { useTheme } from 'styled-components'; 
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../../organism/Modals/ModalJobs";
import { useState } from "react";
import { IContentVacant } from '@/models/vacant.model';

interface sectionProps {
  vacant: IContentVacant;
}

const Section = ({vacant}: sectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const theme = useTheme();
  return (
    <Container>
      <Title size="large">Vacantes</Title>
      <Button
            onClick={openModal}
            textColor={theme.colors.textWhite}
            textColorIcon={theme.colors.textWhite}
            bgColor={theme.colors.buttonPurple}
            bgColorHover={theme.colors.buttonPurpleHover}
            icon={<IoIosAddCircleOutline />}
            width={200}
          >
            Agregar Vacante
          </Button>
          <Modal  isOpen={isModalOpen} onClose={closeModal} vacant={vacant}/>
    </Container>
  )
}

export default Section
