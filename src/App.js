import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home/Home';
import About from './Components/Shared/About/About';
import Login from './Components/Shared/Login/Login';
import Contact from './Components/Shared/Contact/Contact';
import Apointment from './Components/Apointment/Apointment';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apointment" element={<Apointment />} />
        <Route path="/review" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
