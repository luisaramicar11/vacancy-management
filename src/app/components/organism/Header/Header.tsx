import Navbar from "../Navbar/Navbar";
import Title from "../../atoms/Text/Title";
import { HeaderContainer } from "./HeaderStyles";
import React from 'react'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title size="large">Panel de Administración</Title>
      <Navbar />
    </HeaderContainer>
  )
}

export default Header
