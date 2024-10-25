import { IVacant } from "./vacant.model";
import { IPageable, ISort } from "./pagination.model";

export interface ICompany {
    content:          IContent[];
    pageable:         IPageable;
    totalPages:       number;
    totalElements:    number;
    last:             boolean;
    numberOfElements: number;
    size:             number;
    number:           number;
    sort:             ISort;
    first:            boolean;
    empty:            boolean;
}

export interface IContent {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
    vacants:  IVacant[];
}

export interface ICompanyRequest {
    page: number;
    size: number;
}