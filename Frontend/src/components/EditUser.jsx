import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editUser, getUser } from '../services/UsersService';
import { useHistory, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const initialValue = {
    _id:'',
    fullName: '',
    email: '',
    password:'',
    estado:true
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


export function EditUser() {
    const [users, setUser] = useState(initialValue);
    const {_id, fullName, email, password, estado } = users;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
        let response = await getUser(id);
        setUser(response.data.data);
    }

    const onValueChange = (e) => {
        setUser({ ...users, [e.target.name]: e.target.value });
    }

    
    const onStateChange = (state) => {
        setUser({ ...users, "estado": state });
    }
    
    const updateUserData = async () => {
        await editUser(users);
        history.push('/getUsers');
    }

    const Cancel = () => {
        history.push('/getUsers');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar Usuario</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Id</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="_id" value={_id} id="my-input" readOnly/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre Completo</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="fullName" value={fullName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Contraseña</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="password" value={password} id="my-input" />
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Estado</FormLabel>
                <RadioGroup
                    name='estado'
                    onChange={(e) => onStateChange(e.target.value === "activo")}
                    aria-label="estado"
                    defaultValue="activo"
                    value={estado ? "activo" : "noActivo"}>
                    <FormControlLabel value="activo" control={<Radio />} label="Activo" />
                    <FormControlLabel value="noActivo" control={<Radio />} label="Inactivo" />
                </RadioGroup>
            </FormControl>
            <ThemeProvider theme={theme}>
            <FormControl>
                <Button variant="contained" onClick={(e) => updateUserData()} color="primary">Editar Usuario</Button>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={() => Cancel()} color="secondary" className={classes.buttonEdit}>Cancelar</Button>
            </FormControl>
            </ThemeProvider>
        </FormGroup>
    )
}