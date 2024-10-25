"use client";
import React, { useState } from 'react';
import Section from '../molecules/Sections/Companies';
import CardsGrid from '../organism/Container/ContainerCompany';
import PageNavigation from '../molecules/PageNavigation/PageNavigation';
import { TemplateContainer, ContentWrapper } from './TemplatesForPages';

const CompanyManagmentTemplate: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 2; 

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <TemplateContainer>
      <ContentWrapper>
        <Section />
        <CardsGrid />
      </ContentWrapper>
      <PageNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </TemplateContainer>
  );
};

export default CompanyManagmentTemplate;

