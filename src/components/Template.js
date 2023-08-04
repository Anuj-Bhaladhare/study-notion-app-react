import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frameImg from "../assets/frame.png";

// const Template = ( title, desc1, desc2, formType, Image, setIsLogedIn ) => {

const Template = ( props ) => {

   let title = props.title;
   let desc1 = props.desc1;
   let desc2 = props.desc2;
   let formType = props.formType;
   let image = props.image;
   let setIsLogedIn = props.setIsLogedIn;

    return (
        <div>
           <div>
             <h1>{title}</h1>

             <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
             </p>

             {
                 formType === "signup" ? 
                 (<LoginForm setIsLogedIn = {setIsLogedIn}/>) : 
                 ( <SignupForm setIsLogedIn = {setIsLogedIn}/>)
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
                <img 
                   src={image}
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