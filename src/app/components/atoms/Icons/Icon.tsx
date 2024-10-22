import {StyledIcon } from "./IconStyles";

const Icon: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledIcon>{children}</StyledIcon>;
  };
  
export default Icon;