import React from 'react';
import  group from '../assets/group.png';
import group2 from '../assets/group2.png';
import group1 from '../assets/group1.png';
import { FaUser } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import  layer from "../assets/Layer 2.png" ;
import joinus from '../assets/join.png';



const AboutUs = () => {
  return (
    <>
   <div className="max-w-screen-xl mx-auto lg:p-6 sm:p-4 px-4">
  {/* Header Section */}
  <header className="mb-10 flex flex-col items-center lg:flex-row lg:justify-between">
    <h2 className="sm:w-auto lg:text-start text-center text-[#1F2933] underline font-semibold text-[24px] leading-[40px] tracking-normal opacity-100">
      Discover our <span className="text-[#FBB03B]">researches</span>
    </h2>
  </header>

  {/* Description Section */}
  <div className="mb-6 text-center lg:text-start">
    <p className="text-[#646464] text-[13px] leading-[30px] lg:w-[574px] tracking-normal underline mx-auto lg:mx-0">
      Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.
    </p>
    <div className="flex justify-center lg:justify-start items-center mt-4 hover:text-[#FBB03B]">
      <img src={layer} className="text-white hover:text-[#FBB03B] mr-2 w-4 h-4 sm:w-8 sm:h-8" alt="Image" />
      <span className="text-center lg:text-start text-black text-[14px] sm:text-[14px]">View All &gt;</span>
    </div>
  </div>

  {/* Researches Section */}
  <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6">
    {/* Left Side (Large Image) */}
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${group1})` }}>
      <div className="p-4 h-full flex flex-col justify-end lg:px-10">
        <div className="text-white text-sm mb-4 flex items-center justify-center lg:justify-start space-x-4 underline">
          <div className="flex items-center">
            <FaUser className="text-white mr-2" size={20} /> Rushabh
          </div>
          <div className="flex items-center">
            <MdAccessTime className="text-white mr-2" size={20} /> April 23, 2024
          </div>
        </div>
        <h2 className="text-white text-[14px] leading-[30px] font-semibold text-center lg:text-start underline">
          A Global Overview on the ROHS
        </h2>
        <p className="text-white text-[14px] leading-[30px] font-normal text-center lg:text-start underline">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quis illo illum nesciunt rerum.
        </p>
      </div>
    </div>

    {/* Right Side (Two Smaller Images) */}
    <div className="space-y-6">
      {/* Top Small Image */}
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${group})` }}>
        <div className="p-4 h-full flex flex-col justify-end lg:px-10">
          <div className="text-white text-sm mb-4 flex items-center justify-center lg:justify-start space-x-4 underline">
            <div className="flex items-center">
              <FaUser className="text-white mr-2" size={20} /> Rushabh
            </div>
            <div className="flex items-center">
              <MdAccessTime className="text-white mr-2" size={20} /> April 23, 2024
            </div>
          </div>
          <h2 className="text-white text-[14px] leading-[30px] font-semibold text-center lg:text-start underline">
            A Global Overview on the ROHS
          </h2>
          <p className="text-white text-[14px] leading-[30px] font-normal text-center lg:text-start underline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quis illo illum nesciunt rerum.
          </p>
        </div>
      </div>

      {/* Bottom Small Image */}
      <div className="bg-cover bg-center rounded-lg shadow-lg h-64" style={{ backgroundImage: `url(${group2})` }}>
        <div className="p-4 h-full flex flex-col justify-end lg:px-10">
          <div className="text-white text-sm mb-4 flex items-center justify-center lg:justify-start space-x-4 underline">
            <div className="flex items-center">
              <FaUser className="text-white mr-2" size={20} /> Rushabh
            </div>
            <div className="flex items-center">
              <MdAccessTime className="text-white mr-2" size={20} /> April 23, 2024
            </div>
          </div>
          <h2 className="text-white text-[14px] leading-[30px] font-semibold text-center lg:text-start underline">
            A Global Overview on the ROHS
          </h2>
          <p className="text-white text-[14px] leading-[30px] font-normal text-center lg:text-start underline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quis illo illum nesciunt rerum.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Join Us Section */}
  <div
  className="join-us mt-10 mb-6 bg-cover bg-center mx-auto sm:h-[250px] h-[180px]" // Adjusted height for mobile view
  style={{
    backgroundImage: `url(${joinus})`,
    height: '250px', // Default height for larger screens
  }}
></div>

</div>

  {/* join us */}

  

  </>
  );
};

export default AboutUs;
