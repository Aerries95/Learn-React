import { useContext, createContext, useState, ReactNode } from "react";

type ThemeContextType = {
  isDark: boolean;
  switchDark: () => void;
  switchLight: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const switchDark = () => {
    setIsDark(true);
  };

  const switchLight = () => {
    setIsDark(false);
  };
  const contextValue: ThemeContextType = {
    isDark,
    switchDark,
    switchLight,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
