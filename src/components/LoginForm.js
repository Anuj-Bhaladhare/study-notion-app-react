import React, { useState } from "react";
import { toast } from "react-hot-toast";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLogedIn}) => {

    const navigatePage = useNavigate()

    const[showPassword, setShowPassword] = useState(false)

    const[formData, setFormData] = useState( {
        email:"",
        password:""
    })

    const inputChangeHandaler = (event) => {
        setFormData( (previous) => (
            {
                ...previous,
                [event.target.name]: event.target.name
            }
        ))   
    }
 
    const formSubmitHandaler = (event) => {
       event.preventDefault();
       setIsLogedIn(true);
       toast.success("Loged In Success");
       navigatePage("/dashboard");
    }

    return (
        <div>
            <form onSubmit={formSubmitHandaler}>
                <label>
                    <p>Enter your email <sup>*</sup></p>
                    <input 
                      required
                      type="email"
                      name="email"
                      placeholder="abcd@gmail.com"
                      value={formData.email}
                      onChange={inputChangeHandaler}
                    />
                </label>
                <label>
                    <p>Enter your Password <sup>*</sup></p>
                    <input 
                      required
                      type={showPassword ? ("text") : ("password") }
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={inputChangeHandaler}
                      />

                       <span onClick={ () => setShowPassword((prev) => !prev)}>
                          {/* {showPassword ? (<AiOutlineEyeInvisible /> ) : (<AiOutlineEye />)} */}
                          eye
                      </span>
                      <Link to="#">
                         <p>Forgot Password</p>
                      </Link>
                </label>
                <Link to="#">
                    <button>
                        Log In
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default LoginForm