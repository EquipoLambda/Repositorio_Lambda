import React, { useState, useEffect } from 'react';
/* import { NavLink } from "react-router-dom"; */
import { fb } from "../config/firebase";



export  const Logingoogle= (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    fb
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    fb
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };


  
/*   const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email)
        console.log("estas logueado")
      } else {
        console.log("no logueado")
      }
    })
  }, [])
 */
/*   const provider = new firebase.auth.GoogleAuthProvider();
  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log("estoy logeado con google")
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = error.credential
      console.log(`error en login errorCode:${errorCode}, msg:${errorMessage}`)
    });
} */
/* const signOut = () => {
  firebase.auth().signOut();
} */



  return (
    <div>
      <h1> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="emailField"> Correo </label>
        <input type="email" id="emailField" />
        <label htmlFor="passwordField"> Contraseña </label>
        <input type="password" id="passwordField" />
        <button type="submit">
          {" "}
          {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
        </button>
      </form>
      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando
          ? "¿Ya tienes cuenta? ¡Inicia sesión"
          : "¿No tienes cuenta? ¡Regístrate gratis!"}
      </button>
      <button> google </button>
     {/*  { user ? (
          <div>
            {user}
            <button onClick={signOut}> Logout </button>
          </div>
      ):
      (
        <button onClick={signInWithGoogle}> google </button>
      )}: */}
    </div>
  );
};


//<NavLink to="/home">
//<Button color="secondary">Login google</Button>
//</NavLink>//