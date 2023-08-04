import React from "react";
import Template from "../components/Template.js";
import signUpImage from "../assets/signup.png";

const Signup = ({ setIsLogedIn }) => {
  return (
    <Template 
      title="Joind the milion lerning with courses to built your skill to studynotion"
      desc1="Build skill for todya, tommorow and beyond"
      desc2="Education of future prouf your cereer"
      image={signUpImage}
      formType="signup"
      setIsLogedIn={setIsLogedIn}
    />
  );
};

export default Signup;
