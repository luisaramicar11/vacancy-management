import React from 'react'
import JobManagmentTemplate from "../../components/templatesForPages/Jobs"
import { VacantService} from "../../../services/vacants.service"
import { IPaginationRequest } from "../../../models/pagination.model"
interface IProps{
    searchParams: IPaginationRequest;
}

const vacantService =  new VacantService();
export default async function LayoutJobs ({searchParams}: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await vacantService.findAll({page, size: 8})
    return (
        <JobManagmentTemplate data={data} pagination={data.pageable} />
    )
}