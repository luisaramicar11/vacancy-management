"use client";
import React from "react";
import AddCompanyForm from "../Forms/FormCompany"
import { ModalOverlay, ModalContent } from "./ModalStyles";
import CloseButton from "../../atoms/Button/Modal/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose} iconColor="#000" />
        <AddCompanyForm />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;