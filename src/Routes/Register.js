

import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import HocCredentialContainer from '../components/HocCredentialContainer'
import { useNavigate } from 'react-router';
import { API } from '../Services/api';

const Register = () => {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const onSignUpClick = async () => {
        let response = await API.userRegister({ userName, password });
        console.log(response);
    }

    return (
        <HocCredentialContainer>
            <Typography variant='h3'>Blog-App</Typography>
            <TextField variant='standard' size='small' placeholder='New Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextField variant='standard' size='small' placeholder='New Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant='contained' color='info' onClick={onSignUpClick}>Sign-Up</Button>
            <Typography variant='h7'>OR</Typography>
            <Button
                variant='contained'
                color='success'
                onClick={() => navigate('/login')}
            >Already a User? Login</Button>
        </HocCredentialContainer>
    )
}

export default Register
