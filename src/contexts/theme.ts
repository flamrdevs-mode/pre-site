import { createContext, useContext } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleMode: () => {},
});

ThemeContext.displayName = "ThemeContext";

function useThemeContext() {
  return useContext(ThemeContext);
}

export type { ThemeMode, ThemeContextType };
export { useThemeContext };
export default ThemeContext;
