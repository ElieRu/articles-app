
import { createContext, useState } from "react";

export const ThemeContext = createContext("light") 
export function ThemeContextProvider ({children}) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <>
        <button onClick={toggleTheme}>Change Theme</button>
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    </>
}