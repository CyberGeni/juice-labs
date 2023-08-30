import React from "react";
import ukflag from "../assets/images/uk-flag.png";
function Navbar() {
  return (
    <header className="px-[5%] h-[10vh] grid border-b-2 border-black font-athletics font-medium text-black">
      <div className="grid grid-cols-3 place-items-center">
        <div className="space-x-5 place-self-start my-auto">
          <span>about us</span>
          <span>faqs</span>
        </div>
        <h1 className="col-span-1 font-extrabold text-[#1D5333]">JUICE LABS</h1>
        <div className="col-span-1 justify-self-end flex items-center space-x-5">
          <span className="hidden sm:block">contact us</span>
          <div className="hidden sm:flex items-center space-x-1">
            <img className="w-7" src={ukflag} alt="" />
            <span>en</span>
            <svg
              className="w-3"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.39819 7.66292C7.17851 7.88259 6.82241 7.88259 6.60274 7.66292L0.867876 1.92804C0.648208 1.70837 0.648208 1.35227 0.867876 1.13259L1.13305 0.867393C1.35271 0.647718 1.70887 0.647718 1.92854 0.867393L7.00046 5.93934L12.0724 0.867393C12.2921 0.647718 12.6482 0.647718 12.8679 0.867393L13.1331 1.13259C13.3527 1.35227 13.3527 1.70837 13.1331 1.92804L7.39819 7.66292Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="relative">
            <div className="absolute -z-0 w-full border-2 border-black text-lg font-bold rounded-full py-2 transition-all text-center bg-black text-black">
              shop now
            </div>
            <button className="relative z-10 -top-1 active:top-0 text-white bg-[#25513A] px-4  w-full border-2 border-black text-lg rounded-full py-2 transition-all">
              shop now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
