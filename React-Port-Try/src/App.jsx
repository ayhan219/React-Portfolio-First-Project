import react from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Projects from "./assets/pages/Projects";
import Navbar from "./assets/components/Navbar/Navbar";
import Contact from "./assets/pages/Contact";


function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
