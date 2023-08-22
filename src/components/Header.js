import { useState, useContext, useEffect, useRef } from 'react';
import { AppBar, Box, Menu, MenuItem, IconButton, Typography, Toolbar, ListItemIcon, ListItemText, Button, Divider } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ThemeContext } from '../contexts/Themecontext';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { useLocation, useNavigate } from 'react-router';

export default function Header() {

    // const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useContext(ThemeContext);
    const { isDarkMode, toggleTheme } = theme;
    const navigate = useNavigate();
    const location = useLocation();
    const writeBtnRef = useRef(null);

    useEffect(() => {
        const path = location.pathname;
        if (path.includes('/addBlog'))
            writeBtnRef.current.style.display = 'none';
        else
            writeBtnRef.current.style.display = '';
    })

    const OnWriteBtnClick = () => {
        navigate('/addBlog');
    }

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }} >

            <AppBar position="static">
                <Toolbar>
                    <Typography onClick={() => navigate('/')} variant="h4" component="div" sx={{ 'flexGrow': 1, 'fontFamily': 'fantasy' }}>
                        Blogs-App
                    </Typography>
                    <Button
                        ref={writeBtnRef}
                        variant='contained'
                        color='warning'
                        sx={{ 'borderRadius': '20px' }}
                        startIcon={<DriveFileRenameOutlineOutlinedIcon />}
                        onClick={OnWriteBtnClick}>
                        Write
                    </Button>

                    {(
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}

                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >

                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <AutoStoriesIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        My Blogs
                                    </ListItemText>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={() => { toggleTheme(); handleClose() }}>
                                    <ListItemIcon>
                                        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                                    </ListItemText>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Logout
                                    </ListItemText>
                                </MenuItem>

                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}