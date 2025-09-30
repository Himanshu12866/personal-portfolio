import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectPage from "./pages/projects/ProjectPage";
import SkillsPage from "./pages/skills/SkillsPage";
import ContactPage from "./pages/contact/ContactPage";
import Footer from "./components/footer";
import SmoothScrollWrapper from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import CaseStudy from "./components/projects/CaseStudy";
import ScrollToTop from "./components/ScrollTopBtn";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <SmoothScrollWrapper>
      <ToastContainer />
      <CustomCursor />
      <ScrollToTop />
      <div
        className=""
        style={{
          background: "var(--bg-color)",
          color: "var(--text-color)",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/case-study/:slug" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </SmoothScrollWrapper>
  );
}

export default App;
