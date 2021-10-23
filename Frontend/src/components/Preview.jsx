import React from 'react';
import { Button, makeStyles, AppBar, Toolbar, Box, Paper, StepButton } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/bgLambda.png';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";

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
    },

    presentation: {
        border: 10,
        borderColor: '#e3b04b',
        top: 0,
        bottom: 0,
        left: 60,
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: -50,

    },




})

function Preview() {
    const classes = useStyle();
    return (
        <div className={classes.presentation}>
            {/* <Box sx={{ display: 'flex', p: 1 }}  variant="absolute" className={classes.presentation} square > */}
            <NavLink to="/registrarse">
                <img src={logo} alt="Ingresa" sx={{ display: 'flex', p: 1 }} variant="absolute" />
            </NavLink>
            {/*  <AppBar position="static" className={classes.header}>
                    <Toolbar>
                        <ThemeProvider theme={theme}>
                            <NavLink className={classes.tab_end} to="/registrarse">
                                
                                Bienvenidos al aplicativo Lambda ,clickea sobre este texto para empezar y registrarte
                            </NavLink>

                        </ThemeProvider>
                    </Toolbar>
                </AppBar> */}
            {/* </Box> */}

            {/*  <Box   variant="absolute" className={classes.presentation} square >
                <img src={logo} alt="Ingresa"  /> 
                </Box> */}

            {/*  <Box   variant="absolute" className={classes.presentation} square >
                <img src={logo} alt="Ingresa"  />                
                <Box  className={classes.presentation}>
                    <CardContent>
                    <Typography variant="h4" component="div" color="#5c1e17" >
                            Bienvenido a la App
                        </Typography> 
                        <Typography variant="h3" component="div" color="#5c1e17">
                            <b>EQUIPO LAMBDA</b>
                        </Typography>                   
                    </CardContent > 
                    <Box sx={{typography: 'body1', color: '#5c1e17', display: 'inline', fontSize: 30, boxShadow: 1  }}> 
                    Ingresa aquí </Box>                   
                </Box>
            </Box> */}

        </div>


    )
}

export default Preview
