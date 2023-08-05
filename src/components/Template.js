import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frameImg from "../assets/frame.png";
import google from "../assets/icons8-google.svg";

// const Template = ( title, desc1, desc2, formType, Image, setIsLogedIn ) => {

const Template = ( props ) => {

   let title = props.title;
   let desc1 = props.desc1;
   let desc2 = props.desc2;
   let formType = props.formType;
   let image = props.image;
   let setIsLogedIn = props.setIsLogedIn;

    return (
        <div className="bg-[#1c1c1c] text-white flex flex-wrap justify-around h-full p-6">
           <div className="max-w-[50%]">
             <h1 className="font-bold text-[2rem]">{title}</h1>

             <p className="flex flex-col italic text-blue-500 gap-2 p-5">
                <span>{desc1}</span>
                <span>{desc2}</span>
             </p>

             {
                 formType === "signup" ? 
                 (<LoginForm setIsLogedIn = {setIsLogedIn}/>) : 
                 ( <SignupForm setIsLogedIn = {setIsLogedIn}/>)
             }

             <div className="flex justify-between align-middle items-center p-8">
                <div className="h-[1px] w-[16rem] bg-white"></div>
                <p className="font-bold text-[1.2rem]">OR</p>
                <div className="h-[1px] w-[16rem] bg-white"></div>
             </div>
             
             <div className="flex justify-center">
               <button className="flex items-center gap-4 rounded-md pl-[3rem] pr-[3rem] font-bold bg-slate-500 p-2">
                  <img src={google} className="h-[2rem]"/>
                  SignUp With Google
               </button>
             </div>
           </div>

           <div className="relative max-w-[50%] pt-[8rem]">

              <div className="">
                <img src={frameImg}
                   alt="frame"
                   width={558}
                   height={500}
                   loading="lazy"
                />
              </div>

              <div className="mt-[-32rem]">
                <img 
                   src={image}
                   alt="student"
                   width={545}
                   height={500}
                   loading="lazy"
                />
              </div>

           </div>
        </div>
    )
}

export default Template;