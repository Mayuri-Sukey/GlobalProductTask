import React from 'react'
import  layer from "../assets/Layer 2.png" ;
import blue from "../assets/blue.png";
import green from "../assets/green.png";
import orange from "../assets/orange.png";


const Servicessection = () => {
  return (
    <>
       <div className='text-[#FFFFFF]'>
        <div class="text-center max-w-xl mx-auto">
        <h2
  className="text-gray-800 text-center px-9"
  style={{
    textDecoration: "underline",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "40px",
    letterSpacing: "0px",
    color: "black",
    opacity: "1"
  }}
>Tailored <span className='text-[#FBB03B] underline decoration-[#FBB03B]'>Solutions</span> for Compliance <span className='text-[#FBB03B] underline decoration-[#FBB03B]'>Success</span></h2>
        <p
  className=" mt-6 text-center text-[#646464] opacity-100 px-10"
  style={{
    
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "30px",
    letterSpacing: "0px"
  }}
>
  Discover tailored services designed to streamline your compliance efforts. From consulting to software solutions, we offer comprehensive support for achieving regulatory excellence.
</p>

      </div>
      <div class="grid lg:grid-cols-3 items-center my-1 bg-white lg:max-w-7xl md:max-w-4xl sm:max-w-xl mx-auto p-4">
      <div class=" lg:col-span-1 sm:col-span-2  sm:px-8">
      <h2 class=" lg:w-[131px] sm:w-auto lg:text-start text-center text-[#1F2933] underline font-semibold text-[24px] leading-[40px]  tracking-normal opacity-100">
Access <br/>to <span className='text-[#FBB03B]'>services</span></h2>
        <p class="text-[#646464] text-[13px] leading-[30px] text-start mt-3 tracking-normal">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.</p>
        <p class="text-[#646464] text-[13px] leading-[30px] text-start mt-3 tracking-normal">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.</p>
        <div className="flex items-center mt-4">
      <img src={layer} className="text-white mr-2 w-6 h-6 sm:w-8 sm:h-8" alt="Image" />
      <span className="text-start text-[#2029BC] text-[14px] sm:text-[16px]">See All &gt;</span>
    </div>
      </div>

      <div class=" col-span-2 grid sm:grid-cols-3  mx-auto w-full">
      <div class="text-start  transition-all duration-300 rounded-xl p-6 w-full">
         <img src={blue} className="w-14 inline-block  p-3 rounded-full"/>
         <h3 class="text-[#1F2933] text-[16px] leading-[40px] font-600  text-start">Governance</h3>
         <p class="text-[#646464] text-[13px] leading-[30px] text-start  tracking-normal">Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis.</p>
        </div>

        <div class="text-start  transition-all duration-300 rounded-xl p-6 w-full">
        <img src={orange} className="w-14 inline-block  p-3 rounded-full"/>
        <h3 class="text-[#1F2933] text-[16px] leading-[40px] font-600  text-start">Precompliance</h3>
        <p class="text-[#646464] text-[13px] leading-[30px] text-start tracking-normal">Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis.</p>
        </div>

        <div class="text-start  transition-all duration-300 rounded-xl p-6 w-full">
        <img src={blue} className="w-14 inline-block  p-3 rounded-full"/>
        <h3 class="text-[#1F2933] text-[16px] leading-[40px] font-600  text-start">Subscription</h3>
        <p class="text-[#646464] text-[13px] leading-[30px] text-start  tracking-normal">Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis.</p>
        </div>

        <div class="text-start  transition-all duration-300 rounded-xl p-6 w-full">
        <img src={green} className="w-14 inline-block  p-3 rounded-full"/>
        <h3 class="text-[#1F2933] text-[16px] leading-[40px] font-600   text-start">Governance</h3>
        <p class="text-[#646464] text-[13px] leading-[30px] text-start  tracking-normal">Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis.</p>
        </div>

        <div class="text-start  transition-all duration-300 rounded-xl p-6 w-full">
        <img src={orange} className="w-14 inline-block  p-3 rounded-full"/>
          <h3 class="text-[#1F2933] text-[16px] leading-[40px] font-600   text-start">Precompliance</h3>
          <p class="text-[#646464] text-[13px] leading-[30px] text-start tracking-normal">Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis.</p>
        </div>
      </div>
    </div>
      </div>

      {/* newslwtter */}

      <div class="bg-[#1F2933] py-4 mb-4 ">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-40 p-4">
        <div class="w-full text-center lg:text-left">
        <h2 class="text-left font-semibold text-[26px] leading-[30px] tracking-normal text-white opacity-100">Newsletter</h2>

        <p class="text-left font-normal text-[14px] leading-[30px] tracking-normal text-white opacity-1 pt-4">
  Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.
</p>

        </div>
        <div class="w-full max-lg:max-w-lg">
  <form class="flex items-center">
    
    <input
      type="email"
      placeholder="Enter your email"
      class="w-full lg:w-[290px] h-[55px] text-gray-800 bg-white py-3 px-4 text-base border border-[#ddd] border-r-0 rounded-l-[3px] outline-none focus:border-blue-600"
      required
    />
    
    <button
      type="submit"
      class="w-[55px] h-[55px] bg-[#FBB03B] hover:opacity-90 text-white font-semibold border border-[#FBB03B] rounded-r-[3px] outline-none flex items-center justify-center">
      <span class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" />
</svg></span>
    </button>
  </form>
</div>


      </div>
    </div>
    </>
  )
}

export default Servicessection
