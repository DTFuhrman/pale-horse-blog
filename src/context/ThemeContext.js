import React, { useState, useEffect } from "react"

const defaultState = {
  dark: false,
  toggleDark: () => {},
}

const ThemeContext = React.createContext(defaultState)

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    let isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark"));
    if (lsDark) {
      setDark(true);
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }