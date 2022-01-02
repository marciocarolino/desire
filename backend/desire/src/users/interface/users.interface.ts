import { Post } from "@nestjs/common"

export interface IUsers {

    id: number;
    name: string;
    city: string;
    state: string;
    phone: string;
    email: string;

}