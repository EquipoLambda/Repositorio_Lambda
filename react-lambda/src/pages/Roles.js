import React from 'react';
import "../css/Roles.css";
import * as FaIcons from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUserTie,
//   faTasks,
//   faIdCard,
//   faEdit,
//   faBuilding,
// } from "@fortawesome/free-solid-svg-icons";
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
  { id: 1, nameRol: "Administrador", description: "", estadoRol: "Activo" },
  { id: 2, nameRol: "Vendedor", description: "", estadoRol: "Inactivo" },
];

class Roles extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nameRol: "",
      description: "",
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

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].nameRol = dato.nameRol;
        arreglo[contador].description = dato.description;
        arreglo[contador].estadoRol = dato.estadoRol;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    valorNuevo.estadoRol="Activo";
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
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
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <h3 className="text-center">
            <b>Lista de Roles</b>
          </h3>
          <br />
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
                    </Button>
                    {/* <Button className="fondoicono"><FontAwesomeIcon icon={faEdit}/></Button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Rol</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                <label>
               Id:
              </label>
                  {/* <span id="fondoicono" class="input-group-text"> */}
                  {/* <FaIcons.FaBars /> */}
                    {/* <FontAwesomeIcon icon={faIdCard} /> */}
                  {/* </span> */}
                </div>
                <input
                  className="form-control"
                  readOnly
                  type="number"
                  value={this.state.form.id}
                />
              </div>
            </FormGroup>

            <FormGroup>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span id="fondoicono" className="input-group-text">
                    {/* <FontAwesomeIcon icon={faUserTie} /> */}
                  </span>
                </div>
                <input
                  className="form-control"
                  name="nameRol"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.nameRol}
                />
              </div>
            </FormGroup>

            <FormGroup>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span id="fondoicono" className="input-group-text">
                    {/* <FontAwesomeIcon icon={faBuilding} /> */}
                  </span>
                </div>
                <select
                  className="form-control"
                  name="estadoRol"
                  onChange={this.handleChange}
                  value={this.state.form.estadoRol}
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </FormGroup>

            <FormGroup>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span id="fondoicono" className="input-group-text">
                    {/* <FontAwesomeIcon icon={faTasks} /> */}
                  </span>
                </div>
                <textarea
                  className="form-control"
                  name="description"
                  cols="40"
                  rows="5"
                  onChange={this.handleChange}
                  value={this.state.form.description}
                />
              </div>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <h3>Crear Rol</h3>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span id="fondoicono" className="input-group-text">
                    {/* <FontAwesomeIcon icon={faUserTie} /> */}
                  </span>
                </div>
                <input
                  className="form-control"
                  name="nameRol"
                  type="text"
                  placeholder="Nombre del Rol"
                  onChange={this.handleChange}
                />
              </div>
            </FormGroup>

            <FormGroup>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span id="fondoicono" className="input-group-text">
                    {/* <FontAwesomeIcon icon={faTasks} /> */}
                  </span>
                </div>
                <textarea
                  className="form-control"
                  name="description"
                  cols="40"
                  rows="5"
                  placeholder="Coloque una breve descripción del rol"
                  onChange={this.handleChange}
                />
              </div>
            </FormGroup>
            <p className="text-center">
              ¿El rol ya fue creado? <a href="">Buscar Rol</a>
            </p>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Roles;