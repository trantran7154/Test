const Product = require('../models/Product');
const mongoose = require('../../util/mongoose');

class ProductsController {
    // [GET] /products/:slug
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug }).then(products => res.render('products/show', {
            products: mongoose.mongooseToObject(products)
        })).catch(next);
    }
}

module.exports = new ProductsController;