import React,{Fragment} from 'react';
import './ListarRol.css';

export default function ListarRol() {
    return (
        <Fragment>
                <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <h3 className="text-center"><b>Lista de Roles</b></h3>
                </div>
            </div>
            <input type="text" id="Busqueda" onkeyup="myFunction()" placeholder="Ingrese un nombre para buscar..."/>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th className="text-center">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>00001</td>
                        <td>Primer Producto</td>
                        <td>$ 5.000</td>
                        <td className="text-success"><b>Disponible</b></td>
                        <td className="text-center">
                        <button type="button" class="btn btn-primary btn-sm">editar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>00002</td>
                        <td>Segundo Producto</td>
                        <td>$ 10.000</td>
                        <td className="text-danger"><b>No disponible</b></td>
                        <td className="text-center">
                                {/* <a className="edit" title="Editar producto" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a> */}
                        </td>
                    </tr>
                    <tr>
                        <td>00003</td>
                        <td>Tercer Producto</td>
                        <td>$ 2.500</td>
                        <td className="text-danger"><b>No disponible</b></td>
                        <td className="text-center">
							{/* <a className="edit" title="Editar producto" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>       
        </Fragment>
    )
}