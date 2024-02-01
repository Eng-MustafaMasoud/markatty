import { useState } from "react"

export const useMultiStepForm=(steps)=>{
    const [currentStepIndex,setCurrentStepIndex]= useState(0)

    function next() {
        setCurrentStepIndex(i => {
          if (i >= steps.length - 1) return i
          return i + 1
        })
      }
    
      function back() {
        setCurrentStepIndex(i => {
          if (i <= 0) return i
          return i - 1
        })
      }
    
      function goTo(index) {
        setCurrentStepIndex(index)
      }
    
      return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        goTo,
        next,
        back,
      }
    }
//     const next=()=>{
// setCurrentStepIndex(()=>{
//     const newIndex = currentStepIndex + 1;
//         return (newIndex > steps.length - 1)? 0 : newIndex;
// })
//     }

//     const back=()=>{
//         setCurrentStepIndex((prev)=>{
//             const newIndex = prev - 1;
//             return (newIndex < 0 )? steps.length-1 : newIndex;
//         })
        
//     }

//     const goto=(index)=>{
//         setCurrentStepIndex(index)
//     }

//     return(
//        { currentStepIndex,
//         step:steps[currentStepIndex],
//         goto,
//         next,
//         back,
//         isFirstStep: currentStepIndex === 0,
//         isLastStep: currentStepIndex === steps.length - 1,
    
    
//     }
//     )
// }