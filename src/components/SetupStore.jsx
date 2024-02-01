import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Pattern from "../assets/images/patternBg.png";
import arrow from "../assets//images/Hand-drawn arrow.png";
import bag from "../assets/images//Vector.png";
import StoreForm from "./StoreForm";
import step from "../assets/images/step-4.png";

const SetupStore = () => {
  return (
    <section className="h-screen flex gap-4 overflow-hidden max-w-[1440px] mx-auto">
      <div className="flex-1 flex flex-col justify-between px-4">
        <div className="gap-2 flex flex-col">
          <Header />
          <div className="w-full object-contain">
            <img src={step} alt="step-4" />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <StoreForm />
        </div>

        <Footer />
      </div>
      <div className="flex-1  h-screen relative hidden md:flex">
        <div className="h-full w-full   bg-gradient-to-tr from-[#2F234A] to-[#7F56D9]">
          <img
            src={Pattern}
            alt="patternbg"
            className=" object-fill bg-repeat h-full w-full "
          />
        </div>
        <div className="absolute text-left flex flex-col gap-8 top-[45%] translate-y-[-50%] left-[10%] text-white">
          <img src={bag} alt="star" className="object-cover w-16" />
          <p className="text-[60px] max-lg:text-[40px]  font-bold flex items-start text-left h-full  ">
            Setup your store the way you lik
          </p>
          <p className="md:text-lg text-xs">
            Create a free account and get full access to all features for
            30-days. No credit card needed. Get started in 2 minutes.
          </p>
        </div>
        <div className="absolute top-[60%] left-[-30%] xl:left-[-15%] arrow">
          <img src={arrow} alt="arrow" className="object-fit" />
        </div>
      </div>
    </section>
  );
};

export default SetupStore;
