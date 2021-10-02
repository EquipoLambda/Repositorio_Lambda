import React from 'react'
import './CrearRol.css'

const CrearRol = () => {
    return (
        <div>
            <div class="container mt-4">


        <div id="fondo" class="card">
        <article className="card-body mx-auto" >{/*style="max-width: 400px;"*/}
            <h3 className="card-title mt-3 text-center">Crear Rol</h3>
            <p className="text-center">Llene cuidadosamente todos los campos.</p>
            <form>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input name="" className="form-control" placeholder="Nombre del Rol" type="text"/>
            </div> {/*<!-- form-group// -->*/}
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <span id="fondoicono" className="input-group-text"><i className="fas fa-tasks"></i></span>
                </div>
                <textarea name="" className="form-control" id="descripcion" cols="40" rows="5" placeholder="Coloque una breve descripción del rol"></textarea>
            </div> {/*<!-- form-group// -->*/}
            <div className="row">
                <div className="col-sm-6">
                <button type="submit" className="btn btn-warning btn-block btn-colores"> Crear cuenta </button>
                </div>
                <div className="col-sm-6">
                <button type="submit" className="btn btn-danger btn-block"> Cancelar </button>
                </div>
            </div> {/*<!-- row end// -->*/}
            <p className="text-center">¿El rol ya fue creado? <a href="">Buscar Rol</a> </p>
            </form>
        </article>
        </div> {/*<!-- card.// -->*/}
        </div>


        </div>
    )
}

export default CrearRol




