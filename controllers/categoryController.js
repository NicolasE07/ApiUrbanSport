const categoryModel = require('../models/Category'); // vamos a usar el modelo de category

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
    const category = new categoryModel({
        name: req.body.name
    });

    //obteniendo la constante category y utilizando el metodo save de mongoose

    category.save().then(
        data => {
            res.send(data);
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: error.message
            })
        }
    );

}

/**
 * Metodo para listar todas la categorias
 * @param {*} req => Todo los datos y la informacion que el metodo va a recibir   
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario
 */
exports.findAll = (req, res) => {
    categoryModel.find().then(
        categories => {
            res.send(categories);
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "error en alistar"
            });
        }
    )
}

/**
 * Metodo para modificar una categoria
 * @param {*} req => Todo los datos y la informacion que el metodo va a recibir   
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario
 */
exports.update = (req, res) => {
    const category = {
        name: req.body.name
    }
    /**
     * Tiene 3 parametros 
     * 1. a quien quiero modificar por el ID
     * 2. Por quien lo quiero modificar 
     * 3. (opcional) indica que los datos que se van a devolver son los actualizados
     */
    categoryModel.findByIdAndUpdate(req.params.id, category, { new: true }).then(
        data => {
            res.send(data);
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "error al modificar"
            });

        }

    )

}

/**
 * Metodo para eliminar una categoria
 * @param {*} req => Todo los datos y la informacion que el metodo va a recibir   
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario
 */
exports.deleteOne = (req, res) => {
    const category = {
        name: req.body.name
    }

    categoryModel.findByIdAndRemove(req.params.id).then(
        dataDelete =>{
            res.send(dataDelete);
        }
    ).catch(
        error=>{
            return res.status(500).send({
                message: "no se a podido eliminar"
            });
        }
    )

}