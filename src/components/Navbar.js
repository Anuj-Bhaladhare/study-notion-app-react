import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

           <div>
              <Link to="/">
                  <img src="../assets/Logo.svg"/>
              </Link>
           </div>

           <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">Contect</NavLink></li>
              </ul>
           </nav>

           {/* Buttons  =>  Login, Log Out, Sign In, Dashboard */}

           <div>
              {
                 <NavLink to="/login">
                    <button>Log In</button>
                 </NavLink>
              }
              {
                 <NavLink to="/signup">
                    <button>Sign Up</button>
                 </NavLink>
              }
              {
                 <NavLink to="/dashboard">
                    <button>Dashboard</button>
                 </NavLink>
              }
              {
                 <NavLink to="/">
                    <button>Log Out</button>
                 </NavLink>
              }
           </div>
        </div>
    )
}

export default Navbar;