
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import HocCredentialContainer from '../components/HocCredentialContainer'
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    return (
        <HocCredentialContainer>
            <Typography variant='h3'>Blog-App</Typography>
            <TextField variant='standard' size='small' placeholder='Username' />
            <TextField variant='standard' size='small' placeholder='Password' type='password' />
            <Button variant='contained'>Login</Button>
            <Typography>OR</Typography>
            <Button
                variant='outlined'
                onClick={() => { navigate('/register') }}
            >New User? Register</Button>
        </HocCredentialContainer>
    )
}

export default Login
