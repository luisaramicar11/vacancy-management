import {StyledIcon } from "./IconStyles";

interface IconProps {
  children: React.ReactNode;
  color?: string; 
}

const Icon: React.FC<IconProps> = ({ children, color }) => {
  return <StyledIcon color={color}>{children}</StyledIcon>;
};

export default Icon;