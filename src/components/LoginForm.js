import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {

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

    return (
        <div>
            <form>
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
                      >

                       <span onClick={ () => setShowPassword((prev) => !prev)}>
                          {showPassword ? (<AiOutlineEyeInvisible /> ) : (<AiOutlineEye />)}
                      </span>
                      </input>
                      <Link to="#">
                         <p>Forgot Password</p>
                      </Link>
                </label>
            </form>
            <div>
                <button>
                    Log In
                </button>
            </div>
        </div>
    )
}

export default LoginForm