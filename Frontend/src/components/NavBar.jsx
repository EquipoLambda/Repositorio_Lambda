import React from 'react';
import { Button, makeStyles, AppBar, Toolbar, Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e3b04b'
        },
        secondary: {
            main: '#5c1e17'
        }
    },
});

const useStyle = makeStyles({
    header: {
        background: '#e3b04b'
    },
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    },
    tab_end: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20,
        alignItems: 'end'

    },
    buttonEdit: {
        '& > *': {
            color: '#FFFFFF'
        }
    }
})

export function NavBar() {

    const classes = useStyle();

    return (
        <Box sx={{ display: 'flex', p: 1 }}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <NavLink className={classes.tabs} to="/">Inicio</NavLink>
                        <NavLink className={classes.tabs} to="/getProducts">Listar Producto</NavLink>
                        <NavLink className={classes.tabs} to="/addProduct">Crear Producto</NavLink>
                        <NavLink className={classes.tabs} to="/getSales">Listar Ventas</NavLink>
                        <NavLink className={classes.tabs} to="/addSale">Crear Venta</NavLink>

                        <NavLink className={classes.tabs} to="/getRoles">♦Listar Rol♦</NavLink>
                        <NavLink className={classes.tabs} to="/addRole">•Crear Rol•</NavLink>

                    </Box>
                    <ThemeProvider theme={theme}>
                        <NavLink className={classes.tab_end} to="/registrarse">
                            <Button color="secondary">registrarse</Button>
                        </NavLink>
                        <NavLink className={classes.tab_end} to="/login">
                            <Button color="secondary">
                                Login
                            </Button>
                        </NavLink>
                        <NavLink className={classes.tab_end} to="/logout">
                            <Button color="secondary">
                                Logout
                            </Button>
                        </NavLink>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
        </Box>

    )
}
