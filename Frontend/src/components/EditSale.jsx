import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editSale, getSale } from '../services/SaleService';
import { useHistory, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const initialValue = {
    _id:'',
    valor: '',
    idCliente: '',
    nombreCliente:'',
    idVendedor:'',
    productos:[{
        id:'',
        valor:'',
        cantidad:''
    }],
    estado: true,
    fecha:''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
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


export function EditSale() {
    const [sale, setSale] = useState(initialValue);
    const {_id, valor, idCliente,nombreCliente,idVendedor,productos, estado,fecha } = sale;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        loadSaleData();
    }, [])

    const loadSaleData = async () => {
        let response = await getSale(id);
        setSale(response.data.data);
    }

    const onValueChange = (e) => {
        setSale({ ...sale, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setSale({ ...sale, "estado": state });
    }

    const updateSaleData = async () => {
        await editSale(sale);
        history.push('/getSales');
    }

    const Cancel = () => {
        history.push('/getSales');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar Venta</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="_id" value={_id} id="my-input" readOnly/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Valor</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="valor" value={valor} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Id Cliente</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="idCliente" value={idCliente} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre Cliente</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nombreCliente" value={nombreCliente} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Id Vendedor</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="idVendedor" value={idVendedor} id="my-input" />
            </FormControl>
            <FormGroup>
            <FormControl>
                <InputLabel htmlFor="my-input">Id Producto</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="productos.id" value={productos.id} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Valor Producto</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="productos.valor" value={productos.valor} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Cantidad Producto</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="productos.cantidad" value={productos.cantidad} id="my-input" />
            </FormControl>
            </FormGroup>
            <FormControl component="fieldset">
                <FormLabel component="legend">Estado</FormLabel>
                <RadioGroup
                    name='estado'
                    onChange={(e) => onStateChange(e.target.value === "disponible")}
                    aria-label="estado"
                    defaultValue="disponible"
                    value={estado ? "disponible" : "noDisponible"}>
                    <FormControlLabel value="disponible" control={<Radio />} label="Disponible" />
                    <FormControlLabel value="noDisponible" control={<Radio />} label="No Disponible" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Fecha</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="fecha" value={fecha} id="my-input" readOnly />
            </FormControl>
            <ThemeProvider theme={theme}>
            <FormControl>
                <Button variant="contained" onClick={(e) => updateSaleData()} color="primary">Editar Venta</Button>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={() => Cancel()} color="secondary" className={classes.buttonEdit}>Cancelar</Button>
            </FormControl>
            </ThemeProvider>
        </FormGroup>
    )
}
