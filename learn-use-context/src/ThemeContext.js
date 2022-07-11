import { useState, createContext } from 'react'

const ThemeContext = createContext();

function ThemeProvider({children}) {
    
  const[theme, setTheme] = useState('dark')

  function ChangeColor() {
    setTheme(theme === 'dark'? 'light': 'dark')
  }

  const value = {
    theme,
    ChangeColor
  }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {  ThemeContext, ThemeProvider }