const express = require('express');
const router = express.Router();

const productController = require('../app/controller/ProductController');

router.get('/create', productController.create);
router.get('/edit/:id', productController.edit);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);
router.delete('/force/:id', productController.delete);
router.post('/store', productController.store);
router.patch('/restore/:id', productController.restore);
router.get('/me', productController.me);
router.get('/trash', productController.trash);
router.get('/:slug', productController.show);

module.exports = router;