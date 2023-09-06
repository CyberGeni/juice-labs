import React from "react";
import footerMascot from "../assets/images/footer-mascot.png"
import shadow from "../assets/images/juice-labs-text-shadow.svg"
function Footer() {
  return (
    <footer className="font-athletics border-t-2 border-black bg-orange-100 py-10 px-[5%]">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 grid grid-cols-3 gap-4">
          <div className="flex flex-col space-y-3">
            <h4 className="text-black/75 text-lg font-black font-ppformulaNormal uppercase mb-2">
              Explore
            </h4>
            <span>Home</span>
            <span>Shop</span>
            <span>About us</span>
            <span>FAQs</span>
            <span>Contacts</span>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="text-black/75 text-lg font-black font-ppformulaNormal uppercase mb-2">
              Our Top Picks
            </h4>
            <span>Ginger Turmeric Elixir</span>
            <span>Superfood Smoothie</span>
            <span>Probiotic Kombucha</span>
            <span>Matcha Green Tea Latte</span>
            <span>Chia Seed Energy Drink</span>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="text-black/75 text-lg font-black font-ppformulaNormal uppercase mb-2">
              Social
            </h4>
            <span>Faceebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>

        <div className="col-span-2 space-y-4">
          <h1 className="text-xl">
            Join our newsletter to stay up to date with our latest blogs
          </h1>
          <div className="flex space-x-2">
            <input
              className="border-2 w-full border-black rounded-full px-4 placeholder:font-medium"
              type="text"
              placeholder="Enter email address"
            />
            <div className="relative  text-right ml-auto">
              <div className="absolute z-10 w-full border-2 border-black text-lg font-bold rounded-full py-2 transition-all text-center bg-black text-black">
                subscribe
              </div>
              <button className="relative w-full z-10 -top-1 active:top-0 text-white bg-[#DD1953] px-4 border-2 border-black text-lg rounded-full py-2 transition-all">
                subscribe
              </button>
            </div>
          </div>
          <p className="text-black/75">
            By subscribing you agree to with our{" "}
            <span className="text-rose-500 ">Privacy Policy</span> and provide
            consent to receive updates from our company.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-end my-12 mt-24">
        <div>
          <h1 className="text-[20rem] tracking-tight leading-none font-ppformulaLight text-rose-500">
            JUICE LABS.
          </h1>
          <img className="w-[30.5rem] -mt-14" src={shadow} alt="" />
        </div>
        <img className="w-48 mb-7" src={footerMascot} alt="" />
      </div>
    </footer>
  );
}

export default Footer;
