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

function Preview() {
    const classes = useStyle();
    return (
        <Box sx={{ display: 'flex', p: 1 }}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <ThemeProvider theme={theme}>
                        <NavLink className={classes.tab_end} to="/registrarse">
                            Bienvenidos al aplicativo Lambda ,clickea sobre este texto para empezar y registrarte 
                        </NavLink>
                        
                       
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
        </Box>

    )
}

export default Preview
