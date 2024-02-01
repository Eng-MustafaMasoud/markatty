import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

const CustomBackBtn = () => {
  return (
    <a href="#" className="flex items-center gap-4 text-sm font-semibold">
              <IoArrowBackOutline />
              Back to log in
            </a>
  )
}

export default CustomBackBtn