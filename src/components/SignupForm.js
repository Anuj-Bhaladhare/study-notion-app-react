import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/fa";

const SignupForm = () => {

    const[showPassword, setShowPassword] = useState(false)

    const[formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        createPassword:"",
        conformPassword:""
    })

    const inputChangeHandaler = (event) => {
        setFormData( (prevData) = (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    return (
        <div>
            <div>
                {/* Two Button for Student or  Instructor*/}
                <div>
                    <button>Student</button>
                    <button>Instructor</button>
                </div>

                {/* All Form Details */}
                <form>
                    {/* First name Ans Last Name */}
                    <div>
                        <label>
                            <p>First Name<sup>*</sup></p>
                            <input 
                            required
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={formData.firstName}
                            onChange={inputChangeHandaler}
                            />
                        </label>

                        <label>
                            <p>Last Name<sup>*</sup></p>
                            <input 
                            required
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={formData.lastName}
                            onChange={inputChangeHandaler}
                            />
                        </label>
                    </div>
                    
                    {/* Email Details */}
                    <div>
                        <label>
                            <p>Enter Email <sup>*</sup></p>
                            <input 
                                required
                                name="email"
                                placeholder="abcd@gmail.com"
                                type="email"
                                value={formData.email}
                                onChange={inputChangeHandaler}
                            />
                        </label>
                    </div>

                    {/* Create PassWord And Conform Password */}
                    <div>
                        <label>
                            <p>Create PassWord<sup>*</sup></p>
                            <input 
                                required
                                name="createPassword"
                                placeholder="passsword"
                                type={ showPassword ? ("text") : ("password")}
                                value={formData.createPassword}
                                onChange={inputChangeHandaler}
                            >
                                <span onClick={() => setShowPassword( (prev) => !prev)}>
                                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                                </span>
                            </input>
                        </label>

                        <label>
                            <p>Conform PassWord<sup>*</sup></p>
                            <input 
                                required
                                name="conformPassword"
                                placeholder="passsword"
                                type={showPassword ? ("text") : ("password")}
                                value={formData.conformPassword}
                                onChange={inputChangeHandaler}
                            >
                                <span onClick={ () => setShowPassword( (prev) => !prev)}>
                                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                                </span>
                            </input>
                        </label>
                    </div>
                </form>
                 
                <Link to="#">
                    <button>
                       Create Account
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SignupForm;