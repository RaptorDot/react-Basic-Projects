import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"

function Cards({data , referance}) {
  return (
    
       <motion.div drag animate={{ x: 100 }} dragConstraints = {referance} whileDrag={{scale : 1.15}} className='relative w-60 h-72 rounded-[35px] p-5 bg-zinc-700 text-white overflow-hidden'> 
       <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between mb-3 py-4 px-7'>
            <h5>{data.fileSize}</h5>
            <span className='w-6 h-7 bg-zinc-100 rounded-full items-center justify-center flex'>
               
               {data.isDownloaded? <TiTick color='#000' size="1em"/>: <HiOutlineDownload size=".9em" color='#000'/>}
              </span>
          </div>
              {data.tag.isOpen&&( 
              <div className={`tag w-full py-2 flex justify-center items-center ${data.tag.tagColor=="amber"? "bg-amber-800" : "bg-emerald-800"}`}>
                  <h4 className='text-md font-semibold'> {data.tag.tagTitle} </h4>
                  </div>
                )}
        </div>
        footer
              data 
              tag
       </motion.div >
   
  )
}

export default Cards
