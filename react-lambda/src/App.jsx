import React,{Fragment} from 'react'

export function App() {
  return (
      <Fragment>
            <div class="container mt-4">
             <div id="fondo" class="card">
               <article class="card-body mx-auto"  />
                <h3 class="card-title mt-3 text-center">Editar Rol</h3>
                <p class="text-center">Llene cuidadosamente todos los campos.</p>
                <form>
                 <div class="form-group input-group">
                   <div class="input-group-prepend">
                   <span id="fondoicono" class="input-group-text"> <i class="fa fa-id-card"></i> </span>
                   </div>
                   <input name="" class="form-control" placeholder="000" type="number" disabled/>
                 </div> {/* form-group */}
                 <div class="form-group input-group">
                  <div class="input-group-prepend">
                   <span id="fondoicono" class="input-group-text"> <i class="fa fa-user"></i> </span>
                 </div>
                 <input name="" class="form-control" placeholder="Nombre del Rol" type="text"/>
               </div> {/* form-group*/}
               <div class="form-group input-group">
                <div class="input-group-prepend">
                  <span id="fondoicono" class="input-group-text"> <i class="fa fa-building "></i> </span>
                </div>
                <select class="form-control">
                 <option selected="">Activo</option>
                 <option>Inactivo</option>
                </select>
               </div> {/* form-group*/}
               <div class="form-group input-group">
                <div class="input-group-prepend">
                 <span id="fondoicono" class="input-group-text"><i class="fas fa-tasks"></i></span>
                </div>
                <textarea name="" class="form-control" id="descripcion" cols="40" rows="5" placeholder="Coloque una breve descripción del rol"></textarea>
               </div> {/* form-group*/}
               <div class="row">
                <div class="col-sm-6">
                 <button type="submit" class="btn btn-warning btn-block btn-colores"> Editar Usuario </button>
                </div>
                <div class="col-sm-6">
                 <button type="submit" class="btn btn-danger btn-block ">Cancelar </button>
                </div>
               </div> {/* form-group*/}
               <p class="text-center">Por favor verifique la informacion antes de Guardar </p>
               </form>
              </div>
             </div> {/* card*/}
            </Fragment> )    
}
