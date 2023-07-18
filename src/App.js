import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider } from 'styled-components';


import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import themes from './styles/themes/index';
export const ThemeContext = createContext();


function App() {

  const [theme, setTheme] = useState('dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToogleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <ThemeProvider theme={
      currentTheme
    }>

      <GlobalStyle />
      <ThemeContext.Provider
        value={{
          onToogleTheme: handleToogleTheme,
          selectedTheme: theme
        }}
      >

        <Layout
          onToogleTheme={handleToogleTheme}
          selectedTheme={theme}
        />

      </ThemeContext.Provider>

    </ThemeProvider>
  );
};

export default App;
