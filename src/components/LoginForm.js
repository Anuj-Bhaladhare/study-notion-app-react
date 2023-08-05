import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLogedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function inputChangeHandaler(event) {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  }

  function formSubmitHandaler(event) {
    event.preventDefault();
    setIsLogedIn(true);
    toast.success("Loged In Success");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={formSubmitHandaler} className="flex justify-center flex-col items-center gap-5">
      <label>
        <p>
          Enter your email <sup>*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          placeholder="abcd@gmail.com"
          value={formData.email}
          onChange={inputChangeHandaler}
          className="w-[28rem] rounded-md border border-blue-600 p-2 "
        />
      </label>
      <label>
        <p>
          Enter your Password <sup>*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={inputChangeHandaler}
          className="w-[28rem] rounded-md border border-blue-600 p-2 "
        />

        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? (<AiOutlineEyeInvisible /> ) : (<AiOutlineEye />)}
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button className="bg-blue-400 text-white font-bold p-2 rounded-md mt-7 w-[25rem]">Log In</button>
    </form>
  );
};

export default LoginForm;
