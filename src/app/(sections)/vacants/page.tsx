import React from 'react'
import JobManagmentTemplate from "../../components/templatesForPages/Jobs"
import { VacantService} from "../../../services/vacants.service"
import { IPaginationRequest } from "../../../models/pagination.model"
interface IProps{
    searchParams: IPaginationRequest;
}

export const generateMetadata = async({searchParams}: IProps) =>{
    const page = searchParams.page ?? 1;
    return {
        title: `Vacant List - Page ${page}`,
        description: `List of vacants on page ${page}`,
        meta: [
            { name: 'description', content: `List of vacants on page ${page}` },
            { property: 'og:title', content: `Vacant List - Page ${page}` },
            { property: 'og:description', content: `List of vacants on page ${page}` },
        ],
    }
}

const vacantService =  new VacantService();
export default async function LayoutJobs ({searchParams}: IProps) {
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await vacantService.findAllWithPagination({page, size: 8})
    return (
        <JobManagmentTemplate data={data} pagination={data.pageable}/>
    )
}