import React from 'react'
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
import { UserList } from './components/UserList';
import { EditUser } from './components/EditUser';
//import { getCurrentUser } from './services/AuthService';
import './css/lambda.css';

export function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Base} />
                <Route exact path="/getProducts" component={ProductList} />
                <Route exact path="/addProduct" component={CreateProduct} />
                <Route exact path="/editProduct/:id" component={EditProduct} />
                <Route exact path="/getSales" component={SaleList} />
                <Route exact path="/addSale" component={CreateSale} />
                <Route exact path="/editSale/:id" component={EditSale} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registrarse" component={Signup} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/getUsers" component={UserList} />
                <Route exact path="/editUser/:id" component={EditUser} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}


