import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const SignupForm = ({setIsLogedIn}) => {

    const navigate = useNavigate();

    const[formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        createPassword:"",
        conformPassword:""
    })

    const[showPassword1, setShowPassword1] = useState(false)
    const[showPassword2, setShowPassword2] = useState(false)

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
        <div >
            <div className="flex justify-center flex-col items-center gap-5">
                {/* Two Button for Student or  Instructor*/}
                <div className="flex justify-center gap-5 font-bold text-[1.2rem]">
                    <button>Student</button>
                    <button>Instructor</button>
                </div>

                {/* All Form Details */}
                <form onSubmit={formSubmitHandaler} className="flex flex-col gap-4 justify-center items-center">
                    {/* First name Ans Last Name */}
                    <div className="flex gap-3 flex-col">
                        <label className="">
                            <p>First Name<sup>*</sup></p>
                            <input 
                            required
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={formData.firstName}
                            onChange={inputChangeHandaler}
                            className="w-[28rem] rounded-md border border-blue-600 p-2 "
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
                            className="w-[28rem] rounded-md border border-blue-600 p-2 "
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
                                className="w-[28rem] rounded-md border border-blue-600 p-2 "
                            />
                        </label>
                    </div>

                    {/* Create PassWord And Conform Password */}
                    <div className="flex gap-3">
                        <label>
                            <p>Create PassWord<sup>*</sup></p>
                            <input 
                                required
                                name="createPassword"
                                placeholder="passsword"
                                type={ showPassword1 ? ("text") : ("password")}
                                value={formData.createPassword}
                                onChange={inputChangeHandaler}
                                className="w-[13.2rem] rounded-md border border-blue-600 p-2 "
                            />
                                <button onClick={() => setShowPassword1( (prev1) => !prev1)}>
                                    {showPassword1 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                                </button>
                        </label>

                        <label>
                            <p>Conform PassWord<sup>*</sup></p>
                            <input 
                                required
                                name="conformPassword"
                                placeholder="passsword"
                                type={showPassword2 ? ("text") : ("password")}
                                value={formData.conformPassword}
                                onChange={inputChangeHandaler}
                                className="w-[13.2rem] rounded-md border border-blue-600 p-2 "
                            />
                                <button onClick={ () => setShowPassword2( (prev2) => !prev2)}>
                                    {showPassword2 ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                                </button>
                        </label>
                    </div>
                    <button className="bg-blue-400 text-white font-bold p-2 rounded-md mt-7 w-[25rem]">
                    Create Account
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm;