import React from 'react'
import './EditarRol2.css'

function EditarRol2(){
    return(
        <div>
            <div className="container mt-4">


<div id="fondo" className="card">
  <article className="card-body mx-auto" style= {{ maxwidth: "250px" }} >
    <h3 className="card-title mt-3 text-center">Editar Rol</h3>
    <p className="text-center">Llene cuidadosamente todos los campos.</p>
    <form>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span id="fondoicono" class="input-group-text"> <i class="fa fa-id-card"></i> </span>
        </div>
        <input name="" className="form-control" placeholder="000" type="number" disabled/>
      </div> {/* form-group*/}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span id="fondoicono" className="input-group-text"> <i className="fa fa-user"></i> </span>
        </div>
        <input name="" className="form-control" placeholder="Nombre del Rol" type="text"/>
      </div> {/* form-group*/}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span id="fondoicono" className="input-group-text"> <i className="fa fa-building "></i> </span>
        </div>
        <select className="form-control">
          <option selected="">Activo</option>
          <option>Inactivo</option>
        </select>
      </div> {/*form-group// */}
      <div class="form-group input-group">
        <div className="input-group-prepend">
          <span id="fondoicono" className="input-group-text"><i className="fas fa-tasks"></i></span>
        </div>
        <textarea name="" className="form-control" id="descripcion" cols="40" rows="5" placeholder="Coloque una breve descripción del rol"></textarea>
      </div> {/* form-group// */}
      <div className="row">
        <div className="col-sm-6">
          <button type="submit" className="btn btn-warning btn-block btn-colores"> Editar Usuario </button>
        </div>
        <div className="col-sm-6">
          <button type="submit" className="btn btn-danger btn-block ">Cancelar </button>
        </div>
      </div> {/* form-group// */}
      <p className="text-center">Por favor verifique la informacion antes de Guardar </p>
    </form>
  </article>
</div> {/*card.// -*/}
</div>
{/*container end.//*/}
        </div>
    )

}

export default EditarRol2

