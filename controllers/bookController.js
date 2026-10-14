import * as bookService from '../services/bookService.js';

export const fetchallBooks = async (req, res) =>{
    const books = await bookService.fetchAllBooks();
    res.status(200).json(books);
}

export const createBook = async (req, res) => {
    const {name, author} = req.body;
    const book = {name, author};

    try {
        const bookId = await bookService.createBook(book);
        res.status(200).json({
            success: true,
            message: bookId
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const editBook = async (req, res) => {
    const {name, author} = req.body;
    const {id} = req.params;
    const book = {id, name, author};    

    try {
        const updatedbook = await bookService.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedbook
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

export const deleteBook = async (req, res) => {
    const {id} = req.params;

    try {
        const deletedbook = await bookService.deletebook(parseInt(id));
        res.status(200).json({
            success: true,
            message: deletedbook
        });
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};