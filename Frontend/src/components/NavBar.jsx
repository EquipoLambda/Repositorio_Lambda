import React from 'react';
import { Button, makeStyles, AppBar, Toolbar, Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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
    tabs2: {
        color: '#000000',
        marginRight: 17,
        textDecoration: 'none',
        fontSize: 17
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

    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClose = () =>{
        setAnchorEl(null)
    }
    const openMenu = (event) =>{
        setAnchorEl(event.currentTarget)
    }
    const open = Boolean(anchorEl);

    return (
            <Box sx={{ display: 'flex', p: 1 }}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                <Button
                    //variant = "contained"
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={openMenu}
                    
                >MENU
                </Button>
                
                <Menu
                    id="lame-menu"
                    anchorEl = {anchorEl}
                    keepMounted
                     
                    open = {Boolean(anchorEl)}
                    onClose = {handleClose}
                    >

                <MenuItem onClick={handleClose} className={classes.header}> <NavLink className={classes.tabs2} to="/">Inicio</NavLink></MenuItem>   
                <MenuItem onClick={handleClose} className={classes.header}> <NavLink className={classes.tabs2} to="/getProducts">Listar Producto</NavLink></MenuItem> 
                <MenuItem onClick={handleClose} className={classes.header}> <NavLink className={classes.tabs2} to="/addProduct">Crear Producto</NavLink></MenuItem> 
                <MenuItem onClick={handleClose} className={classes.header}> <NavLink className={classes.tabs2} to="/getSales">Listar Ventas</NavLink></MenuItem> 
                <MenuItem onClick={handleClose} className={classes.header}> <NavLink className={classes.tabs2} to="/addSale">Crear Venta</NavLink></MenuItem> 
                <MenuItem onClick={handleClose} className={classes.header}> <NavLink className={classes.tabs2} to="/getUsers">Listar Usuarios</NavLink></MenuItem>
                </Menu>        
                </Box>
                        
                   
               
                    <ThemeProvider theme={theme} >
                        <NavLink className={classes.tab_end} to="/registrarse">
                            <Button color="secondary" >registrarse</Button>
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
