import React from 'react'
import microscope from '../assets/microscope.png';
import group2 from '../assets/group2.png';
import right from '../assets/right.png';
import left from '../assets/left.png';
const Secondsection = () => {
  return (
    <>


<section className="bg-gray-100 py-10" style={{ overflow: 'hidden' }}>
  <div className="container mx-auto px-4 lg:px-16 lg:ml-10 lg:mx-20">
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
      {/* Left Section */}
      <div className="space-y-0">
        {/* About Us Section */}
        <div>
          <div className="bg-white  shadow-lg text-start lg:p-8">

            <h2 className="text-[#FBB03B] underline font-semibold text-[24px] leading-[40px] tracking-normal text-center lg:text-start">
              About <span className="text-black">Us</span>
            </h2>
            <p className="text-[#646464] text-[14px] leading-[30px] mt-3  lg:text-start sm:text-justify w-full lg:w-[469px] px-2">
              At Gpc Gatewaay, we are dedicated to delivering innovative solutions that empower businesses to thrive. With a focus on excellence and customer satisfaction, we leverage our expertise to provide tailored services that drive success. Discover how we can help you achieve your goals.
            </p>
            <button className="px-4 py-2 bg-black w-full lg:w-[161px] h-[50px] text-white text-sm font-medium mt-4">
              Read More
            </button>
          </div>
          <img
            src={right}
            className="hidden lg:block w-[113px] py-10 relative left-[400px]"
            alt="Arrow Right"
          />
        </div>

        {/* Benefits Section */}
        <div className="relative sm:w-full lg:w-[754px] sm:h-[200px] md:h-[250px] lg:h-[500px] lg:top-[5px] z-5">
          <img
            src={group2}
            alt="Scientists"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-0">
        {/* Microscope Image */}
        <div className="relative sm:w-full lg:w-[754px] sm:h-[200px] md:h-[250px] lg:h-[500px] lg:right-[100px]">
          <img
            src={microscope}
            alt="Microscope"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Benefits Text Section */}
        <div className="bg-white p-4 text-start lg:pl-28 lg:pr-[1px]">
          <h2 className="text-black underline font-semibold text-[24px] leading-[40px] tracking-normal text-center lg:text-start">
            Benefits of Having an <span className="text-[#FBB03B]">Account</span>
          </h2>
          <p className="text-[#646464] text-[14px] leading-[30px] mt-3 lg:text-start sm:text-justify w-full lg:w-[469px] ">
            At Gpc Gatewaay, we are dedicated to delivering innovative solutions that empower businesses to thrive. With a focus on excellence and customer satisfaction, we leverage our expertise to provide tailored services that drive success. Discover how we can help you achieve your goals.
          </p>
          <button className="px-4 py-2 bg-black w-full lg:w-[161px] h-[50px] text-white text-sm font-medium mt-4">
            Read More
          </button>
        </div>
        <img
          src={left}
          className="hidden lg:block w-[113px] py-10 relative left-[100px]"
          alt="Arrow Left"
        />
      </div>
    </div>
  </div>
</section>


 
      
    </>
  )
}

export default Secondsection
