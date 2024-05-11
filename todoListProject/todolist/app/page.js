"use client";
import React, { useState } from 'react'

function page() {
    const submitHandler = (e)=>{
      e.preventDefault();
      setMainTask([...mainTask , {title , description}]);
      setdescription("");
      settitle("");
    }

 const [title , settitle] =useState("");
 const [description , setdescription] =useState("");
 let [mainTask, setMainTask] = useState([])
    let randerTask = <h2 className='text-3xl'>No Task Available</h2>

      const deleteHandler = (i)=>{
        let copyTask = [...mainTask]
        copyTask.splice(i ,1);
        setMainTask(copyTask);
      }

      if(mainTask.length >0){
        randerTask =  mainTask.map((t , i)=> {
       return(
       <li key={i} className="flex items-center justify-between">
       <div className='flex justify-between rounded-sm m-3 p-1 w-2/3'>
          <h5 className="font-semibold text-3xl">{t.title}</h5>
          <h6 className="text-2xl">{t.description}</h6>
        </div>
       <button
       onClick={()=>{deleteHandler(i)}}
       className="bg-slate-800 rounded-md text-white p-2">
        Delete
        </button>
       </li>
        )
        });
      }


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

  <div className="bg-slate-200">
    <ul className="m-5 p-2">
      {randerTask}
    </ul>

  </div>
  </>
  )
}

export default page
