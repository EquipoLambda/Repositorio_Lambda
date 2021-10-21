const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = Schema({
        
    idUsuario: Number,
    nombreUsuario: String,
    rol: Boolean

})

module.exports = mongoose.model('role', RoleSchema);