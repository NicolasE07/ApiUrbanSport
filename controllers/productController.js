const productModel = require('../models/Product');
/** 
 * C = Crear una categoria
 * R = leer una o mas categorias
 * U = Modificar una categoria
 * D = Eliminar una categoria
*/

/**
 * Metodo para crear una nueva categoria
 * @param {*} req => Todo los datos y la informacion que el metodo va a recibir   
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario
 */

exports.create = (req, res) => {
    console.log('que tiene el body', req.body);
    const product = new productModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        idCategory: req.body.idCategory,

    });

    product.save().then(
        data => {
            res.send('se ah guardado correctamente: ', data);
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}