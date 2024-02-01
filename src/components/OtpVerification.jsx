import { useState, useContext } from "react";
import { contextProvider } from "../App";
// components
import Header from "./Header";
import Footer from "./Footer";
import CustomButton from "./CustomButton";

// images & icons
import Pattern from "../assets/images/patternBg.png";
import arrow from "../assets//images/Hand-drawn arrow.png";
import envelope from "../assets/images/envelope.png";
import featured from "../assets/images/Featured icon.png";
import { IoArrowBackOutline } from "react-icons/io5";
import CustomBackBtn from "./CustomBackBtn";
import step from "../assets/images/step-3.png";

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const { setPage, page } = useContext(contextProvider);
  console.log(page);
  const handleClick = () => {
    setPage(2);
  };
  const handleBack = () => {
    setPage((curr) => curr - 1);
  };
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  return (
    <section className="h-screen overflow-hidden  flex md:gap-8 gap-2 hub  max-w-[1440px] mx-auto">
      <div className=" flex flex-col flex-1  px-4 justify-between">
        <div className="gap-4 flex flex-col">

        <Header />
        <div className="w-full object-contain">
          <img src={step} alt="step-4" />
        </div>
        </div>

       


        <div className="  flex   md:gap-4 gap-2  flex-col text-center items-center justify-center">
          <div className="flex  flex-col items-center  md:gap-4 gap-2 hub">
            <img src={featured} alt="Featured icon" />
            <p className="text-[30px] font-semibold">Check your email</p>
            <p className="text-[16px]">we sent a verification code to</p>
            <p className="text-[16px] ">omarmouneer@gmail.com</p>
          </div>

          <div className="flex w-[80%]   flex-col  items-center justify-center gap-4   md:w-[300px]">
            <div className="flex   items-center justify-center  gap-4 ">
              {otp.map((data, index) => {
                return (
                  <input
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="w-14 h-14 max-sm:w-8 max-sm:h-8 text-center flex items-center border border-[#7244c8] focus:ring focus:ring-[#7244c8]"
                  />
                );
              })}
            </div>
            <button
              onClick={handleClick}
              className=" hover:opacity-95 bg-[#7244c8]  rounded-lg text-white flex items-center justify-center   py-2 w-full"
            >
              Verify email
            </button>
          </div>
          <div className=" flex flex-col gap-8 hub items-center">
            <p>
              Didn't receive the email?{" "}
              <a href="#" className="text-[#7244c8]">
                Click to resend
              </a>{" "}
            </p>
            <a
              href="#"
              className="flex items-center gap-4 text-sm font-semibold"
              onClick={handleBack}
            >
              <IoArrowBackOutline />
              Back to log in
            </a>{" "}
          </div>
        </div>
      
        <Footer />
      </div>
      <div className="flex-1  h-screen relative hidden md:flex">
        <div className="h-full w-full   bg-gradient-to-tr from-[#2F234A] to-[#7F56D9]">
          <img
            src={Pattern}
            alt="patternbg"
            className=" object-cover h-full w-full "
          />
        </div>
        <div className="absolute text-left flex flex-col gap-8 top-[45%] translate-y-[-50%] left-[10%] text-white">
          <img src={envelope} alt="envelope" className="object-cover w-16" />
          <p className="text-[60px] max-lg:text-[40px]  font-bold flex items-start text-left h-full  ">
            Verify your account now
          </p>
          <p className="md:text-lg text-xs">
            Create a free account and get full access to all features for
            30-days. No credit card needed. Get started in 2 minutes.
          </p>
        </div>
        <div className="absolute top-[60%] left-[-30%] xl:left-[-15%] arrow" >
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default OtpVerification;
