import React from 'react'
import './ListarUsuario2.css'

function ListarUsuario2(){
    return(
        <div>
            <div className="container">
        
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h3>Lista de <b>Usuarios</b></h3>
                    </div>
                </div>
            </div>
            <input type="text" id="Busqueda" onkeyup="myFunction()" placeholder="Ingrese un nombre para buscar..."/>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Correo Electrónico</th>
                        <th>Rol</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00001</td>
                        <td>Pedro Pallares</td>
                        <td>pedrop1424@gmail.com</td>
                        <td>Administrador</td>
                        <td>
							<a className="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            {/* <a class="delete" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a> */}
                        </td>
                    </tr>
                    <tr>
                        <td>00002</td>
                        <td>Maria Bermudez</td>
                        <td>berm8844@hotmail.com</td>
                        <td>Gerente</td>
                        <td>
							<a className="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            {/* <a class="delete" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a> */}
                        </td>
                    </tr>
                    <tr>
                        <td>00003</td>
                        <td>Hector Sanabria</td>
                        <td>hectorsana33@outlook.com</td>
                        <td>Vendedor</td>
                        <td>
							<a className="add" title="Add" data-toggle="tooltip"><i class="material-icons">&#xE03B;</i></a>
                            <a className="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            {/* <a class="delete" title="Eliminar" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>     
        </div>
    )
}

export default ListarUsuario2