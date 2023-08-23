

import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import HocCredentialContainer from '../components/HocCredentialContainer'
import { useNavigate } from 'react-router'

const Register = () => {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [chkPassword, setChkPassword] = useState('');


    return (
        <HocCredentialContainer>
            <Typography variant='h3'>Blog-App</Typography>
            <TextField variant='standard' size='small' placeholder='New Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <TextField variant='standard' size='small' placeholder='New Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField variant='standard' size='small' placeholder='Re-Enter Password' type='password' value={chkPassword} onChange={(e) => setChkPassword(e.target.value)} />
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
