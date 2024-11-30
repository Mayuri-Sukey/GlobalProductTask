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
    <div className="max-w-screen-xl mx-auto lg:p-6 sm:p-4">
    {/* Header Section */}
    <header className="mb-10 flex justify-between items-center">
    <h2 class="  sm:w-auto lg:text-start text-center text-[#1F2933] underline font-semibold text-[24px] leading-[40px]  tracking-normal opacity-100">
    Discover our  <span className='text-[#FBB03B]'>researches</span></h2>
    </header>

    {/* Description Section */}
    <div className="mb-6">
    <p class="text-[#646464] text-[13px] leading-[30px] text-start lg:w-[574px] tracking-normal underline">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna.</p>
    <div className="flex items-center mt-4 hover:text-[#FBB03B]">
      <img src={layer} className="text-white hover:text-[#FBB03B] mr-2 w-2 h-2 sm:w-8 sm:h-8" alt="Image" />
      <span className="text-start text-[#black] text-[14px] sm:text-[14px]">view All &gt;</span>
    </div>
    </div>

    {/* Researches Section */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* Left Side (Large Image) */}
      <div className="md:col-span-1 bg-cover bg-center  " style={{ backgroundImage: `url(${group1})` }}>
        <div className="p-6  h-full flex flex-col justify-end lg:px-10 mb-4">
          <div className="text-white text-sm mb-4 flex items-center space-x-4 underline">
            <div className="flex items-center">
              <span className="material-icons-outlined mr-2">  <FaUser className="text-white" size={20} /></span> Rushabh
            </div>
            <div className="flex items-center">
              <span className="material-icons-outlined mr-2">   <MdAccessTime className="text-white" size={20} /></span> April 23, 2024
            </div>
          </div>
          <h2 className="text-[#FFFF] text-[14px] leading-[30px] font-600  text-start underline">A Global Overview on the ROHS</h2>
          <p className="text-[#FFFF] text-[14px] leading-[30px] font-normal  text-start underline w-[width: 390px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quis illo illum nesciunt rerum.
          </p>
        </div>
      </div>

      {/* Right Side (Two Smaller Images) */}
      <div className="space-y-6">
        {/* Top Small Image */}
        <div className="bg-cover bg-center  h-64" style={{ backgroundImage: `url(${group})` }}>
        <div className="p-6  h-full flex flex-col justify-end lg:px-10 mb-4">
          <div className="text-white text-sm mb-4 flex items-center space-x-4 underline">
            <div className="flex items-center">
              <span className="material-icons-outlined mr-2">  <FaUser className="text-white" size={20} /></span> Rushabh
            </div>
            <div className="flex items-center">
              <span className="material-icons-outlined mr-2">   <MdAccessTime className="text-white" size={20} /></span> April 23, 2024
            </div>
          </div>
          <h2 className="text-[#FFFF] text-[14px] leading-[30px] font-600  text-start underline">A Global Overview on the ROHS</h2>
          <p className="text-[#FFFF] text-[14px] leading-[30px] font-normal  text-start underline w-[width: 390px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quis illo illum nesciunt rerum.
          </p>
        </div>
        </div>

        {/* Bottom Small Image */}
        <div className="bg-cover bg-center rounded-lg shadow-lg h-64" style={{ backgroundImage: `url(${group2})` }}>
        <div className="p-6  h-full flex flex-col justify-end lg:px-10 mb-4">
          <div className="text-white text-sm mb-4 flex items-center space-x-4 underline">
            <div className="flex items-center">
              <span className="material-icons-outlined mr-2">  <FaUser className="text-white" size={20} /></span> Rushabh
            </div>
            <div className="flex items-center">
              <span className="material-icons-outlined mr-2">   <MdAccessTime className="text-white" size={20} /></span> April 23, 2024
            </div>
          </div>
          <h2 className="text-[#FFFF] text-[14px] leading-[30px] font-600  text-start underline">A Global Overview on the ROHS</h2>
          <p className="text-[#FFFF] text-[14px] leading-[30px] font-normal  text-start underline w-[width: 390px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quis illo illum nesciunt rerum.
          </p>
        </div>
        </div>
      </div>
    </div>

    <div class="join-us  sm:h-[250px]"   style={{
          backgroundImage: `url(${joinus})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '290px',
          marginTop: '40px',
        }}>
           
        </div>
  </div>

  {/* join us */}

  

  </>
  );
};

export default AboutUs;
