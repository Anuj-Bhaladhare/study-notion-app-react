import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/fa";

const SignupForm = ({setIsLogedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        createPassword:"",
        conformPassword:""
    })

    const[showPassword, setShowPassword] = useState(false)

    const inputChangeHandaler = (event) => {

        setFormData( (previous) => (
            {
                ...previous,
                [event.target.name]: event.target.value
            }
        ))   
    }

    const formSubmitHandaler = (event) => {
        event.preventDefault();
        if(formData.createPassword != formData.conformPassword) {
            toast.error("Password do not match");
            return;
        }

        else{
            setIsLogedIn(true);
            toast.success("Account created succesfully");
            navigate("/dashboard");
        }
        const accountData = {
            ...formData
        }
        console.log(accountData);
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
                <form onSubmit={formSubmitHandaler}>
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
                            />
                                <span onClick={() => setShowPassword( (prev) => !prev)}>
                                    {/* {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)} */}
                                    eye
                                </span>
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
                            />
                                <span onClick={ () => setShowPassword( (prev) => !prev)}>
                                    {/* {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)} */}
                                    eye
                                </span>
                        </label>
                    </div>
                    <button>
                    Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;