import React from "react";
import { OptionStyled } from "./OptionStyles";

interface OptionProps {
  value: string;
  children: React.ReactNode;
  disabled?: string
}

const Option: React.FC<OptionProps> = ({ value, children }) => {
  return <OptionStyled value={value}>{children}</OptionStyled>;
};

export default Option;