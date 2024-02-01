import { useState, useContext } from "react";
import { contextProvider } from "../App";
import ar from "../assets/images/egypt.png";
import en from "../assets/images/united-states.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import CustomButton from "../components/CustomButton";
import { IoArrowBackOutline } from "react-icons/io5";
const StoreForm = () => {
  const [selected, setSelected] = useState([
    {
      lang: "English",
      img: en,
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const { setPage, page } = useContext(contextProvider);
  console.log(page);
  const handleClick = () => {
    alert("form saved");
  };
  const handleBack = () => {
    setPage((curr) => curr - 1);
  };
  return (
    <form className="flex flex-col gap-2 hub max-sm:text-sm py-2">
      <div className=" flex flex-col gap-2  ">
        <label htmlFor="">Store name</label>
        <input
          type="text"
          placeholder="Type your store name"
          className="px-2 bg-gray-100 py-2 border border-gray-200 rounded-lg"
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="">Store URL</label>
        <div className=" flex border  border-gray-200  rounded-lg bg-gray-100">
          <input
            type="text"
            placeholder="my store"
            className="bg-gray-100 px-2 w-full"
          />
          <span className="bg-white px-3 py-2 border rounded-r-lg  border-gray-200">
            .marketty.com
          </span>
        </div>
      </div>
      <div className=" flex flex-col gap-2  ">
        <label htmlFor="">Store name</label>
        <div
          className="flex relative bg-gray-100 border border-gray-200 rounded-lg pl-2 py-2 justify-between items-center"
          onClick={() => setToggle(!toggle)}
        >
          <p className="w-full ">
            {selected.map((item) => (
              <div className="flex item-center gap-2">
                <img src={item.img} alt="" className="w-4 h-4" />
                <p>{item.lang}</p>
              </div>
            ))}
          </p>
          <RiArrowDropDownLine className="text-2xl" />
          {toggle && (
            <ul className="bg-gray-100 w-full rounded-xl border border-gray-200 absolute top-[105%] left-0 p-2 flex flex-col gap-4">
              <li
                onClick={() => setSelected([{ lang: "English", img: en }])}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={en} alt="en" className="w-4 h-4" /> <p className="text-sm"> English</p>
              </li>
              <li
                onClick={() => setSelected([{ lang: "Arabic", img: ar }])}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={ar} alt="en" className="w-4 h-4" /> Arabic
              </li>
            </ul>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="">Store Industry</label>
        <select className="w-full outline-none border border-gray-200 py-2 px-2 bg-gray-100 rounded-lg">
          <option selected>Fashion</option>
        </select>
        <p className="mt-2 text-sm">
          Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)
        </p>
      </div>
      <div className=" w-full items-center flex flex-col md:gap-6 gap-3 hub text-center">
        <button
          onClick={handleClick}
          className=" hover:opacity-95 bg-[#7244c8] mt-2 rounded-lg text-white flex items-center justify-center w-full  py-2"
        >
          Save
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
    </form>
  );
};

export default StoreForm;
