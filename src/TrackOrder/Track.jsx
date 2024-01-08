import React from 'react'
import {Gi3DGlasses} from "react-icons/gi"

const Track = () => {
  return (
    <div className="flex  flex-col md:flex-row  justify-center items-center   mt-24  gap-5">
     <div className=" w-76 sm:w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 className="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i> Track Order</h1>
      <Gi3DGlasses  className='text-2xl mx-2'/>
    
      <hr class="mt-3" />
                <div className="mt-6">
                    <label for="username" class="block text-base mb-2">Tracking Id</label>
                    <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Tracking Id..." />
                </div>
               
                <div className="mt-6 flex justify-between gap-4 items-center">
                     
                <button className='border-2   hover:border-teal-500 rounded h-10 w-30 ml-10 flex p-2  font-bold  '>Submit </button>
                </div>
     
        
                </div>
           
        </div>
      
      
  
  )
}

export default Track;