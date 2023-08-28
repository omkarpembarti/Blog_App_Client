
import { Button, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import HocCredentialContainer from '../components/HocCredentialContainer'
import { useNavigate } from 'react-router';
import { API } from '../Services/api';
import { UserContext } from '../contexts/UserDataContext';
// import { userLogin } from '../constants/configs'

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false)

    const { setUserInfo } = useContext(UserContext);
    const onLoginClick = async () => {
        let response = await API.userLogin({ userName, password });
        if (response.data.msg === 'Incorrect password') {
            setPasswordError(true);
        } else {
            setPasswordError(false);
            setUserInfo((prevState) => ({ ...prevState, userName }))
        }
    }

    return (
        <HocCredentialContainer >
            <Typography variant='h3'>Blog-App</Typography>
            <TextField
                variant='standard'
                size='small'
                placeholder='Username'

                value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            <TextField
                error={passwordError}
                variant='standard'
                size='small'
                placeholder='Password'
                type='password'
                helperText={`${passwordError ? "Incorrect Password" : ''}`}
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant='contained' onClick={onLoginClick}>Login</Button>
            <Typography>OR</Typography>
            <Button
                variant='outlined'
                onClick={() => { navigate('/register') }}
            >New User? Register</Button>
        </HocCredentialContainer>
    )
}

export default Login
