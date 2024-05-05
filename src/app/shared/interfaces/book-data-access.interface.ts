import { Book } from "../models/book.model";

export interface BookDataAccessService {
    findBooks(): Book[];
    findBookById(id: string): Book | undefined;
}