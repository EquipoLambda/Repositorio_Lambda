
const { Router } = require('express');
const router = Router();
const { body } = require('express-validator');
const { rolesController } = require('../controllers');
const verifyToken = require('../middlewares/verifyToken');

router.get('/:id', rolesController.getRole);

router.get('/', rolesController.getRoles);

router.post('/',
    body('idUsuario', 'El valor es requerido y debe ser numerico').exists().isNumeric(),
    body('nombreUsuario', 'El valor es requerido y debe ser numerico').exists(),
    body('rol', 'nombreCliente es requerido').isBoolean().exists()
    , rolesController.createRole);

router.put('/:id',
    body('idUsuario', 'El valor es requerido y debe ser numerico').exists().isNumeric(),
    body('nombreUsuario', 'El valor es requerido y debe ser numerico').exists(),
    body('rol', 'nombreCliente es requerido').isBoolean().exists()
    , rolesController.updateRole);

router.delete('/:id', rolesController.deleteRole);

module.exports = router;