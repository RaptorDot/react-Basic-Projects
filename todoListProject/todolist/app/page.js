"use client";
import React, { useState } from 'react'

function page() {
    const submitHandler = (e)=>{
      e.preventDefault();
      console.log(title);
      console.log(description);
      setMainTask(...mainTask , {title , description});
      setdescription("");
      settitle("");
    }
 const [title , settitle] =useState("");
 const [description , setdescription] =useState("");
 const [mainTask, setMainTask] = useState([])
    let randerTask = <h2>No Task Available</h2>

  return (
  <>
  
  <h1 
  className="bg-slate-900 text-white p-4 text-5xl text-center font-bold shadow-black"
  > Todo-List</h1>
  <form onSubmit={submitHandler}>
    
    <input
    type='text' className="text-2xl border-zinc-900 border-4 m-7 px-5 py-2"
    placeholder='Enter Your Task' 
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    />
    
    <input
    type='text' className="text-2xl border-zinc-900 border-4 m-7 px-5 py-2"
    placeholder='Enter The Description' 
    value={description}
    onChange={(e)=>{
      setdescription(e.target.value)
    }}
    />
   <button className="bg-slate-800 rounded-xl text-white text-3xl px-5 py-2 border-2 m-4">
    Add
   </button>
   
  </form>
  <hr/>

  <div>
    <ul>
      {randerTask}
    </ul>

  </div>
  </>
  )
}

export default page
