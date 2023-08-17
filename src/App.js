import { CssBaseline, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from './contexts/Themecontext';
import BlogsContainer from './components/BlogsContainer';
import { Route, Routes } from 'react-router';
import NewBlog from './components/NewBlog';

function App() {

  const { isDarkMode } = useContext(ThemeContext);
  const themeMode = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<BlogsContainer />} exact />

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
