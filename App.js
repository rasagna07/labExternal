import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Products from "./Components/Products";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Login from "./Components/Login";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Login/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
          
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
