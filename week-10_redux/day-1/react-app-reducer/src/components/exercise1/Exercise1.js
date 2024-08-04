import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Card from "./Card";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function Exercise1() {
  return (
    <div id="Ex1">
        <ThemeProvider>
        <div className="App">
            <p>Exercise 1</p>
            <h1>Theme Switcher Example</h1>
            <ThemeSwitcher />
            {/* Other components here */}
            <Card/>
        </div>
        </ThemeProvider>
    </div>
  );
}

export default Exercise1;