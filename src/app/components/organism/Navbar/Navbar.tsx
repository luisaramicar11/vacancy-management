import React, { useState } from 'react';
import Button from '../../atoms/Button/WithIcon/Button'; 
import InputSearch from '../../atoms/Input/Search/Input'; 
import { PiSuitcaseBold } from 'react-icons/pi'; 
import { LuBuilding2 } from'react-icons/lu';
import { NavbarContainer, ButtonGroup } from './NavbarStyles';
import { useTheme } from 'styled-components';  

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'vacantes' | 'companias'>('vacantes');
  const theme = useTheme(); 

  const handleVacantesClick = () => setActiveSection('vacantes');
  const handleCompaniasClick = () => setActiveSection('companias');

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
        />
      </NavbarContainer>
    </>
  );
};

export default Navbar;

