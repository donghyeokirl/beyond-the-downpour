import React, { useState, useEffect, useContext } from "react";

const defaultState = {
  dark: false,
  toggleDark: () => {},
  test: "State Check",
  setTest: () => {},
};

const ThemeContext = React.createContext(defaultState);

const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [test, setTest] = useState("State Check");

  const toggleDark = () => {
    const newDark = !dark;
    localStorage.setItem("dark", JSON.stringify(newDark));
    setDark(newDark);
  };

  useEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem("dark"));
    if (lsDark !== null) {
      setDark(lsDark);
    } else if (supportsDarkMode()) {
      setDark(true);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
        test,
        setTest,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
export default ThemeContext;
