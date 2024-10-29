"use client";
import React from 'react';
import Section from '../molecules/Sections/Companies';
import CardsGrid from '../organism/Container/ContainerCompany';
import PageNavigation from '../molecules/PageNavigation/PageNavigation';
import { TemplateContainer, ContentWrapper } from './TemplatesForPages';
import { IPageable  } from "../../../models/pagination.model"
import { ICompany } from "../../../models/company.model";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
interface ICompaniesProps {
  data: ICompany,
  pagination: IPageable,
}

const CompanyManagmentTemplate = ({data, pagination}: ICompaniesProps) => {
  const totalPages = data.totalPages; 

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleNext = (nextPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if(nextPage <= totalPages){
      params.set('page', nextPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const handlePrevious = (backPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if(backPage > 0){
      params.set('page', backPage.toString());
      router.push(`?${params.toString()}`);
    }
  };

  const currentPage = pagination.pageNumber +1;

  return (
    <TemplateContainer>
      <ContentWrapper>
        <Section />
        <CardsGrid data={data}/>
      </ContentWrapper>
      <PageNavigation
        pagination={pagination}
        totalPages={totalPages}
        onNext={()=>handleNext(currentPage+1)}
        onPrevious={()=>handlePrevious(currentPage-1)}
      />
    </TemplateContainer>
  );
};

export default CompanyManagmentTemplate;


