import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { getSales} from '../services/SaleService';
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

export function SaleList() {
    const classes = useStyles();

    const [sales, setSales] = useState([])

    useEffect(() => {
        getAllSales();
    }, [])

    const getAllSales = async () => {
        let response = await getSales();
        console.log(response);
        setSales(response.data.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Valor</TableCell>
                    <TableCell align="center">Nombre Cliente</TableCell>
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell align="center">Estado</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    sales.map(sale => (
                        <TableRow className={classes.row} key={sale._id}>
                            <TableCell align="center">{sale._id}</TableCell>
                            <TableCell align="center">{sale.valor}</TableCell>
                            <TableCell align="center">{sale.nombreCliente}</TableCell>
                            <TableCell align="center">{sale.fecha}</TableCell>
                            <TableCell align="center">{sale.estado ? "Disponible" : "Agotado"}</TableCell>
                            <TableCell>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" component={Link} to={`/editSale/${sale._id}`} color="primary" className={classes.buttonEdit}>Editar</Button>
                                </ThemeProvider>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
