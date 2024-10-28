import { IPageable, ISort } from "./pagination.model";

interface ICompany {
    id: string;
    name: string;
    location: string;
    contact: string;
}

export interface IBasicVacant {
    title:       string;
    description: string;
    status:      string;
    companyId:   string;
}
export interface IVacant {
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
    id:          number;
    title:       string;
    description: string;
    status:      string;
    company:     ICompany;
}


