const httpStatus = require('http-status');
const logger = require('../config/logger');
const BookService = require('../service/BookService');

class BookController {
    constructor() {
        this.bookService = new BookService();
    }

    create = async (req, res) => {
        try {
            const book = await this.bookService.createBook(req.body);            

            const { message, data, status } = book.response;
            res.status(book.statusCode).send({ status, message, data });
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
   

    get = async (req, res) => {
        try {           
            const books = await this.bookService.getBooks();
            if (books == null) {
                res.status(httpStatus.BAD_GATEWAY).send('Books Not Found!');
            }          
            res.send(books);
        } catch (e) {
            logger.error(e);
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };

   
}

module.exports = BookController;
