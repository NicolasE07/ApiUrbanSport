const userModel = require ('../models/User');

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
    const user = new userModel({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    });

    user.save().then(
        data => {
            res.send(data);
        }
    ).catch(
        error =>{
            res.status(500).send({
                message: error.message
            }
                
            )
        }
    )
}

/**
 * Metodo para listar todas la categorias
 * @param {*} req => Todo los datos y la informacion que el metodo va a recibir   
 * @param {*} res => Todo lo que nosotros le vamos a devolver al usuario
 */
 exports.findAll = (req, res) => {
    userModel.find().then(
        user => {
            res.send(user);
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
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }
    /**
     * Tiene 3 parametros 
     * 1. a quien quiero modificar por el ID
     * 2. Por quien lo quiero modificar 
     * 3. (opcional) indica que los datos que se van a devolver son los actualizados
     */
    userModel.findByIdAndUpdate(req.params.id, user, { new: true }).then(
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
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }

    userModel.findByIdAndRemove(req.params.id).then(
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