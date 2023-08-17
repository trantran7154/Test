const express = require('express');
const router = express.Router();

const productController = require('../app/controller/ProductController');

router.get('/create', productController.create);
router.get('/edit/:id', productController.edit);
router.patch('/:id', productController.update);
router.delete('/:id', productController.delete);
router.post('/store', productController.store);
router.get('/me', productController.me);
router.get('/:slug', productController.show);

module.exports = router;