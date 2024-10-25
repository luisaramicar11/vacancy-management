import React from 'react'
import CompanyManagmentTemplate from "../../components/templatesForPages/Companies";
import { CompanyService } from '@/services/company.service';
import {ICompanyRequest } from "../../../models/company.model"
interface IProps{
    searchParams: ICompanyRequest;
}
const companyService = new CompanyService();

export default async function LayoutCompanies ({searchParams}: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await companyService.findAll({page, size:8});
    return (
        <CompanyManagmentTemplate data={data} pagination={data.pageable}/>
    )
}
