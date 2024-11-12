import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Home from "./pages/Home.jsx"
import Login from './pages/Login';
import SignUp from './pages/SignUp.jsx';
const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />  {/* Add route for SignUp */}
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;