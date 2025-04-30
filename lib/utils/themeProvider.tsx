import React, { createContext, useContext, useState } from "react";

export type Theme = "default" | "akasia-365" | "ocean" | "rainforest";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "default",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  themeData: Theme;
}> = ({ children, themeData = "default" }) => {
  const [theme, setTheme] = useState<Theme>(themeData);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
