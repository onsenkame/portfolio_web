import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Screen } from "./components/Screen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Routes>
          {/* <Route path="/" element={<Screen />} /> */}
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
