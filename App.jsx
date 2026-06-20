import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import VirtualTour from "./pages/VirtualTour";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Datta Meghe College</h2>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/virtualtour">Virtual Tour</Link></li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/virtualtour" element={<VirtualTour />} />
      </Routes>

    </div>
  );
}

export default App;