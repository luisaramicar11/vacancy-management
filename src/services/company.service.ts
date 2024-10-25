import { ICompany, ICompanyRequest } from "../models/company.model";
import { HttpClient } from "../utils/client-http";

export class CompanyService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll({page, size}:ICompanyRequest){
        try {
            const companies = await this.httpClient.get<ICompany>(`company?page=${page}&size=${size}`)
            return companies;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener las compañías");
        }
    }

    async create(company: ICompany){
        try {
            const newCompany = await this.httpClient.post<ICompany, ICompany>("company", company)
            return newCompany;
        } catch (error) {
            console.log(error);
            throw new Error("Error al crear la compañía");
        }
    }

    async update(id: string, company: ICompany){
        try {
            const updatedCompany = await this.httpClient.put<ICompany, ICompany>(`company/${id}`, company)
            return updatedCompany;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar la compañía");
        }
    }

    async destroy(id: string){
        try {
            const company = await this.httpClient.delete(`company/${id}`)
            return company;
        } catch (error) {
            console.log(error)
            throw new Error("Error al eliminar la compañía");
        }
    }
}