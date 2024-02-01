import { useState, useContext } from "react";
import { contextProvider } from "../App";
import Pattern from "../assets/images/patternBg.png";
import arrow from "../assets//images/Hand-drawn arrow.png";
import envelope from "../assets/images/envelope.png";
import feature from "../assets/images/Featured-icon-2.png";
import Header from "./Header";
import Footer from "./Footer";
import CustomButton from "./CustomButton";
import CustomBackBtn from "./CustomBackBtn";
import step from "../assets/images/step-2.png";
import { IoArrowBackOutline } from "react-icons/io5";

const EmailVerified = () => {
  const { setPage, page } = useContext(contextProvider);
  console.log(page);
  const handleClick = () => {
    setPage(3);
  };
  const handleBack = () => {
    setPage((curr) => curr - 1);
  };
  return (
    <section className="flex h-screen gap-8 overflow-hidden max-w-[1440px] mx-auto ">
      <div className="flex-1 flex flex-col justify-between px-4  ">
        <div className="gap-4 flex flex-col">
          <Header />
          <div className="w-full object-contain">
            <img src={step} alt="step-4" />
          </div>
        </div>
        <div className=" flex flex-col  items-center justify-center text-center max-w-[80%] mx-auto gap-8 ">
          <div className="flex flex-col items-center gap-4 ">
            <img src={feature} alt="checked" />
            <h4 className="text-[30px] font-semibold">Email Verified</h4>
            <p>
              Your accounnt has been verified successfully. Click below to setup
              your store.
            </p>
          </div>
          <button
            onClick={handleClick}
            className=" hover:opacity-95 bg-[#7244c8] w-full  rounded-lg text-white flex items-center justify-center  py-2"
          >
            Continue
          </button>
          <a
            href="#"
            className="flex items-center gap-4 text-sm font-semibold"
            onClick={handleBack}
          >
            <IoArrowBackOutline />
            Back to log in
          </a>{" "}
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
        <div className="absolute top-[60%] left-[-30%] xl:left-[-15%] arrow">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </section>
  );
};

export default EmailVerified;
