const Product = require("../models/Product");
const mongoose = require("../../util/mongoose");

class ProductsController {
    // [GET] /products/:slug
    show(req, res, next) {
        Product.findOne({
                slug: req.params.slug,
            })
            .then((products) =>
                res.render("products/show", {
                    products: mongoose.mongooseToObject(products),
                })
            )
            .catch(next);
    }
    create(req, res, next) {
        res.render("products/create");
    }
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then((products) =>
                res.render("products/edit", {
                    products: mongoose.mongooseToObject(products),
                })
            )
            .catch(next);
    }
    update(req, res, next) {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(() => res.redirect("me"))
            .catch(next);
    }
    store(req, res, next) {
        const product = new Product(req.body);
        product
            .save()
            .then(() => res.redirect("/"))
            .catch(next);
    }
    me(req, res, next) {
        Product.find({})
            .then((products) =>
                res.render("products/me", {
                    products: mongoose.multipleMongooseToObject(products),
                })
            )
            .catch(next);
    }
}

module.exports = new ProductsController();