"use client";
import React from 'react';
import Button from "../../atoms/Button/WithIcon/Button";
import Title from "../../atoms/Text/Title";
import { Container } from "./Sections";
import { useTheme } from 'styled-components'; 
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "../../organism/Modals/ModalCompany";
import { useState } from "react";

const Section = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const theme = useTheme();
  return (
    <Container>
      <Title size="large">Compañias</Title>
      <Button
            onClick={openModal}
            textColor={theme.colors.textWhite}
            textColorIcon={theme.colors.textWhite}
            bgColor={theme.colors.buttonPink}
            bgColorHover={theme.colors.buttonPinkHover}
            icon={<IoIosAddCircleOutline />}
            width={200}
          >
            Agregar Compañia
          </Button>
          <Modal  isOpen={isModalOpen} onClose={closeModal}/>
    </Container>
  )
}

export default Section
