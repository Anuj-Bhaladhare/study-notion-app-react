import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';


function App() {

  const[isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div>
      <div>
        <Navbar isLogedIn={isLogedIn} setIsLogedIn = {setIsLogedIn}/>
      </div>
      <div>
      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/login" element = {<Login setIsLogedIn = {setIsLogedIn}/>} />
        <Route path="/signup" element={<Signup setIsLogedIn = {setIsLogedIn}/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />

      </Routes>
      </div>
    </div>
  );
}

export default App;
