const Product = require('../models/Product');
const mongoose = require('../../util/mongoose');

class SiteController {
    // [GET] /home
    index(req, res, next) {
        Product.find({}).then(products => res.render('home', {
            products: mongoose.multipleMongooseToObject(products)
        })).catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;