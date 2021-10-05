import React from "react";
import "./ListarRol.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nameRol: "Administrador", estadoRol: "Activo" },
  { id: 2, nameRol: "Vendedor", estadoRol: "Inactivo" },
];

class ListarRol extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nameRol: "",
      estadoRol: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nameRol = dato.nameRol;
        arreglo[contador].estadoRol = dato.estadoRol;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container className="text-center ">
          <br/>
            <h3><b>Lista de Roles</b></h3>
            <input type="text" id="Busqueda" onkeyup={"myFunction()"} placeholder="Ingrese un nombre para buscar..."/>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nameRol}</td>
                  <td>{dato.estadoRol}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    {/* <a className="edit" title="Editar" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Rol</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nameRol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nameRol}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Estado: 
              </label>
              <input
                className="form-control"
                name="estadoRol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.estadoRol}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default ListarRol;