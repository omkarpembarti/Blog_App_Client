
import { Button, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import HocCredentialContainer from '../components/HocCredentialContainer'
import { useNavigate } from 'react-router';
import { API } from '../Services/api';
import { UserContext } from '../contexts/UserDataContext';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../slices/blogSlice';
const Login = ({ setUserAuthenticated }) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const dispatch = useDispatch();

    const { setUserInfo } = useContext(UserContext);
    const onLoginClick = async () => {

        let response = await API.userLogin({ userName, password });
        if (response.data.msg === 'Invalid Credentials') {
            setUserNameError(true);

        } else {
            if (response.data.msg === 'Incorrect password') {
                setPasswordError(true);
            } else {
                setUserNameError(false);
                setPasswordError(false);
                setUserAuthenticated(true);
                sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
                dispatch(getBlogs());
                setUserInfo((prevState) => ({ ...prevState, userName: response.data.userName, name: response.data.name }))
                navigate('/');
            }
        }
    }

    return (
        <HocCredentialContainer >
            <Typography variant='h3' sx={{ 'fontFamily': 'Dancing Script, cursive', 'fontWeight': 'bold' }}>Blog-App</Typography>
            <TextField
                error={userNameError}
                variant='standard'
                size='small'
                placeholder='Username'
                helperText={`${userNameError ? "Incorrect Username" : ''}`}
                value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            <TextField
                error={passwordError}
                variant='standard'
                size='small'
                placeholder='Password'
                type='password'
                helperText={`${passwordError ? "Incorrect Password" : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
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
