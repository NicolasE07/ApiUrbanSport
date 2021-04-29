/**
 * Metod para crear las rutas de las categorias
 * @param {*} app => Es el objeto de express que se creo en el archivo index.js
 */

module.exports = (app)=>{
    const userController = require ('../controllers/userController')

    /**
         * Verbos de HTPP
         * POST: Se utiliza para almacenar informacion y trabajar con el login.
         * GET: Obtener informacion -> por medio de la URL
         * PUT: Se utiliza para modificar la informacio. Se envia la informacion respecto a quien quiero modificar por la URL 
         * DELETE: Se utiliza para eliminar la informacion y tambien se envia a quien requeremos eliminar por la URL
         */

    app.post('/user/create', userController.create);
    app.put('/user/update/:id', userController.update);
    app.get('/user/getAll', userController.findAll);
    app.delete('/user/deleteOne/:id', userController.deleteOne)
}