import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons';

const baseUrl='http://localhost:3000/usuario/'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function App() {
const styles= useStyles();
  const [data, setData]=useState([]);
  const [modalInsertar, setModalInsertar]=useState(false);
  const [modalEditar, setModalEditar]=useState(false);
  const [modalEliminar, setModalEliminar]=useState(false);

  const [usuarioSeleccionado, setUsuarioSeleccionado]=useState({
    cedula: '',
    usuario:'',
    correo: '',
    celular: '',
    rol: '',
    estado: '',
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setUsuarioSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(usuarioSeleccionado);
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data.data);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, usuarioSeleccionado)
    .then(response=>{
      setData(data.concat(response.data.data))
      abrirCerrarModalInsertar()
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+usuarioSeleccionado._id, usuarioSeleccionado)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(usuarios=>{
        if(usuarioSeleccionado._id===usuarios._id){
          usuarios.cedula=usuarioSeleccionado.cedula;
          usuarios.usuario=usuarioSeleccionado.usuario;
          usuarios.correo=usuarioSeleccionado.correo;
          usuarios.celular=usuarioSeleccionado.celular;
          usuarios.rol=usuarioSeleccionado.rol;
          usuarios.estado=usuarioSeleccionado.estado;
        }
      })
      setData(dataNueva);
      abrirCerrarModalEditar();
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl+usuarioSeleccionado._id)
    .then(response=>{
      setData(data.filter(usuarios=>usuarios.id!==usuarioSeleccionado.id));
      abrirCerrarModalEliminar();
    })
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const seleccionarUsuario=(usuarios, caso)=>{
    setUsuarioSeleccionado(usuarios);
    (caso==='Editar')?abrirCerrarModalEditar():abrirCerrarModalEliminar()
  }

  useEffect(async()=>{
    await peticionGet();
  },[])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Usuario</h3>
      <TextField name="cedula" className={styles.inputMaterial} label="Cedula" onChange={handleChange}/>
      <br />
      <TextField name="usuario" className={styles.inputMaterial} label="Usuario" onChange={handleChange}/>
      <br />
      <TextField name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange}/>
      <br />
      <TextField name="celular" className={styles.inputMaterial} label="Celular" onChange={handleChange}/>
      <br />
      <TextField name="rol" className={styles.inputMaterial} label="Rol" onChange={handleChange}/>
      <br />
      <TextField name="estado" className={styles.inputMaterial} label="Estado" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary"  onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Usuario</h3>
      <TextField name="cedula" className={styles.inputMaterial} label="Cedula" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.cedula}/>
      <br />
      <TextField name="usuario" className={styles.inputMaterial} label="Usuario" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.usuario}/>
      <br />
      <TextField name="correo" className={styles.inputMaterial} label="Correo" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.correo}/>
      <br />
      <TextField name="celular" className={styles.inputMaterial} label="Celular" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.celular}/>
      <br />
      <TextField name="rol" className={styles.inputMaterial} label="Rol" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.rol}/>
      <br />
      <TextField name="estado" className={styles.inputMaterial} label="Estado" onChange={handleChange} value={usuarioSeleccionado && usuarioSeleccionado.estado}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar al Usuario <b>{usuarioSeleccionado && usuarioSeleccionado.cedula}</b> ? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()} >Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )


  return (
    <div className="App">
      <br />
    <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar</Button>
      <br /><br />
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell>Cedula</TableCell>
             <TableCell>Usuario</TableCell>
             <TableCell>Correo</TableCell>
             <TableCell>Celular</TableCell>
             <TableCell>Rol</TableCell>
             <TableCell>Estado</TableCell>
             <TableCell>Acciones</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(usuarios=>(
             <TableRow key={usuarios.id}>
               <TableCell>{usuarios.cedula}</TableCell>
               <TableCell>{usuarios.usuario}</TableCell>
               <TableCell>{usuarios.correo}</TableCell>
               <TableCell>{usuarios.celular}</TableCell>
               <TableCell>{usuarios.rol}</TableCell>
               <TableCell>{usuarios.estado}</TableCell>
               <TableCell>
                 <Edit className={styles.iconos} onClick={()=>seleccionarUsuario(usuarios, 'Editar')}/>
                 &nbsp;&nbsp;&nbsp;
                 <Delete  className={styles.iconos} onClick={()=>seleccionarUsuario(usuarios, 'Eliminar')}/>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     
     <Modal
     open={modalInsertar}
     onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
     </Modal>

     <Modal
     open={modalEditar}
     onClose={abrirCerrarModalEditar}>
        {bodyEditar}
     </Modal>

     <Modal
     open={modalEliminar}
     onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
     </Modal>
    </div>
  );
}

export default App;
