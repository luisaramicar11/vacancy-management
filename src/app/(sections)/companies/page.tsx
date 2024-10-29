import React from 'react'
import CompanyManagmentTemplate from "../../components/templatesForPages/Companies";
import { CompanyService } from '@/services/company.service';
import {ICompanyRequest } from "../../../models/company.model"
interface IProps{
    searchParams: ICompanyRequest;
}

export const generateMetadata = async({searchParams}: IProps) =>{
    const page = searchParams.page ?? 1;
    return {
        title: `Company List - Page ${page}`,
        description: `List of companies on page ${page}`,
        meta: [
            { name: 'description', content: `List of companies on page ${page}` },
            { property: 'og:title', content: `Company List - Page ${page}` },
            { property: 'og:description', content: `List of companies on page ${page}` },
        ],
    }
}

const companyService = new CompanyService();

export default async function LayoutCompanies ({searchParams}: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const size = searchParams.size ? parseInt(searchParams.size.toString()) : 8;
    const data = await companyService.findAllWithPagination({page, size});
    return (
        <CompanyManagmentTemplate data={data} pagination={data.pageable}/>
    )
}
