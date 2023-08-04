import React from "react";
import Logo from "../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {

   let isLogedIn = props.isLogedIn;
   let setIsLogedIn = props.setIsLogedIn;

    return (
        <div className="flex justify-around">

           <div>
              <Link to="/">
                  <img src={Logo}/>
              </Link>
           </div>

           <nav>
              <ul className="flex gap-8">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">Contect</NavLink></li>
              </ul>
           </nav>

           {/* Buttons  =>  Login, Log Out, Sign In, Dashboard */}

           <div className="flex gap-8">
              { !isLogedIn &&
                 <NavLink to="/login">
                    <button>Log In</button>
                 </NavLink>
              }
              { !isLogedIn &&
                 <NavLink to="/signup">
                    <button>Sign Up</button>
                 </NavLink>
              }
              {  isLogedIn &&
                 <NavLink to="/">
                    <button  onClick={ () => {
                       setIsLogedIn(false);
                       toast.success("Loged Out");
                     }}>Log Out</button>
                 </NavLink>
              }
              {  isLogedIn &&
                 <NavLink to="/dashboard">
                    <button>Dashboard</button>
                 </NavLink>
              }
           </div>
        </div>
    )
}

export default Navbar;