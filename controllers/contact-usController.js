const contactModel = require('../models/Contact-us');
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
    const Contact = new contactModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        text: req.body.text

    });

    Contact.save().then(
        data => {
            res.send(data);
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}

