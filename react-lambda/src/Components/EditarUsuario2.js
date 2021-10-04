import React from 'react'
import './EditarUsuario2.css'

function EditarUsuario2(){
    return(
        <div>
            <div class="container mt-4"   >
    

    <div id="fondo" className="card">
    <article className="card-body mx-auto" style= {{ maxwidth: "400px" }} >
        <h3 className="card-title mt-3 text-center">Editar Usuario</h3>
        <p className="text-center">Llene cuidadosamente todos los campos para modificar usuario</p>
        <form>
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-user"></i> </span>
             </div>
            <input name="" className="form-control" placeholder="Nombre completo" type="text"/>
        </div> {/* form-group*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-envelope"></i> </span>
             </div>
            <input name="" className="form-control" placeholder="Correo electrónico" type="text"/>
        </div> {/* form-group*/}
        <div class="form-group input-group">
            <div class="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-id-card"></i> </span>
             </div>
            <input name="" className="form-control" placeholder="Documento de identidad" type="email"/>
        </div> {/* form-group*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-phone"></i> </span>
            </div>
            <select className="custom-select" style= {{ maxwidth: "120px" }}>
                <option selected="">+57</option>
                <option value="1">+1</option>
            </select>
            <input name="" className="form-control" placeholder="Número de celular" type="text"/>
        </div> {/* form-group*/}
        <div className="form-group input-group">
            <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-building "></i> </span>
            </div>
            <select className="form-control">
                <option selected=""> Seleccione el tipo de usuario</option>
                <option>Vendedor</option>
                <option>Operario</option>
                <option>Administrador</option>
                <option>Gerente comercial</option>
                <option>Ejecutivo</option>
                <option>Director</option>   
            </select>
    
    
        </div> {/* form-group*/}                                    
        <div className="form-group">
            <button type="submit" class="btn btn-warning btn-block btn-colores"> Editar Usuario  </button>
        </div> {/* form-group*/}    
        <p className="text-center">Por favor verifique la informacion antes de Guardar  </p>                                              
    </form>
    </article>
    </div> {/* card.*/}
    
    </div> 
    {/*container end.*/}
        </div>

    )
}

export default EditarUsuario2

