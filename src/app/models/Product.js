const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema({
    name: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: 'https://down-vn.img.susercontent.com/file/sg-11134201-7qvdv-lgjglhxblyes67'
    },
    description: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        slug: 'name',
        unique: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', Product);