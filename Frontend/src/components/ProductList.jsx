import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { getProducts} from '../services/ProductService';
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

export function ProductList() {
    const classes = useStyles();

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts();
    }, [])

    const getAllProducts = async () => {
        let response = await getProducts();
        console.log(response);
        setProducts(response.data.data);
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    {/* <TableCell align="center">Id</TableCell> */}
                    <TableCell align="center">Descripción</TableCell>
                    <TableCell align="center">Valor</TableCell>
                    <TableCell align="center">Estado</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    products.map(product => (
                        <TableRow className={classes.row} key={product._id}>
                            {/* <TableCell align="center">{product._id}</TableCell> */}
                            <TableCell align="center">{product.descripcion}</TableCell>
                            <TableCell align="center">{product.valor}</TableCell>
                            <TableCell align="center">{product.estado ? "Disponible" : "Agotado"}</TableCell>
                            <TableCell>
                                <ThemeProvider theme={theme}>
                                    <Button variant="contained" component={Link} to={`/editProduct/${product._id}`} color="primary" className={classes.buttonEdit}>Editar</Button>
                                </ThemeProvider>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
