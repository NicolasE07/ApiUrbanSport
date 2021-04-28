const mongoose = require('mongoose'); //llamosa la libreria de mongoose

const categorySchema = new mongoose.Schema({
    name: { type: String, require: true }
    

});

module.exports = mongoose.model('Category', categorySchema); //es para exportar el modelo