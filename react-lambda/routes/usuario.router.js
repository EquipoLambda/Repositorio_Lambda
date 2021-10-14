/*importando el modulo Router de express para definir las rutas
del crud de Usuarios*/
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
/*importando el controlador de los Usuarios, encargado de gestionar
la interaccion entre las peticiones HTTP y la base de datos*/
const { usuarioController } = require('../controllers');


router.get('/:id', usuarioController.getUsuario);

router.get('/', usuarioController.getUsuarios);

//escribiendo las reglas que deben cumplir los parametros para crear un Usuario
router.post('/',
    body('cedula', 'La cedula del usuario es requerida y debe ser numerica').exists().isNumeric(),
    body('usuario', 'El nombre del usuario es requerida').exists(),
    body('correo', 'El correo del usuario es requerido').exists(),
    body('celular', 'El numero celular del usuario es requerido').exists(),
    body('rol', 'El rol del usuario es requerido').exists(),
    body('estado', 'El estado del usuario es requerido').exists()
    , usuarioController.createUsuario);

//escribiendo las reglas que deben cumplir los parametros para actualizar un Usuario               
router.put('/:id',
    body('cedula', 'La cedula del usuario es requerida y debe ser numerica').exists().isNumeric(),
    body('usuario', 'El nombre del usuario es requerida').exists(),
    body('correo', 'El correo del usuario es requerido').exists(),
    body('celular', 'El numero celular del usuario es requerido').exists(),
    body('rol', 'El rol del usuario es requerido').exists(),
    body('estado', 'El estado del usuario es requerido').exists()
    , usuarioController.updateUsuario);

router.delete('/', usuarioController.deleteUsuario);

module.exports = router;