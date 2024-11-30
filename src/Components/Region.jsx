import React from "react";
import korea from "../assets/korea.png";
import turkey from "../assets/turkey.png";
import  layer from "../assets/Layer 2.png" ;


const Region = () => {
  return (
    <>
      <div class="max-w-7xl max-md:max-w-xl mx-auto  mb-8 mt-8">
        <div class="grid xl:grid-cols-2 md:grid-cols-2 gap-12 ">
          <div class="">
            <img src={korea} className=" lg:h-[320px] xs:h-[250px] sm:h-[300px] mx-auto" />
            <img
              src={turkey}
              className=" lg:h-[300px]  lg:relative left-52 -top-32 sm:static "
            />
          </div>

          <div class="w-full xl:col-span-1 max-md:px-6">
            <div >
              <h2 class="  sm:w-auto lg:text-start text-center text-[#1F2933] underline font-semibold text-[24px] leading-[40px]  tracking-normal opacity-100">
                Find Your <span className="text-[#FBB03B]">Region</span>
              </h2>
              <p class="text-[#646464] text-[13px] leading-[30px] text-justify lg:text-start mt-3 tracking-normal underline">
                Discover Regions Where We Operate
              </p>
              <p class="text-[#646464] text-[13px] leading-[30px] text-justify lg:text-start mt-3 tracking-normal underline">
                Explore the diverse regions where we provide our services and
                expertise. From local to global, find the region that suits your
                needs and discover how we can assist you in navigating
                regulatory compliance seamlessly.
              </p>

              <p class="text-[#646464B3] text-[13px] leading-[30px] text-justify lg:text-start mt-3 tracking-normal underline">
                Explore the diverse regions where we provide our services and
                expertise. From local to global, find the region that suits your
                needs and discover how we can assist you in navigating
                regulatory compliance seamlessly.
              </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-2 mt-4">
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Canada</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Eurasia</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Japan</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">USA</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Turkey</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Australia</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">USA</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">India</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Brazil</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Europe</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">China</h6>
  </div>
  <div class="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" class="fill-[#000000] shrink-0" viewBox="0 0 24 24">
      <path d="M12 5v14m7-7H5" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
    <h6 class="text-[#646464] text-[13px] leading-[30px]">Switzerland</h6>
  </div>
</div>


<div class="flex justify-center lg:justify-start sm:text-center">
  <button
    type="button"
    class="ml-4 lg:px-6 px-3 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-[#0E263E] bg-[black] hover:bg-transparent hover:text-black transition-all duration-300"
  >
    Find Your Region
  </button>
</div>

          </div>
        </div>
      </div>


      {/* Testimonial */}

      <div class="text-center max-w-xl mx-auto mb-4">
        <h2
  className="text-gray-800 text-center px-9"
  style={{
    textDecoration: "underline",
   
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "40px",
    letterSpacing: "0px",
    color: "black",
    opacity: "1"
  }}
>    Clients <span className='text-[#FBB03B]'>Testimonial </span></h2>
        <p
  className=" mt-3 text-center text-[#646464] opacity-100 px-10 underline"
  style={{
    
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "30px",
    letterSpacing: "0px"
  }}
>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt .
</p>

<div className="flex items-center justify-center mt-4">
  <img src={layer} className="text-white mr-2 w-[22px] h-6 sm:w-8 sm:h-8" alt="Image" />
  <span className="text-center text-[#1F2933] text-[14px] sm:text-[16px]">view All &gt;</span>
</div>


<div class="font-[sans-serif] text-[#333] text-center max-w-xl mx-auto mt-4">


<div className="flex justify-center items-center">
  <img src="https://readymadeui.com/profile_2.webp" className="w-14 h-14 rounded-full" alt="Profile" />
</div>

      

      <div class="mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 fill-[#646464] inline" viewBox="0 0 475.082 475.081">
        <path d="M164.454 36.547H54.818c-15.229 0-28.171 5.33-38.832 15.987C5.33 63.193 0 76.135 0 91.365v109.632c0 15.229 5.327 28.169 15.986 38.826 10.66 10.656 23.606 15.988 38.832 15.988h63.953c7.611 0 14.084 2.666 19.414 7.994 5.33 5.325 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.413 51.675-14.275 14.271-31.499 21.409-51.678 21.409h-18.27c-4.952 0-9.233 1.813-12.851 5.427-3.615 3.614-5.424 7.898-5.424 12.847v36.549c0 4.941 1.809 9.233 5.424 12.848 3.621 3.613 7.898 5.427 12.851 5.427h18.271c19.797 0 38.688-3.86 56.676-11.566 17.987-7.707 33.546-18.131 46.68-31.265 13.131-13.135 23.553-28.691 31.261-46.679 7.707-17.987 11.562-36.877 11.562-56.671V91.361c0-15.23-5.33-28.171-15.987-38.828s-23.602-15.986-38.827-15.986zm294.635 15.987c-10.656-10.657-23.599-15.987-38.828-15.987H310.629c-15.229 0-28.171 5.33-38.828 15.987-10.656 10.66-15.984 23.601-15.984 38.831v109.632c0 15.229 5.328 28.169 15.984 38.826 10.657 10.656 23.6 15.988 38.828 15.988h63.953c7.611 0 14.089 2.666 19.418 7.994 5.324 5.328 7.994 11.8 7.994 19.417v9.131c0 20.177-7.139 37.397-21.416 51.675-14.274 14.271-31.494 21.409-51.675 21.409h-18.274c-4.948 0-9.233 1.813-12.847 5.427-3.617 3.614-5.428 7.898-5.428 12.847v36.549c0 4.941 1.811 9.233 5.428 12.848 3.613 3.613 7.898 5.427 12.847 5.427h18.274c19.794 0 38.684-3.86 56.674-11.566 17.984-7.707 33.541-18.131 46.676-31.265 13.134-13.135 23.562-28.695 31.265-46.679 7.706-17.983 11.563-36.877 11.563-56.671V91.361c-.003-15.23-5.328-28.171-15.992-38.827z" data-original="#000000" />
      </svg> <span class="text-[#646464] text-[13px] leading-[30px] text-center mt-3 tracking-normal underline">
Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non..</span>


      </div>

      <div class="flex items-center justify-center space-x-2 gap-2">
 
  <div class="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
  
  
  <div class="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
  
  
  <div class="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
</div>

<p
  className=" mt-3 text-center text-[#0E263E] opacity-100 px-10 underline"
  style={{
    
    fontWeight: "medium",
    fontSize: "14px",
    lineHeight: "30px",
    letterSpacing: "0px"
  }}
>
Gordan Dale</p>

    </div>

      </div>

    </>
  );
};

export default Region;
