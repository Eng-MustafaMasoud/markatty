import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-between max-sm:text-xs text-sm py-2  w-full ">
  
      <p>&copy; Markatty 2022</p>
      <span className="flex items-center gap-2">
        <FaRegEnvelope />
        <p>support@markatty.com</p>
      </span>
    </footer>
  );
};

export default Footer;
