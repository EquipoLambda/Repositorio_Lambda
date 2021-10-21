import React, {useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ProductList } from './components/ProductList';
import { CreateProduct } from './components/CreateProduct';
import { EditProduct } from './components/EditProduct';
import { SaleList } from './components/SaleList';
import { CreateSale } from './components/CreateSale';
import { EditSale } from './components/EditSale';
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {Logout} from "./components/Logout";
import { NotFound } from './components/NotFound';
import { Base } from './components/Base';
import {Logingoogle} from './components/Logingoogle';
import {fb} from './config/firebase'
import './css/lambda.css';


export function App() {
    
    const [usuario, setUsuario] = React.useState(null);
    useEffect(() => {
        fb.auth().onAuthStateChanged((usuarioFirebase) => {
          console.log("ya tienes sesión iniciada con:", usuarioFirebase);
          setUsuario(usuarioFirebase);
        });
      }, []);
    return (
        <BrowserRouter>
            
            {usuario ? <NavBar/> : <Logingoogle setUsuario={setUsuario} />}
            <Switch>

                <Route exact path="/" component={Base} />
                <Route exact path="/home" component={NavBar} />
                <Route exact path="/getProducts" component={ProductList} />
                <Route exact path="/addProduct" component={CreateProduct} />
                <Route exact path="/editProduct/:id" component={EditProduct} />
                <Route exact path="/getSales" component={SaleList} />
                <Route exact path="/addSale" component={CreateSale} />
                <Route exact path="/editSale/:id" component={EditSale} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registrarse" component={Signup} />
                <Route exact path="/logout" component={Logout} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


