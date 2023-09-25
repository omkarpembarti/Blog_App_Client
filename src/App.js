import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import React, { useContext, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router';

import './App.css';
import Header from './components/Header';
import { ThemeContext } from './contexts/Themecontext';
import BlogsContainer from './components/BlogsContainer';
import NewBlog from './components/NewBlog';
import Register from './Routes/Register';
import Login from './Routes/Login';
import UserDataContext from './contexts/UserDataContext';
import BlogDetails from './Routes/BlogDetails';
import store from './store';
import CustomSnackbar from './components/CustomSnackbar';
import MyBlogs from './Routes/MyBlogs';
import EditBlog from './components/EditBlog';



function App() {

  const { isDarkMode } = useContext(ThemeContext);
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  const themeMode = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: [
        'Nunito',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
    }
  });

  const PrivateRoute = ({ isUserAuthenticated }) => {
    if (isUserAuthenticated)
      return <Outlet />
    else
      return <Navigate to='/login' replace={true} />
  }

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={themeMode}>
          <UserDataContext>
            <CssBaseline />
            {isUserAuthenticated && <Header setUserAuthenticated={setUserAuthenticated} />}
            <Routes>
              <Route path='/login' element={<Login setUserAuthenticated={setUserAuthenticated} />} exact />
              <Route path='/register' element={<Register />} exact />
              <Route path='/' element={<PrivateRoute isUserAuthenticated={isUserAuthenticated} />}>
                <Route path='/' element={<BlogsContainer />} exact />
                <Route path='/addBlog' element={<NewBlog />} exact />
                <Route path='/editBlog/:id' element={<EditBlog />} exact />
                <Route path='/myblogs' element={<MyBlogs />} exact />
                <Route path='/blog/:id' element={<BlogDetails />} exact />
              </Route>
            </Routes>
            <CustomSnackbar></CustomSnackbar>
          </UserDataContext>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
