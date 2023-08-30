import React from "react";
import cherry from "../assets/images/cherry.png";
import orange from "../assets/images/orange.png";
import orangeSlice from "../assets/images/orange-slice.png";
import banana from "../assets/images/banana.png";
import Marquee from "react-fast-marquee";

function Marqueee() {
  return (
    <>
      <Marquee
        autoFill={true}
        speed={20}
        className="one bg-[#FFFBEB] border-y-2 border-black py-1"
      >
        <span className="mr-8">Low calories</span>
        <img className="w-8 mr-8" src={cherry} alt="" />
        <span className="mr-8">No added sugar</span>
        <img className="w-8 mr-8" src={orange} alt="" />
        <span className="mr-8">Low calories</span>
        <img className="w-8 mr-8" src={orangeSlice} alt="" />
        <span className="mr-8">No added sugar</span>
        <img className="w-8 mr-8" src={banana} alt="" />
      </Marquee>
      <Marquee
        autoFill={true}
        speed={20}
        className="two w-[120vw] flex bg-[#FFFBEB] border-y-2 border-black py-1"
      >
        <span className="mr-8">Low calories</span>
        <img className="w-8 mr-8" src={cherry} alt="" />
        <span className="mr-8">No added sugar</span>
        <img className="w-8 mr-8" src={orange} alt="" />
        <span className="mr-8">Low calories</span>
        <img className="w-8 mr-8" src={orangeSlice} alt="" />
        <span className="mr-8">No added sugar</span>
        <img className="w-8 mr-8" src={banana} alt="" />
      </Marquee>
    </>
  );
}

export default Marqueee;
