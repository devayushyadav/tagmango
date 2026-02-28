import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const lightTheme = {
  // Backgrounds
  bg: {
    primary: "#ffffff",
    secondary: "#f9fafb",
    tertiary: "#f3f4f6",
  },
  // Text colors
  text: {
    primary: "#111827",
    secondary: "#6b7280",
    tertiary: "#9ca3af",
  },
  // Borders & Dividers
  border: {
    light: "rgba(0, 0, 0, 0.04)",
    medium: "rgba(8, 0, 49, 0.27)",
    dark: "rgba(15, 23, 42, 0.08)",
  },
  // Shadows
  shadow: {
    sm: "rgba(0, 0, 0, 0.04)",
    md: "rgba(0, 0, 0, 0.08)",
    lg: "rgba(0, 0, 0, 0.12)",
  },
  // Accent colors
  accent: {
    purple: "#7c3aed",
    green: "#218358",
    greenBg: "#e6f6eb",
  },
  // Component specific
  streakPill: {
    bg: "#30004010",
    text: "#211f26",
  },
  icon: {
    bg: "transparent",
    border: "rgba(8, 0, 49, 0.27)",
  },
  mode: "light",
};

export const darkTheme = {
  // Backgrounds
  bg: {
    primary: "#000000",
    secondary: "#0a0a0a",
    tertiary: "#121212",
    header: "rgba(26, 25, 27, 1)",
    pageBar: "rgba(29, 29, 33, 0.7)",
    post: "rgba(26, 25, 27, 1)",
  },
  // Text colors
  text: {
    primary: "#f1f5f9",
    secondary: "#cbd5e1",
    tertiary: "#94a3b8",
  },
  // Borders & Dividers
  border: {
    light: "rgba(255, 255, 255, 0.08)",
    medium: "rgba(226, 232, 240, 0.27)",
    dark: "rgba(226, 232, 240, 0.12)",
    pageBar: "rgba(29, 29, 33, 0.7)",
  },
  // Shadows
  shadow: {
    sm: "rgba(0, 0, 0, 0.2)",
    md: "rgba(0, 0, 0, 0.3)",
    lg: "rgba(0, 0, 0, 0.4)",
  },
  // Accent colors
  accent: {
    purple: "#a78bfa",
    green: "#4ade80",
    greenBg: "#064e3b",
  },
  // Component specific
  streakPill: {
    bg: "#a78bfa20",
    text: "#e9d5ff",
  },
  icon: {
    bg: "transparent",
    border: "rgba(226, 232, 240, 0.27)",
  },
  mode: "dark",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  // Update localStorage and document when theme changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  if (!mounted) {
    return null;
  }

  return (
    <StyledThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
