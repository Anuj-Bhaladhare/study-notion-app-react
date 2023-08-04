import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frameImg from "../assets/frame.png";

const Template = ( title, desc1, desc2, formtype, Image, setIsLogedIn ) => {
    return (
        <div>
           <div>
             <h1>{title}</h1>

             <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
             </p>

             {
                 formtype === "signup" ? (<LoginForm />) : ( <SignupForm />)
             }

             <div>
                <div></div>
                <p>OR</p>
                <div></div>
             </div>

             <button>
                <p>SignUp With Google</p>
             </button>
           </div>
           <div>

              <div>
                <img src={frameImg}
                   alt="frame"
                   width={558}
                   height={500}
                   loading="lazy"
                />
              </div>

              <div>
                <img src={Image}
                   alt="student"
                   width={558}
                   height={500}
                   loading="lazy"
                />
              </div>

           </div>
        </div>
    )
}

export default Template;