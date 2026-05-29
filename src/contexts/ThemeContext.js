import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "light" });

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("Ошибка контекста");
  return theme;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
