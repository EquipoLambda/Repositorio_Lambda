import React from 'react'
import './EditarProducto2.css'


function EditarProducto2() {
    return (
        <div>
            <div class="container mt-4"   >
    
                <div id="fondo" class="card">
                <article className="card-body mx-auto" style= {{ maxwidth: "400px" }}  >
                    <h3 className="card-title mt-3 text-center">Editar Producto</h3>
                    <p className="text-center">Llene cuidadosamente todos los campos para modificar productos</p>
                    <form>
                    {/*<div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span id="fondoicono" className="input-group-text"> <i className="fa fa-key"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Identificador único" type="text"/>
                    </div> {/*<!-- form-group// -->*/}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span id="fondoicono" className="input-group-text"> <i className="fa fa-list"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Nombre del producto" type="text"/>
                    </div> {/*<!-- form-group// -->*/}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span id="fondoicono" className="input-group-text"> <i className="fa fa-commenting"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Descripción breve" type="text"/>
                    </div> {/*<!-- form-group// -->*/}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span id="fondoicono" className="input-group-text"> <i className="fa fa-money"></i> </span>
                        </div>
                        <input name="" className="form-control" placeholder="Precio unitario" type="text"/>
                    </div> {/*<!-- form-group// -->*/}
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span id="fondoicono" className="input-group-text"> <i className="fa fa-check-square"></i> </span>
                        </div>
                        <select className="form-control">
                            <option selected="">Seleccione el estado del producto</option>
                            <option>Disponible</option>
                            <option>No disponible</option>
                        </select>
                    </div> {/*<!-- form-group end.// -->*/}                                
                    <div className="form-group">
                        <button type="submit" className="btn btn-warning btn-block btn-colores"> Editar Producto </button>
                    </div> {/*<!-- form-group// -->*/}  
                    <p className="text-center"><a id="link" href="https://reactjs.org" >Cancelar</a> </p>    
                    {/*} <p className="text-center">¿El producto ya fue creado? <a href="https://reactjs.org">Buscar producto</a> </p> */}                                                            
                </form>
                </article>
                </div> {/*<!-- card.// -->*/}
                
            </div> 


        </div>
    )
}

export default EditarProducto2