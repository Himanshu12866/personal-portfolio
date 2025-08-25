import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectPage from "./pages/projects/ProjectPage";
import SkillsPage from "./pages/skills/SkillsPage";
import ContactPage from "./pages/contact/ContactPage";
import Footer from "./components/footer";


function App() {
  return (
    <div
      className="App"
      style={{
        background: "var(--bg-color)",
        color: "var(--text-color)",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
