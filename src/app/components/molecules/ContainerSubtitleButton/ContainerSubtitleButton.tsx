import React from 'react';
import Button from "../../atoms/Button/WithIcon/Button";
import Title from "../../atoms/Text/Title";
 import { Container } from "./ContainerSubtitle";
 import { useTheme } from 'styled-components'; 
 import { IoIosAddCircleOutline } from "react-icons/io";
 import Modal from "../../organism/Modals/ModalJobs";
 import { useState } from "react";

const ContainerSubtitleButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const theme = useTheme();
  return (
    <Container>
      <Title size="medium">Vacantes</Title>
      <Button
            onClick={openModal}
            textColor={theme.colors.textWhite}
            textColorIcon={theme.colors.textWhite}
            bgColor={theme.colors.buttonPurple}
            bgColorHover={theme.colors.buttonPurpleHover}
            icon={<IoIosAddCircleOutline />}
          >
            Agregar Vacante
          </Button>
          <Modal  isOpen={isModalOpen} onClose={closeModal}/>
    </Container>
  )
}

export default ContainerSubtitleButton
