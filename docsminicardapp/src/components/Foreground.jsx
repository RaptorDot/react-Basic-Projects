import React , {useState} from 'react'
import Cards from './Cards'
function Foreground() {

      const data = [
          {
            desc: "Lorem ipsum dolor sit amet, yo yo yo" ,
           fileSize: ".95mb" ,
           isClose: false ,
           tag : {isOpen: true , tagTitle: "Download Now" , tagColor: "green"},
          },
      ];

  return (
    <div className='fixed z-[3] top-0 left-0 w-full h-full'  >

        {data.map((items , index)=>
            <Cards data = {items}/>
        )}

    </div>
  )
}

export default Foreground
