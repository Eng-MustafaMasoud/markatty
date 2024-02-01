import { useContext, useState } from "react";
 import {contextProvider} from '../App'
// Components
import Header from "./Header";
import Footer from "./Footer";
import PhoneInputCom from "./PhoneInputCom";
import CustomButton from "./CustomButton";
import EgyNumber from "./EgyNumber";

// images and icons
import Pattern from "../assets/images/patternBg.png";
import arrow from "../assets//images/Hand-drawn arrow.png";
import star from "../assets/images/Stars.png";
import { TfiWorld } from "react-icons/tfi";
import step from "../assets/images/step-1.png";

const Signup = () => {

  const {setPage} = useContext(contextProvider)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setPage(1)
  }

  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [valid, setValid] = useState(true);

  //   const handleChange = (value) => {
  //     setPhoneNumber(value);
  //     setValid(validatePhoneNumber(value));
  //   };

  //   const validatePhoneNumber = (phoneNumber) => {
  //     const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

  //     return phoneNumberPattern.test(phoneNumber);
  //   };


  return (
    <section className="flex overflow-hidden  h-screen gap-2 max-w-[1440px] mx-auto">
      <div className="flex-1 flex flex-col justify-between px-4 ">
        <Header />
        <div className="">
          <img src={step} alt="step-1" />
        </div>
        <div className="h-screen flex  w-full justify-center items-center">
          <form onSubmit={handleSubmit}  className=" flex flex-col gap-2 md:w-[350px] w-[80vw]  ">
            <div className="flex flex-col gap-2 w-full hub ">
              <label htmlFor="name" className="flex items-start">
                Name*
              </label>
              <input
                type="text"
                name="name"
                id=""
                required
                placeholder="Enter your name"
                className="border border-[#cacaca] rounded-lg px-2 py-1.5 bg-gray-100 "
              />
            </div>
            <div className="flex flex-col gap-2 hub">
              <label htmlFor="email" className="flex items-start">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id=""
                required
                placeholder="Enter your name"
                className="border border-[#cacaca] rounded-lg px-2 py-1.5 w-full bg-gray-100"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-2 h-full">
              
              <EgyNumber />
            </div>

            <div className="flex flex-col md:gap-2 hub">
              <label htmlFor="name" className="flex items-start">
                Password*
              </label>
              <input
                type="text"
                name="password"
                id=""
                required
                placeholder="Create a password"
                className="border border-[#cacaca] rounded-lg px-2 py-1.5 w-full bg-gray-100"
              />
              <p className="flex items-start text-xs text-gray-500">
                Must be at least 8 characters.
              </p>
            </div>
            <CustomButton>Get started</CustomButton>
            <div className="">
              <p className="text-[14px] text-center">
                {" "}
                Already have an account?{" "}
                <a href="#" className="text-[#5b3f98] font-semibold">
                  Log in
                </a>
              </p>
            </div>
            <div className="w-full flex items-center gap-2 justify-center text-gray-400">
              <p>عربى</p>
              <TfiWorld />
            </div>
          </form>
        </div>
        <Footer />
      </div>
      <div className="flex-1  h-screen relative hidden md:flex ">
        <div className="h-full w-full   bg-gradient-to-tr from-[#2F234A] to-[#7F56D9]">
          <img
            src={Pattern}
            alt="patternbg"
            className=" object-fill bg-repeat h-full w-full "
          />
        </div>
        <div className="absolute text-left flex flex-col gap-8 top-[45%] translate-y-[-50%] left-[10%] text-white">
          <img src={star} alt="star" className="object-cover w-16" />
          <p className="text-[60px] max-lg:text-[40px]  font-bold flex items-start text-left h-full  ">
            Start turning your ideas into reality.
          </p>
          <p className="md:text-lg text-xs">
            Create a free account and get full access to all features for
            30-days. No credit card needed. Get started in 2 minutes.
          </p>
        </div>
        <div className="absolute top-[60%] left-[-30%] xl:left-[-15%] arrow">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
