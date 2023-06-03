import React from "react";
import heroImg from "../assets/images/hero-img.png";
import smiley from "../assets/images/smiley.png";
import dino from "../assets/images/dino.png";
import "../App.css"
function Main() {
  return (
    <div className="">
      {/* hero */}
      <section>
        <h1 className="px-[5%] sm:hidden text-center font-ppformula my-10 text-8xl text-[#EF4200]">DELICIOUS <br /> & <br /> HEALTHY</h1>
        <hi className="hidden sm:flex px-[5%] text-center leading-relaxed text-[#EF4200] font-ppformula sm:text-[10.46vw]">DELICIOUS & HEALTHY</hi>
        <div className="relative">
          <img className="dino absolute w-24 -top-[5.4rem]" src={dino} alt="" />
          <img className="h-80 object-cover sm:h-auto" src={heroImg} alt="" />
          <img className="absolute right-14 top-14 w-5 sm:w-16" src={smiley} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Main;
