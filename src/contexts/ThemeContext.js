import React, { useState, createContext } from "react";

export const ThemeContext = createContext();


export function ThemeProvider(props) {
    const [theme, setTheme] = useState('dark');
    
    function handleToogleTheme() {
        setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark'
        );
    }   

    return (
        <ThemeContext.Provider
            value={{
                theme,
                onToogleTheme: handleToogleTheme,
            }}
        >
            {props.children}

        </ThemeContext.Provider>
    )

}