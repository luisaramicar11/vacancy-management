"use client"
import React from 'react';
import Section from '../molecules/Sections/Jobs';
import CardsGrid from '../organism/Container/ContainerJobs';
import PageNavigation from '../molecules/PageNavigation/PageNavigation';
import { TemplateContainer, ContentWrapper } from './TemplatesForPages';
import { IVacant } from "../../../models/vacant.model";
import { IPageable } from "../../../models/pagination.model"
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Loader from '../../loading';
interface IJobsProps {
  data: IVacant,
  pagination: IPageable,
  loading: boolean
}

const JobManagmentTemplate = ({data, pagination, loading}: IJobsProps) => {
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

  const currentPage = pagination.pageNumber + 1;

  if(loading){
    return <Loader/>
  }

  return (
    <TemplateContainer>
      <ContentWrapper>
      <Section vacant = {null}/>
      <CardsGrid data= {data}/>
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

export default JobManagmentTemplate;
