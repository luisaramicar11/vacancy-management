"use client";
import React from "react";
import AddJobForm from "../Forms/FormJobs";
import { ModalOverlay, ModalContent } from "./ModalStyles";
import CloseButton from "../../atoms/Button/Modal/Button";
import { IContentVacant } from "../../../../models/vacant.model";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  vacant: IContentVacant | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, vacant }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose} iconColor="#000" />
      <AddJobForm initialData={vacant} onClose={onClose}/>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
