"use client";
import React from "react";
import {LabelFormModal} from "./LabelStyles"

interface LabelProps {
  text: string;
  htmlFor: string;
  className?: string;
}

const LabelForm: React.FC<LabelProps> = ({ text, htmlFor, className }) => {
  return (
    <LabelFormModal htmlFor={htmlFor} className={className}>
      {text}
    </LabelFormModal>
  );
};

export default LabelForm;