import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
function Cards() {
  return (
    
       <div className=' relative w-60 h-72 rounded-[35px] p-5 bg-zinc-700 text-white overflow-hidden'> 
       <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between mb-3 py-4 px-7'>
            <h5>.4mb</h5>
            <span className='w-6 h-7 bg-zinc-100 rounded-full items-center justify-center flex'>
            <HiOutlineDownload size=".9em" color='#000'/>
            </span>
          </div>
          <div className='tag w-full py-2 flex justify-center items-center bg-emerald-800'>
          <h4 className='text-md font-semibold'> Download Now </h4>
          </div>
        </div>
        footer
              data 
              tag
       </div>
   
  )
}

export default Cards
