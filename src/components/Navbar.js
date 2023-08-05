import React from "react";
import Logo from "../assets/Logo.svg";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {

   let isLogedIn = props.isLogedIn;
   let setIsLogedIn = props.setIsLogedIn;

    return (
        <div className="flex justify-around align-middle p-3 bg-black pt-6">

           <div className="mt-[-0.5rem]">
              <Link to="/">
                  <img src={Logo}/>
              </Link>
           </div>

           <nav>
              <ul className="flex gap-8 text-white">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
                <li><NavLink to="/">Contect</NavLink></li>
              </ul>
           </nav>

           {/* Buttons  =>  Login, Log Out, Sign In, Dashboard */}

           <div className="flex mt-[-0.5rem] gap-8 text-white">
              { !isLogedIn &&
                 <NavLink to="/login">
                    <button className="bg-green-500 p-1 pl-4 pr-4 rounded-md">Log In</button>
                 </NavLink>
              }
              { !isLogedIn &&
                 <NavLink to="/signup">
                    <button className="bg-green-500 p-1 pl-4 pr-4 rounded-md">Sign Up</button>
                 </NavLink>
              }
              {  isLogedIn &&
                 <NavLink to="/">
                    <button className="bg-green-500 p-1 pl-4 pr-4 rounded-md"  onClick={ () => {
                       setIsLogedIn(false);
                       toast.success("Loged Out");
                     }}>Log Out</button>
                 </NavLink>
              }
              {  isLogedIn &&
                 <NavLink to="/dashboard">
                    <button className="bg-green-500 p-1 pl-4 pr-4 rounded-md">Dashboard</button>
                 </NavLink>
              }
           </div>
        </div>
    )
}

export default Navbar;