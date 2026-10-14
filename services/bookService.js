import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async() =>{
    const books = await bookModel.fetchAllBooks();
    return books;
}

export const createBook = async (book) => {
    const bookId = await bookModel.insert(book);
    return bookId;
}

export const updateBook = async (book) => {
    const updatedbook = await bookModel.update(book);
    return updatedbook;
}   

//delete
export const deletebook = async (id) => {
    const deletebook = await bookModel.remove(parseInt(id));
    return deletebook;
}