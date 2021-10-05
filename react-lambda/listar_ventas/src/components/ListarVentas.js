import React from "react";
import './ListarVentas.css'

function ListarVentas(){

    return(

    <div>
        <div className="container">
        
            <div id = "table" class="table-responsive">
                    
                <div className="table-title">
                    <div className="row">
                        <h3 className="text-center"><b>Lista de ventas</b></h3>
                    </div>
                </div>
                    <input type="text" id="Busqueda" onkeyup="myFunction()" placeholder="Ingrese la venta para buscar..."/>
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th className="text-center">ID Venta</th>
                                <th className="text-center">Fecha</th>
                                <th className="text-center">ID Cliente</th>
                                <th className="text-center">Cliente</th>
                                <th className="text-center">Vendedor</th>
                                <th className="text-center">Total venta</th>
                                <th className="text-center">Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>00001</td>
                                <td>01-02-2021</td>
                                <td>12345</td>
                                <td>Cliente 1</td>
                                <td>Vendedor 1</td>
                                <td>$ 50.000</td>
                                <td className="text-center">
                                    <a className="edit" title="Editar producto" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>00002</td>
                                <td>05-05-2021</td>
                                <td>34567</td>
                                <td>Cliente 2</td>
                                <td>Vendedor 5</td>
                                <td>$ 100.000</td>
                                <td className="text-center">
                                    <a className="edit" title="Editar producto" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>00003</td>
                                <td>06-07-2021</td>
                                <td>23567</td>
                                <td>Cliente 3</td>
                                <td>Vendedor 2</td>
                                <td>$ 90.000</td>
                                <td className="text-center">
                                    <a className="edit" title="Editar producto" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                </td>
                            </tr>
                            <tr>
                                <td>00004</td>
                                <td>05-08-2021</td>
                                <td>98745</td>
                                <td>Cliente 4</td>
                                <td>Vendedor 1</td>
                                <td>$ 58.000</td>
                                <td className="text-center">
                                    <a className="edit" title="Editar producto" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>     
    </div>
    )
}

export default ListarVentas