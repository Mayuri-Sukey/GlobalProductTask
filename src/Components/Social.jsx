import React from 'react';
import { FiDownload } from 'react-icons/fi'; // Ensure the correct import path
import { MdFeedback } from 'react-icons/md';
import { MdReport } from 'react-icons/md';



const Social = () => {
    const phoneNumber = "919552767463"; // International format without spaces or special characters

    return (
        <div className='scroll_top'>
            
            <div className=' bg-[#F97300] lg:p-4 sm:p-2 mb-2 text-white'>   <FiDownload  className=''/> </div>
            <div className=' bg-[#EA5529] lg:p-4 sm:p-2 mb-2 text-white'>   <MdFeedback  className=''/> </div>
            <div className=' bg-[#3C61F7] lg:p-4 sm:p-2  text-white'>   <MdReport  className=''/> </div>
          
            
            

            

          

        </div>
    );
};

export default Social;
