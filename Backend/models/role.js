const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = Schema({
        
    IdUsuario:Number,
    nombreUsuario: String,
    rol: Boolean,
    estado: Boolean

})

module.exports = mongoose.model('role', RoleSchema);