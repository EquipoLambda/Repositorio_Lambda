import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { getRoles} from '../services/RoleService';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#5c1e17',
            color: '#ffffff'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    },
    buttonEdit: {
        '& > *': {
            color: '#FFFFFF'
        }
    }
});

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

export function RoleList() {
    const classes = useStyles();

    const [roles, setRoles] = useState([])

    useEffect(() => {
        getAllRoles();
    }, [])

    const getAllRoles = async () => {
        let response = await getRoles();
        console.log(response);
        setRoles(response.data.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell align="center">Id</TableCell>                    
                    <TableCell align="center">Nombre Usuario</TableCell>
                    <TableCell align="center">Rol</TableCell>
                    <TableCell align="center">Estado</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    roles.map(role => (
                        <TableRow className={classes.row} key={role._id}>
                            <TableCell align="center">{role._id}</TableCell>                            
                            <TableCell align="center">{role.nombreUsuario}</TableCell>
                            <TableCell align="center">{role.rol}</TableCell>
                            <TableCell align="center">{role.estado ? "Activo" : "Inactivo"}</TableCell>
                            <TableCell>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" component={Link} to={`/editRole/${role._id}`} color="primary" className={classes.buttonEdit}>Editar</Button>
                                </ThemeProvider>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
