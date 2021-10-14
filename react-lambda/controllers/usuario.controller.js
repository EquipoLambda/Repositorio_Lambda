//Importando el modelo de Base de datos de los Usuario
const UsuarioSchema = require('../models/usuario');
//importando la libreria que nos permite capturar los errores en el cuerpo de la solicitudes
const { validationResult } = require('express-validator');

const getUsuario = async (req, res) => {
    if (req.body.id != 'undefined') {
        try {
            let usuario = await UsuarioSchema.findById(req.body.id);
            res.status(200).json({ data: usuario });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Usuario no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID no encontrado"
            }
        })
    }
}

const getUsuarios = async (req, res) => {
    try {
        let usuarios = await UsuarioSchema.find();
        res.status(200).json({ data: usuarios });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const createUsuario = async (req, res) => {
    //verificando que si hay errores en los parametros de la solictud
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //si existen errores damos una respuesta erronea
        return res.status(400). json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    let usuario = new UsuarioSchema(req.body);
    try {
        await usuario.save();
        res.status(201).json({ data: usuario });
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "Problemas con la base de datos" + err.message
            }
        })
    }
}

const updateUsuario = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: {
                code: 404,
                errors: errors.array()
            }
        });
    }
    try {
        let newUsuario = {
            id: req.body.id,
            cedula: req.body.cedula,
            usuario: req.body.usuario,
            correo: req.body.correo,
            celular: req.body.celular,
            rol: req.body.tipo,
            estado: req.body.rol
        }
        await UsuarioSchema.findByIdAndUpdate(req.body.id, newUsuario);
        res.status(201).json({ data: newUsuario })
    }
    catch (err) {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID no encotrado"
            }
        })
    }
}


const deleteUsuario = async (req, res) => {
    if (typeof req.body != 'undefined') {
        try {
            let result = await UsuarioSchema.findOneAndRemove(req.body.id);
            res.status(200).json({ data: result });
        }
        catch (err) {
            res.status(404).json({
                error: {
                    code: 404,
                    message: "Usuario no encontrado"
                }
            })
        }
    } else {
        res.status(404).json({
            error: {
                code: 404,
                message: "ID no encontrado"
            }
        })
    }
}

module.exports.getUsuario = getUsuario;
module.exports.getUsuarios = getUsuarios;
module.exports.createUsuario = createUsuario;
module.exports.updateUsuario = updateUsuario;
module.exports.deleteUsuario = deleteUsuario;