import React from "react";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
function Navbar(){
    return(
        <div>
<Link to="/">Home</Link>
<Link to="/about">About us</Link>
<Link to="/contact">Contact</Link>
        </div>
    );
}
export default Navbar;