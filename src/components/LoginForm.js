import React, { useState } from "react";
import { toast } from "react-hot-toast";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/fa";
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
    <form onSubmit={formSubmitHandaler}>
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
        />

        <span onClick={() => setShowPassword((prev) => !prev)}>
          {/* {showPassword ? (<AiOutlineEyeInvisible /> ) : (<AiOutlineEye />)} */}
          eye
        </span>
        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>
      <button>Log In</button>
    </form>
  );
};

export default LoginForm;
