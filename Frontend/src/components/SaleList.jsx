import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { getSales,deleteSale} from '../services/SaleService';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../services/AuthService';

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
    button: {
        marginInline: '20px'
    },
    button_add: {
        textAlign: "right"
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

    const [user, setUser] = useState([]);
    const [sales, setSales] = useState([]);

    useEffect(() => {
        loadSalesData();
        setUser(getCurrentUser());
    }, [])

    const loadSalesData = async () =>{
        let response = await getSales();
        setSales(response.data.data);
    }

    const deleteSaleData = async (id) =>{
        let callbackUser = window.confirm('Esta seguro de eliminar la venta');
        if (callbackUser) {
            await deleteSale(id);
            loadSalesData();
        }
    }


    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell align="center">Id</TableCell>
                    <TableCell align="center">Valor</TableCell>
                    <TableCell align="center">Nombre Cliente</TableCell>
                    <TableCell align="center">Id Vendedor</TableCell>
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell></TableCell>
                    {/* {user && (
                            <TableCell className={classes.button_add}>
                                <Button variant="contained" color="primary" component={Link} to="ventas/agregar" >Agregar</Button>
                            </TableCell>
                        )} */}
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    sales.map(sale => (
                        <TableRow className={classes.row} key={sale._id}>
                            <TableCell align="center">{sale._id}</TableCell>
                            <TableCell align="center">{sale.valor}</TableCell>
                            <TableCell align="center">{sale.nombreCliente}</TableCell>
                            <TableCell align="center">{sale.idVendedor}</TableCell>
                            <TableCell align="center">{sale.fecha}</TableCell>
                            {user
                                    &&

                                    (<TableCell>
                                        <Button className={classes.button} variant="contained" component={Link} to={`sales/detalle/${sale._id}`} color="primary">Detalle</Button>
                                        <Button className={classes.button} variant="contained" component={Link} to={`editSale/${sale._id}`} color="info">Editar</Button>
                                        <Button variant="contained" color="secondary" onClick={() => deleteSaleData(sale._id)} >Eliminar</Button>
                                    </TableCell>)
                                }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
