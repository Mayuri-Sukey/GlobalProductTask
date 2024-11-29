import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import footer1 from '../assets/footer1.png';
import footer2 from '../assets/footer2.png';

const Footer = () => {
  return (
    <footer className="bg-[#0E263E] text-[#FFFFFF]  text-[14px] leading-[30px] tracking-normal opacity-100 text-left" style={{fontFamily:'Arial'}}>

      <div className="container mx-auto py-10 px-4 sm:px-6 md:px-10">
        {/* Flex Container for Footer Content */}
        <div className="flex flex-wrap justify-between gap-8">
          {/* Column 1: Logo and About Section */}
          <div className="flex-1 lg:min-w-[350px] min-w-[250px]">
            <h2 className=" font-bold text-white mb-4">LOGO</h2>
            <p className="">
              Welcome to Compliance Excellence Hub – your free portal for regulatory compliance intelligence. Access all
              you need to learn, assess, and manage compliance requirements efficiently.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className=" font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>Home</li>
              <li>Sector</li>
              <li>Regulatory Regions</li>
              <li>Compliance Advisor</li>
              <li>Buy Tox Data</li>
              <li>Lab Services</li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-bold text-white mb-4">Links</h4>
            <ul className="space-y-3 text-sm">
              <li>Services</li>
              <li>About Us</li>
              <li>News</li>
              <li>Deadlines</li>
              <li>Case Studies</li>
              <li>Newsletter</li>
            </ul>
          </div>

          {/* Column 4: Other Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="font-bold text-white mb-4">Other Links</h4>
            <ul className="space-y-3 text-sm">
              <li>Job Opening</li>
              <li>Internship</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 5: Latest News & Blogs */}
          <div className="flex-1 lg:min-w-[350px] min-w-[250px]">
            <h4 className="font-bold text-white mb-4">Latest News & Blogs</h4>
            <div className="space-y-8 text-sm">
    
              <div className="flex gap-2">
                <img src={footer1} className ="w-[60px]"/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
           
              <div className="flex gap-2">
               
              <img src={footer2} className ="w-[60px]"/> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-700 py-5">
        <p className="text-center text-sm text-gray-400">
          © 2024, All rights reserved to companyname.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;