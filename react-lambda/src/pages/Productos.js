import React, { Component } from "react";
import "../css/RolCRUD.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as AiIcons from 'react-icons/ai';
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

import { InputGroup, FormControl, Form} from "react-bootstrap";

const data = [
  {id:1, Descripcion:"Producto1", Valorunitario:"2000", Estado:"Disponible" },
  {id:2, Descripcion:"Producto2", Valorunitario:"500", Estado:"Disponible" },
  {id:3, Descripcion:"Producto3", Valorunitario:"75000", Estado:"No disponible" },
  {id:4, Descripcion:"Producto4", Valorunitario:"300000", Estado:"No disponible" },
]

export default class CRUDProductos extends Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Descripcion: "",
      Valorunitario: "",
      Estado: "",
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
        arreglo[contador].Descripcion = dato.Descripcion;
        arreglo[contador].Valorunitario = dato.Valorunitario;
        arreglo[contador].Estado = dato.Estado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };
  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    valorNuevo.Estado = "Disponible";
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
          <Button id="btn-5c1e17" onClick={() => this.mostrarModalInsertar()}>
            Crear Producto
          </Button>
          <br />
          <h3 className="text-center">
            <b>Lista de Productos</b>
          </h3>
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Descripcion}</td>
                  <td>${dato.Valorunitario}</td>
                  <td>{dato.Estado}</td>
                  <td>
                    <Button
                      id="btn-e3b04b"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Producto</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneCreditCard />
                </InputGroup.Text>
                <FormControl
                  readOnly
                  type="number"
                  value={this.state.form.id}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineShoppingCart />
                </InputGroup.Text>
                <FormControl
                  name="Descripcion"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.Descripcion}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillDollarCircle/>
                </InputGroup.Text>
                <FormControl
                  name="Valorunitario"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.form.Valorunitario}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiTwotoneTags/>
                </InputGroup.Text>
                <Form.Select
                  className="form-control"
                  name="Estado"
                  onChange={this.handleChange}
                  value={this.state.form.Estado}
                >
                  <option value="Disponible">Disponible</option>
                  <option value="No Disponible">No Disponible</option>
                </Form.Select>
              </InputGroup>
            </FormGroup>
 
          </ModalBody>

          <ModalFooter>
            <Button
              id="btn-e3b04b"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button id="btn-5c1e17" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <h3>Insertar producto</h3>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiOutlineShoppingCart />
                </InputGroup.Text>
                <FormControl
                  name="Descripcion"
                  type="text"
                  placeholder="Nombre Producto"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="fondoicono" class="input-group-text">
                <AiIcons.AiFillDollarCircle />
                </InputGroup.Text>
                <FormControl
                  name="Valorunitario"
                  type="number"
                  placeholder="Valor Unitario"
                  onChange={this.handleChange}
                />
              </InputGroup>
            </FormGroup>
         
          </ModalBody>

          <ModalFooter>
            <Button 
              id="btn-e3b04b"
              onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button
              id="btn-5c1e17"
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