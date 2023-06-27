const httpStatus = require('http-status');
const { v4: uuidv4 } = require('uuid');
const BookDao = require('../dao/BookDao');
const responseHandler = require('../helper/responseHandler');
const logger = require('../config/logger');

class Bookservice {
    constructor() {
        this.BookDao = new BookDao();
    }

    /**
     * Create a product
     * @param {Object} productBody
     * @returns {Object}
     */
    createBook = async (productBody) => {
        try {
            let message = 'Successfully Created Book';          
            const uuid = uuidv4();
            productBody.name = productBody.name;
            productBody.productId = uuid;
            productBody.wQty =  productBody.wQty;
            productBody.sRate = productBody.sRate;
            productBody.category = productBody.category;

            let productData = await this.BookDao.create(productBody);

            if (!productData) {
                message = 'Created Book process Failed! Please Try again.';
                return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
            }
          
            productData = productData.toJSON();
            return responseHandler.returnSuccess(httpStatus.CREATED, message, productData);
        } catch (e) {
            logger.error(e);
            return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
        }
    };


    getBooks = async () => {
        return this.BookDao.findAll();
    };

}

module.exports = Bookservice;
