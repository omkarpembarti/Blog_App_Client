

import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import HocCredentialContainer from '../components/HocCredentialContainer'
import { useNavigate } from 'react-router'

const Register = () => {

    const navigate = useNavigate();
    return (
        <HocCredentialContainer>
            <Typography variant='h3'>Blog-App</Typography>
            <TextField variant='standard' size='small' placeholder='New Username' />
            <TextField variant='standard' size='small' placeholder='New Password' type='password' />
            <TextField variant='standard' size='small' placeholder='Re-Enter Password' type='password' />
            <Button variant='contained' color='info'>Sign-Up</Button>
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
