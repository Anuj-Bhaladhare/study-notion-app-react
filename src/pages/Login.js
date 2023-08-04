import React from "react";
import Template from "../components/Template";
import loginImage from "../assets/login.png";

const Login = ({setIsLogedIn}) => {

    return (
        <div>
           <Template 
              title ="Welcom Back"
              desc1 ="Build skill for todya, tommorow and beyond"
              desc2 ="Education of future prouf your cereer"
              image ={loginImage}
              formType = "login"
              setIsLogedIn = {setIsLogedIn}
           /> 
        </div>
    )
}

export default Login;