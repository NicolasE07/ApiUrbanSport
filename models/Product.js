const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    name: { type: String, require: true },
    price: { type: String, require: true },
    description: { type: String, require: false },
    fhoto: { type: String, require: true },
    idCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }//solo para una categoria 

    //para tener varias categorias se usaria un tipo array ejemplo: idCategory: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}]


});
module.exports = mongoose.model('Product', ProductSchema);