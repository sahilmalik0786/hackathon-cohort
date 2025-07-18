   import React, { createContext, useState, useContext } from 'react';
 

    const ThemeContext = createContext();

    export const ThemeProvider = ({ children }) => {
      const [DarkTheme, setDarkTheme] = useState(false);

      const toggleTheme = () => {
        setDarkTheme((prev) => !prev 
        );
      };

      return (
        <ThemeContext.Provider value={{ DarkTheme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
    };

    export const useTheme = () => useContext(ThemeContext);