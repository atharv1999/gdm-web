import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Audit from './pages/services/Audit';
import Taxation from './pages/services/Taxation';
import Accounting from './pages/services/Accounting';
import Advisory from './pages/services/Advisory';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/taxation" element={<Taxation />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/advisory" element={<Advisory />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={1500} />
      </BrowserRouter>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
