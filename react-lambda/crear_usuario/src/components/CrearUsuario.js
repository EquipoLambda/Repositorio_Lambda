import React from 'react'
import './CrearUsuario.css'

function CrearUsuario() {
    return (
        <div>
            <div className="container mt-4"   >
    

    <div id="fondo" className="card">
    <article className="card-body mx-auto" > {/*style="max-width: 400px;"*/}
        <h3 className="card-title mt-3 text-center">Crear Nuevo Usuario</h3>
        <p className="text-center">Llene cuidadosamente todos los campos para enrolar un nuevo usuario</p>
        <form>
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-user"></i> </span>
             </div>
            <input name="" className="form-control" placeholder="Nombre completo" type="text"/>
        </div> {/*<!-- form-group// -->*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-envelope"></i> </span>
             </div>
            <input name="" className="form-control" placeholder="Correo electrónico" type="text"/>
        </div> {/*<!-- form-group// -->*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-id-card"></i> </span>
             </div>
            <input name="" className="form-control" placeholder="Documento de identidad" type="email"/>
        </div> {/*<!-- form-group// -->*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-phone"></i> </span>
            </div>
            <select className="custom-select" >{/*style="max-width: 120px;"*/}
                <option selected="">+57</option>
                <option value="1">+1</option>
            </select>
            <input name="" className="form-control" placeholder="Número de celular" type="text"/>
        </div> {/*<!-- form-group// -->*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-building "></i> </span>
            </div>
            <select className="form-control">
                <option selected=""> Seleccione el tipo de usuario</option>
                <option>Vendedor</option>
                <option>Administrador</option>
            </select>
        </div> {/*<!-- form-group end.// -->*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-check-square"></i> </span>
            </div>
            <select className="form-control">
                <option selected="">Seleccione el estado del usuario</option>
                <option>Pendiente de autorización</option>
                <option>Autorizado</option>
                <option>No autorizado</option>
            </select>
        </div> {/*<!-- form-group end.// -->*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
            <input className="form-control" placeholder="Crear contraseña" type="password"/>
        </div> {/*<!-- form-group// -->*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-lock"></i> </span>
            </div>
            <input className="form-control" placeholder="Repetir contraseña" type="password"/>
        </div> {/*<!-- form-group// -->*/}                                      
        <div className="form-group">
            <button type="submit" className="btn btn-warning btn-block btn-colores"> Crear cuenta  </button>
        </div> {/*<!-- form-group// -->*/}  
        <p className="text-center"><a href="">Cancelar</a> </p>{/*style="color:red"*/}    
        <p className="text-center">¿La cuenta ya fue creada? <a href="">Buscar usuario</a> </p>                                                                 
    </form>
    </article>
    </div> {/*}-- card.// */}
    
    
    </div> 



        </div>
    )
}

export default CrearUsuario




