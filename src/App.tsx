import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Education from "./Component/Education/Education";
import Experience from "./Component/Experience/Experience";
import Skills from "./Component/Skills/Skills";
import Projects from "./Component/Projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Component/Themes";

function App() {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );

  const ToggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme);
  };
  const [language, setLanguage] = useState(
    localStorage.getItem("lng") === "en" ? "en" : "de"
  );

  const HandleChangeLng = (lng: string) => {
    if (lng === "en") {
      setLanguage("en");
    } else {
      setLanguage("de");
    }
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <Navbar
          thm={theme}
          toggleTheme={ToggleTheme}
          t={t}
          HandleChangeLng={HandleChangeLng}
          lng={language}
        />
        <Routes>
          <Route path="/" element={<About t={t} />} />
          <Route path="/about" element={<About t={t} />} />
          <Route path="/projects" element={<Projects t={t} />} />
          <Route path="/education" element={<Education t={t} />} />
          <Route path="/experience" element={<Experience t={t} />} />
          <Route path="/skills" element={<Skills t={t} />} />
          <Route path="/contact" element={<Contact t={t} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
