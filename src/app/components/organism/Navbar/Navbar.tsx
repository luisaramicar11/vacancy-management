"use client"
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'; 
import Button from '../../atoms/Button/WithIcon/Button';
import InputSearch from '../../atoms/Input/Search/Input';
import { PiSuitcaseBold } from 'react-icons/pi';
import { LuBuilding2 } from 'react-icons/lu';
import { NavbarContainer, ButtonGroup } from './NavbarStyles';
import { useTheme } from 'styled-components';

const Navbar: React.FC = () => {
  
  const [initialPath, setInitialPath] = useState<string>(); 
  const [activeSection, setActiveSection] = useState<string>(`${initialPath}`);
  const [searchTerm, setSearchTerm] = useState("");
  const path = usePathname();
  const searchParams = useSearchParams();
  const theme = useTheme();
  const router = useRouter(); 

  useEffect(() => {
    setInitialPath(path);
    setActiveSection(path.replace('/', ''));
  }, [path]);
  // if (path === "/companies") {
  //   setInitialPath('companias')
  // } else if (path === "/vacants"){
  //   setInitialPath('vacantes')
  // }

  const handleVacantesClick = () => {
    setActiveSection('vacants');
    router.push('/vacants');
  };

  const handleCompaniasClick = () => {
    setActiveSection('companies');
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
            textColor={activeSection === 'vacants' ? theme.colors.textWhite : theme.colors.textMediumGray}
            textColorIcon={activeSection === 'vacants' ? theme.colors.textWhite : theme.colors.textMediumGray}
            bgColor={activeSection === 'vacants' ? theme.colors.buttonPurple : theme.colors.bgInactiveTabs}
            bgColorHover={theme.colors.buttonPurpleHover}
            icon={<PiSuitcaseBold />}
          >
            Vacantes
          </Button>
          <Button
            onClick={handleCompaniasClick}
            textColor={activeSection === 'companies' ? theme.colors.textWhite : theme.colors.textMediumGray}
            textColorIcon={activeSection === 'companies' ? theme.colors.textWhite : theme.colors.textMediumGray}
            bgColor={activeSection === 'companies' ? theme.colors.buttonPink : theme.colors.bgInactiveTabs}
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


