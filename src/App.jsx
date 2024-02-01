import { createContext, useContext, useState } from "react";

import Signup from "./components/Signup";
import OtpVerification from "./components/OtpVerification";
import EmailVerified from "./components/EmailVerified";
import SetupStore from "./components/SetupStore";
import { useMultiStepForm } from "./customHooks/useMultiStepForm";

export const contextProvider = createContext();
function App() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <Signup  />;
    } else if (page === 1) {
      return <OtpVerification />;
    } else if(page === 2) {
      return <EmailVerified />;
    }else if(page === 3){
      return <SetupStore />;

    }
  };
  // const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  // useMultiStepForm([
  //   <Signup />,
  //   <OtpVerification   />,
  //   <EmailVerified />,
  //   // <SetupStore />
  // ])

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   if (!isLastStep) return next()
  //   alert("Successful Account Creation")
  // }
  return (
    <contextProvider.Provider value={{ page, setPage }} >
      <PageDisplay />
    </contextProvider.Provider>
    // <form onSubmit={onSubmit}>
    //   <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
    //     {currentStepIndex + 1} / {steps.length}
    //   </div>
    //   {step}
    //   <div
    //     style={{
    //       marginTop: "1rem",
    //       display: "flex",
    //       gap: ".5rem",
    //       justifyContent: "flex-end",
    //     }}
    //   >
    //     {!isFirstStep && (
    //       <button type="button" onClick={back}>
    //         Back
    //       </button>
    //     )}
    //     <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
    //   </div>
    // </form>
  );
}

export default App;
