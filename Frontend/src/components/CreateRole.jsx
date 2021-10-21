import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { addRole } from '../services/RoleService';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const initialValue = {    
    idUsuario: '',
    nombreUsuario:'',
    rol: true,       
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

export function CreateRole() {
    const [role, setRole] = useState(initialValue);
    const { idUsuario,nombreUsuario,rol } = role;

    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setRole({ ...role, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setRole({ ...role, "rol": state });
    }

    const addRoleData = async () => {
        await addRole(role);
        history.push('/getRoles');
    }

    const Cancel = () => {
        history.push('/getRoles');
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Crear Rol</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Id Usuario</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="idUsuario" value={idUsuario} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre Usuario</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nombreUsuario" value={nombreUsuario} id="my-input" />
            </FormControl>            
            
            <FormControl component="fieldset">
                <FormLabel component="legend">Rol</FormLabel>
                <RadioGroup
                    name='rol'
                    onChange={(e) => onStateChange(e.target.value === "Cliente")}
                    aria-label="rol"
                    defaultValue="Cliente"
                    value={rol ? "Cliente" : "Vendedor"}>
                    <FormControlLabel value="Cliente" control={<Radio />} label="Cliente" />                    
                    <FormControlLabel value="Vendedor" control={<Radio />} label="Vendedor" />
                </RadioGroup>
            </FormControl>
            <ThemeProvider theme={theme}>
            <FormControl>
                <Button variant="contained" onClick={(e) => addRoleData()} color="primary" className={classes.buttonEdit}>Agregar Usuario</Button>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={() => Cancel()} color="secondary" className={classes.buttonEdit}>Cancelar</Button>
            </FormControl>
            </ThemeProvider>
        </FormGroup>
    )
}