import "./App.css";
import Home from "./Page/Home";
import Blog from "./Page/Blog";
import About from "./Page/About";
import Portfolio from "./Page/Portfolio";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
