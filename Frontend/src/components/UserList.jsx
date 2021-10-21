import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { getUsers} from '../services/UsersService';
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

export function UserList() {
    const classes = useStyles();

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell align="center">Nombre Completo</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Estado</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row} key={user._id}>
                            <TableCell align="center">{user.fullName}</TableCell>
                            <TableCell align="center">{user.email}</TableCell>
                            <TableCell align="center">{user.estado ? "Activo" : "Inactivo"}</TableCell>
                            <TableCell>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" component={Link} to={`/editUser/${user._id}`} color="primary" className={classes.buttonEdit}>Editar</Button>
                                </ThemeProvider>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
