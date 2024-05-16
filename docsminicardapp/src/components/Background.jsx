import React from 'react'

function Background() {
  return (
    <>
        <div className='z-[2] fixed w-full h-screen'>
        <div className=" absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold">Documents</div>
          <h1
          className='text-[13vw] absolute top-1/2 left-1/2 leading-none tracking-tighter -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-700'
          >Docs.</h1>
        </div>
        </>
  )
}

export default Background