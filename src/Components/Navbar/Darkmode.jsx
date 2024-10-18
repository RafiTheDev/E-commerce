import React from "react";
import LightButton from "../../assets/Buttons/dark-mode-button.png";
import DarkButton from "../../assets/Buttons/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Toggle to light mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
        aria-pressed={theme === "dark"}
      />
      <img
        src={DarkButton}
        alt="Toggle to dark mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
        aria-pressed={theme === "light"}
      />
    </div>
  );
};

export default DarkMode;
