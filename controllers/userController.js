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
    console.logo('que tiene el body', req.body);
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