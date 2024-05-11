"use client";
import React, { useState } from 'react'

function page() {
 const [title , settitle] =useState("");
 const [description , setdescription] =useState("");

  return (
  <>
  
  <h1 
  className="bg-slate-900 text-white p-4 text-5xl text-center font-bold shadow-black"
  > Todo-List</h1>
  <form>
    
    <input
    type='text' className="text-2xl border-zinc-900 border-4 m-7 px-5 py-2"
    placeholder='Enter Your Task' 
    value={title}
    onChange={(e)=>{
      console.log(e.target.value)
      settitle(e.target.value)
    }}
    />
    
    <input
    type='text' className="text-2xl border-zinc-900 border-4 m-7 px-5 py-2"
    placeholder='Enter The Description' 
    value={description}
    onChange={(e)=>{
      console.log(e.target.value)
      setdescription(e.target.value)
    }}
    />
   <button className="bg-slate-800 rounded-xl text-white text-3xl px-5 py-2 border-2 m-4">
    Add
   </button>
   
  </form>
  </>
  )
}

export default page
