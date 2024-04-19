import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import AboutPage from "./Pages/About";
import HomePage from "./Pages/Homepage";
import ErrorPage from "./Pages/Error";
import ProjectsPage from "./Pages/Project";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
