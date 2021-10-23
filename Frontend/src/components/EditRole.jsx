import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editRole, getRole } from '../services/RoleService';
import { useHistory, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const initialValue = {
    _id:'',
    IdUsuario: '',
    nombreUsuario:'',
    rol: true      
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


export function EditRole() {
    const [role, setRole] = useState(initialValue);
    const {_id, IdUsuario, nombreUsuario, rol } = role;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        loadRoleData();
    }, [])

    const loadRoleData = async () => {
        let response = await getRole(id);
        setRole(response.data.data);
    }

    const onValueChange = (e) => {
        setRole({ ...role, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setRole({ ...rol, "rol": state });
    }

    const updateRoleData = async () => {
        await editRole(role);
        history.push('/getRoles');
    }

    const Cancel = () => {
        history.push('/getRoles');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar Rol</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="_id" value={_id} id="my-input" readOnly/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">IdUsuario</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="IdUsuario" value={IdUsuario} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">nombreUsuario</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nombreUsuario" value={nombreUsuario} id="my-input" />
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">rol</FormLabel>
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
                <Button variant="contained" onClick={(e) => updateRoleData()} color="primary">Editar Rol</Button>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={() => Cancel()} color="secondary" className={classes.buttonEdit}>Cancelar</Button>
            </FormControl>
            </ThemeProvider>
        </FormGroup>
    )
}
