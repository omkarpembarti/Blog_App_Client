import { CssBaseline, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import { useContext, useState } from 'react';
import { ThemeContext } from './contexts/Themecontext';
import BlogsContainer from './components/BlogsContainer';
import { Route, Routes } from 'react-router';
import NewBlog from './components/NewBlog';

import Register from './Routes/Register';
import Login from './Routes/Login';

function App() {

  const { isDarkMode } = useContext(ThemeContext);
  const [login, setLogin] = useState(true);
  const themeMode = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <div className="App">
        {login && <Header />}
        <Routes>
          <Route path='/' element={<BlogsContainer />} exact />
          <Route path='/login' element={<Login />} exact />
          <Route path='/register' element={<Register />} exact />
          <Route path='/addBlog' element={<NewBlog />} />

          <Route path='/myblogs' element={<>
            I am My blog container
          </>} />

        </Routes>

      </div>
    </ThemeProvider>
  );
}

export default App;
