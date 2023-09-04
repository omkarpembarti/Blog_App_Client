import { CssBaseline, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import { useContext, useState } from 'react';
import { ThemeContext } from './contexts/Themecontext';
import BlogsContainer from './components/BlogsContainer';
import { Navigate, Outlet, Route, Routes } from 'react-router';
import NewBlog from './components/NewBlog';

import Register from './Routes/Register';
import Login from './Routes/Login';
import UserDataContext from './contexts/UserDataContext';

function App() {

  const { isDarkMode } = useContext(ThemeContext);
  //const [login, setLogin] = useState(true);
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  const themeMode = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });


  const PrivateRoute = ({ isUserAuthenticated }) => {

    if (isUserAuthenticated)
      return <Outlet />
    else
      return <Navigate to='/login' replace={true} />

  }

  return (
    <div className="App">
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
              <Route path='/myblogs' element={<>I am My blog container</>} exact />
            </Route>
            {/*
              <Route path='/register' element={<PrivateRoute />} exact>
                <Register />
                <Route />
                <Route path='/addBlog' element={<PrivateRoute></PrivateRoute>}>
                  <NewBlog />
                  <Route />
                  <Route path='/myblogs' element={ } >
                    <>I am My blog container</>
                    <Route />
  */}

          </Routes>
        </UserDataContext>
      </ThemeProvider>
    </div>
  );
}

export default App;
