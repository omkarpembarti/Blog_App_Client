import { createContext, useState } from "react";
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(isDarkMode => !isDarkMode);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;