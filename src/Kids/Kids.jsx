import React from 'react'
import kidsData from './KidsData'
import Card from "../Components/Card"
import {BsFilter} from "react-icons/bs"


const Kids = ({AddToCart}) => {
  

  return (
    <div>

     
      
        <h1 className='text-3xl text-center m-10 text-black font-serif'>Kids Section</h1>
        <button className='border-2   hover:border-teal-500 rounded h-10 w-30 ml-10 flex p-2  font-bold  '>Filter <BsFilter className='text-2xl ml-2' /></button>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden  '>
          
        {
        kidsData.map((x)=><Card Data={x} AddToCart={AddToCart}/>)
        }
        
      </div>
   
   
     
    
    </div>
  )
}

export default Kids;