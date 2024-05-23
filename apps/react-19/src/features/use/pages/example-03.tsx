import { cn } from "@/utils";
import { createContext, useState, use } from "react";
import type { PropsWithChildren } from "react";

type ThemeType = "dark" | "light";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

// Create a context object
const ThemeContext = createContext<ThemeContextType | null>(null);

// Create a provider component
const ThemeProvider = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
  // State to hold the current theme
  const [theme, setTheme] = useState<ThemeType>("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Provide the theme and toggleTheme function to the children
    <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
  );
};

const ThemedCard = () => {
  const { theme, toggleTheme } = use(ThemeContext) as ThemeContextType;

  return (
    <div
      className={cn(
        "max-w-md mx-auto shadow-md rounded-lg p-6",
        "transition-colors duration-300 ease-in-out",
        {
          "bg-white text-gray-800": theme === "light",
          "bg-gray-800 text-white": theme === "dark",
        },
      )}
    >
      <h1 className={`text-2xl mb-3 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
        Themed Card
      </h1>
      <p className={theme === "light" ? "text-gray-800" : "text-white"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non neque libero. Nullam mattis
        metus a sapien tempor, sit amet mollis est facilisis. Phasellus nec turpis nec dui venenatis
        vestibulum. Sed dapibus dapibus justo, at rhoncus risus malesuada vel. Proin eget leo id mi
        ullamcorper rhoncus.
      </p>
      {/* Toggle button */}
      <button
        onClick={toggleTheme}
        className={cn("mt-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2", {
          "bg-blue-500 hover:bg-blue-600 focus:ring-blue-600 text-white": theme === "light",
          "bg-gray-600 hover:bg-gray-700 focus:ring-gray-800": theme === "dark",
        })}
      >
        Switch theme
      </button>
    </div>
  );
};

const ThemePage = () => {
  return (
    <ThemeProvider>
      <ThemedCard />
    </ThemeProvider>
  );
};

export { ThemePage };
