"use client";
import React from "react";
import AddCompanyForm from "../Forms/FormCompany"
import { ModalOverlay, ModalContent } from "./ModalStyles";
import CloseButton from "../../atoms/Button/Modal/Button";
import { IContent } from "../../../../models/company.model";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  company: IContent | null;
  
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, company }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose} iconColor="#000" />
        <AddCompanyForm initialData = {company} onClose={onClose}/>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;