import { CssBaseline, createTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import { useContext } from 'react';
import { ThemeContext } from './contexts/Themecontext';

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
        <section>
          I am section.
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
