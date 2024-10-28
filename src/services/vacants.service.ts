import { IVacant } from "../models/vacant.model";
import { HttpClient } from "../utils/client-http";

export class VacantService {
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAll(){
        try {
            const vacants = await this.httpClient.get<IVacant>("vacants")
            return vacants;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener las compañías");
        }
    }

    async create(vacant: IVacant){
        try {
            const newVacant = await this.httpClient.post<IVacant, IVacant>("vacants", vacant)
            return newVacant;
        } catch (error) {
            console.log(error);
            throw new Error("Error al crear la vacante");
        }
    }

    async update(id: string, vacant: IVacant){
        try {
            const updatedVacant = await this.httpClient.put<IVacant, IVacant>(`vacants/${id}`, vacant)
            return updatedVacant;
        } catch (error) {
            console.log(error);
            throw new Error("Error al actualizar la vacante");
        }
    }

    async destroy(id: string){
        try {
            const vacant = await this.httpClient.delete(`vacants/${id}`)
            return vacant;
        } catch (error) {
            console.log(error)
            throw new Error("Error al eliminar la vacante");
        }
    }
}