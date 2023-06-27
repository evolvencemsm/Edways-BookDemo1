const SuperDao = require('./SuperDao');
const models = require('../models');

const Book = models.book;

class BookDao extends SuperDao {
    constructor() {
        super(Book);
    }
}

module.exports = BookDao;
