const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    cedula: Number,
    usuario: String,
    correo: String,
    celular: String,
    rol: String,
    estado: String

})

module.exports = mongoose.model('usuario', UsuarioSchema);