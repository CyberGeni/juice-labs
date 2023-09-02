import React from "react";
import heroImg from "../assets/images/hero-img.png";
import smiley from "../assets/images/smiley.png";
import dino from "../assets/images/dino.png";
import rainbow from "../assets/images/rainbow.png";
import fruit from "../assets/images/fruit.png";
import "../App.css";
import Marquee from "../components/Marquee";
import DrinkSelection from "../components/DrinkSelection";
import 'animate.css'
import banner from "../assets/images/banner.png"
import Reviews from "../components/Reviews";
function Main() {
  return (
    <div className="font-athletics overflow-x-hidden relative">
      <img className="absolute w-1/3 mx-auto inset-0 animate__animated animate__bounceInDown animate__delay-3s" src={banner} alt="" />
      {/* hero */}
      <section>
        <h1 className="px-[5%] sm:hidden text-center font-ppformula my-10 text-8xl text-[#EF4200]">
          DELICIOUS <br /> & <br /> HEALTHY
        </h1>
        <h1 className="hidden sm:flex px-[5%] text-center leading-relaxed text-[#EF4200] font-ppformula sm:text-[10.46vw]">
          DELICIOUS & HEALTHY
        </h1>
        <div className="relative">
          <img className="dino absolute w-24 -top-[5.4rem]" src={dino} alt="" />
          <img className="h-80 object-cover sm:h-auto" src={heroImg} alt="" />
          <img
            className="absolute right-14 top-14 w-5 sm:w-16"
            src={smiley}
            alt=""
          />
        </div>
      </section>

      {/* marquee section */}
      <div className="relative overflow-hidden">
        <section className="px-[5%] py-36 grid grid-cols-5">
          <span className="w-3/5 col-span-2 inline h-fit">
            <span className="text-4xl text-[#25513A] leading leading-normal">
              Your trusted source for bebidos muy{" "}
              <span className="underline">deliciosos.</span>
            </span>
            <img className="w-16 h-fit -mt-7 inline " src={fruit} alt="" />
          </span>
          <img className="col-span-1 -mt-20" src={rainbow} alt="" />
          <div className="col-span-2 text-right">
            <p className="text-lg w-3/5 ml-auto">
              Discover the perfect balance of taste and nutrition with Juice
              Labs. Our selection of healthy drinks is sure to satisfy your
              thirst and nourish your body. From refreshing waters to energizing
              smoothies, we have something for everyone.
            </p>
            <div className="relative w-fit text-right ml-auto">
              <div className="absolute z-10 w-full border-2 border-black text-lg font-bold rounded-full py-2 transition-all text-center bg-black text-black">
                add to cart
              </div>
              <button className="relative z-10 -top-1 active:top-0 text-white bg-[#25513A] px-4  w-fit border-2 border-black text-lg rounded-full py-2 transition-all">
                add to cart
              </button>
            </div>
          </div>
        </section>
        <Marquee />
      </div>

      {/* drink carouselsection */}
      <div>
        <DrinkSelection />
      </div>
      <div>
        <Reviews />
      </div>
    </div>
  );
}

export default Main;
