import React, { useState } from "react";
import lab from "../assets/lab2_pic1.png";
import  layer from "../assets/Layer 2.png" ;
import group8 from "../assets/Group 378@2x.png"

const Herosection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // useState hook

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
  className="bg-cover bg-center w-full h-[700px] sm:h-[600px] md:h-[700px]"
  style={{
    backgroundImage: `url(${lab})`,
  }}
>

<header
      className="flex py-4 px-4 sm:px-10 font-[sans-serif] min-h-[135px] tracking-wide relative z-50"
      style={{
        background: "linear-gradient(180deg, rgba(7, 7, 7, 0.5) 0%, rgba(89, 89, 89, 0) 100%) no-repeat",
      }}
    >
      <div className="flex flex-wrap items-center gap-5 w-full">
        <a href="javascript:void(0)" className="text-white font-normal text-[14px] font-poppins">
          Logo
        </a>

        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:!flex lg:ml-auto max-lg:fixed max-lg:bg-[#0E263E] max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-white"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex gap-4 max-lg:space-y-3">
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-white block font-normal text-[14px] font-poppins underline"
              >
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-white block font-normal text-[14px] font-poppins"
              >
                Lab services
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-white block font-normal text-[14px] font-poppins"
              >
                Compliance Advisor
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-white block font-normal text-[14px] font-poppins"
              >
                Buy Tox Data
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-white block font-normal text-[14px] font-poppins"
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center max-lg:ml-auto space-x-6">
          <button className="px-4 py-2 font-normal text-[14px] font-poppins rounded text-white border-2 border-[#DAB82A] bg-[#DAB82A] hover:bg-[#DAB82A] transition-all ease-in-out duration-300">
            Sign up
          </button>

          <button
            id="toggleOpen"
            className="lg:hidden"
            onClick={handleToggleMenu}
          >
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

        {/* bammer */}

        <div>
          
      <div class=" lg:ml-12 lg:p-10 p-6  lg:max-w-2xl sm:max-w-full ">
        <div class=" md:min-h-[340px] text-start">
          <div>
            <h3 class="text-[#3C61F7]  font-[600] text-[14px] leading-[60px]  mb-4">TALK BUSINESS GROWTH</h3>

            <h2 className="text-[#1F2933] font-bold  sm:text-[13px] lg:text-[32px] leading-[30px] sm:leading-[40px] lg:leading-[50px] font-space">
  Compliance Excellence Hub:
  Your Complete Regulatory Compliance Resource
</h2>


            <p className="text-[#1F2933] font-normal lg:text-[14px]  sm:text-[12px] xs:text-[12px] xs-text-justify lg:leading-[30px] mt-4 sm:text-justify lg:text-start ">Welcome to Compliance Excellence Hub – your free portal for regulatory compliance intelligence. Access all you need to learn, assess, and manage compliance requirements efficiently..</p>

            <ul className="flex flex-wrap sm:block gap-1 mt-8 md:flex">
 <li className="flex items-center gap-3 text-gray-600 lg:w-[calc(50%-0.5rem)] sm:w-full w-full" style={{
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "30px",
    fontFamily: "Poppins, sans-serif",
  }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" className="bg-white fill-[#17C706] shadow-md p-1" viewBox="0 0 24 24">
    <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
  </svg>
  Comprehensive Resources
</li>

  <li class="flex items-center gap-3  text-gray-600  lg:w-[calc(50%-0.5rem)] sm:w-full"  style={{
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "30px",
    fontFamily: "Poppins, sans-serif",
  }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="bg-white fill-[#17C706] shadow-md p-1" viewBox="0 0 24 24">
  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
</svg>
Efficient Compliance Management
  </li>
  <li class="flex items-center gap-3  text-gray-600  lg:w-[calc(50%-0.5rem)] sm:w-full"  style={{
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "30px",
    fontFamily: "Poppins, sans-serif",
  }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="17" class="bg-white fill-[#17C706] shadow-md p-1" viewBox="0 0 24 24">
  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
</svg>

Cost-Effective Solution
  </li>
  {/* <li class="flex items-center gap-3 text-sm text-gray-600 w-[calc(50%-0.5rem)]">
    <svg xmlns="http://www.w3.org/2000/svg" width="17" class="bg-blue-500 fill-white rounded-full p-[3px]" viewBox="0 0 24 24">
      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
    </svg>
    Security
  </li> */}
</ul>


<button type="button"
              class="lg:px-6 px-2 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-[#0E263E] bg-[#0E263E] hover:text-black transition-all duration-300">
              OUR SERVICES
            </button>


            <button type="button"
              class=" ml-4 lg:px-6  px-3 py-2 mt-8 rounded text-black text-sm tracking-wider font-medium outline-none border-2 border-[#0E263E] bg-white hover:bg-transparent hover:text-black transition-all duration-300">
              WHO WE ARE
            </button>

          </div>
          </div>
          </div>
        </div>
      </div>

       {/* SECOND SECTION */}
       <div >
       <div
  className="grid lg:grid-cols-2 md:grid-cols-2 items-center lg:gap-y-6 mx-4 sm:mx-6 lg:mx-48 my-12 justify-center lg:h-[260px] bg-white border border-[#1F2933]"
  style={{ boxShadow: "-4px 5px 6px #00000026" }}
>
  {/* Left Section */}
  <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
    <h2 className="text-gray-800 underline font-medium lg:text-[22px] sm:text-[20px] leading-[30px] tracking-normal text-start">
      See our <span className="text-[#FBB03B] underline decoration-[#FBB03B]">Services</span>
    </h2>

    <p className="text-[#1F2933] mt-4 text-[14px] leading-[30px] text-start">
      Browse Our Services: Tailored Solutions for Compliance Success
    </p>
    <div className="flex items-center mt-4">
      <img src={layer} className="text-white mr-2 w-4 h-4 sm:w-8 sm:h-8" alt="Image" />
      <span className="text-start text-[#2029BC] lg:text-[14px] sm:text-[16px]">See All &gt;</span>
    </div>
  </div>

  {/* Right Section */}
  <div className="lg:h-[260px] sm:h-[300px] flex items-center bg-[#1f2933]">
  <img
      src={group8}
      className="w-full h-full object-cover"
      alt="Dining Experience"
    />
    {/* Uncomment to add overlay on image */}
    {/* <div className="absolute inset-0 bg-[#1f2933] bg-opacity-50"></div> */}
  </div>
</div>


</div>


    </>
  );
};

export default Herosection;
