const express = require('express');
const router = express.Router();

const BookValidator = require('../validator/BookValidator');
const BookController = require('../controllers/BookController');

const bookController = new BookController();
const bookValidator = new BookValidator();

router.post('/', bookValidator.bookCreateValidator, bookController.create);
router.get('/', bookController.get);

module.exports = router;
