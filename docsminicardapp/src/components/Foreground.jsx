import React , {useRef, useState} from 'react'
import Cards from './Cards'

function Foreground() {
  const ref = useRef(null)
  const data = [
          {
            desc: "This Is a Doc Template" ,
           fileSize: ".95mb" ,
           isDownloaded: true,
           tag : {isOpen: false , tagTitle: "Download Now" , tagColor: "amber"},
          },
          {
            desc: "Lorem ipsum dolor sit amet, yo yo yo" ,
           fileSize: ".68mb" ,
           isDownloaded: false,
           tag : {isOpen: true , tagTitle: "Upload Now" , tagColor: "amber"},
          },
          {
            desc: "Check This Doc template" ,
           fileSize: ".48mb" ,
           isDownloaded: false,
           tag : {isOpen: false , tagTitle: "Download now" , tagColor: "amber"},
          },
          {
            desc: "Lorem ipsum dolor sit amet, yo yo yo" ,
           fileSize: ".35mb" ,
           isDownloaded: false,
           tag : {isOpen: true , tagTitle: "Download Now" , tagColor: "emerald"},
          },
      ];
      

  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'  >

        {data.map((items , index)=>
            (<Cards data = {items} referance = {ref}/>)
        )}

    </div>
  )
}

export default Foreground
