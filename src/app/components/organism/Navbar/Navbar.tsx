"use client"
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; 
import Button from '../../atoms/Button/WithIcon/Button';
import InputSearch from '../../atoms/Input/Search/Input';
import { PiSuitcaseBold } from 'react-icons/pi';
import { LuBuilding2 } from 'react-icons/lu';
import { NavbarContainer, ButtonGroup } from './NavbarStyles';
import { useTheme } from 'styled-components';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'vacantes' | 'companias'>('vacantes');
  const [searchTerm, setSearchTerm] = useState("");

  const searchParams = useSearchParams();
  const theme = useTheme();
  const router = useRouter(); 


  const handleVacantesClick = () => {
    setActiveSection('vacantes');
    router.push('/vacants');
  };


  const handleCompaniasClick = () => {
    setActiveSection('companias');
    router.push('/companies'); 
  };

  const handleChangeSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
      const params = new URLSearchParams(searchParams.toString());
      if(searchTerm){
        params.set('name', searchTerm);
      }else{
        params.delete('name');
      }
      router.push(`?${params.toString()}`)
  }

  return (
    <>
      <NavbarContainer>
        <ButtonGroup>
          <Button
            onClick={handleVacantesClick}
            textColor={activeSection === 'vacantes' ? theme.colors.textWhite : theme.colors.textMediumGray}
            textColorIcon={activeSection === 'vacantes' ? theme.colors.textWhite : theme.colors.textMediumGray}
            bgColor={activeSection === 'vacantes' ? theme.colors.buttonPurple : theme.colors.bgInactiveTabs}
            bgColorHover={theme.colors.buttonPurpleHover}
            icon={<PiSuitcaseBold />}
          >
            Vacantes
          </Button>
          <Button
            onClick={handleCompaniasClick}
            textColor={activeSection === 'companias' ? theme.colors.textWhite : theme.colors.textMediumGray}
            textColorIcon={activeSection === 'companias' ? theme.colors.textWhite : theme.colors.textMediumGray}
            bgColor={activeSection === 'companias' ? theme.colors.buttonPink : theme.colors.bgInactiveTabs}
            bgColorHover={theme.colors.buttonPinkHover}
            icon={<LuBuilding2 />}
          >
            Compañías
          </Button>
        </ButtonGroup>

        <InputSearch
          type="text"
          id="search"
          name="search"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(value)=> handleChangeSearch(value)}
        />
      </NavbarContainer>
    </>
  );
};

export default Navbar;


