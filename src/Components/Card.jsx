
import React from 'react';

import {AiOutlineShopping , AiOutlineHeart} from "react-icons/ai"

import {IoPricetagsOutline} from "react-icons/io5"


const Card = ({Data,AddToCart}) => {



  return (
   
          <div  key={Data.clothId}>
          <div className=' shadow-md hover:shadow-lg   sm:w-48 h-60 w-60 m-10   bg-slate-50   duration-1000 rounded-lg text-center  hover:transition-shadow'>
            <img className='object-contain h-40 w-full  py-2 hover:scale-110 duration-500' src={Data.clothImage}  alt='images' width={100} height={100} />

            <div className='flex flex-row justify-around mt-5'>
           
           
            
            <AiOutlineHeart className='text-2xl text-blue-400 hover:scale-150 rounded-3xl hover:text-red-400'/>
          
           <AiOutlineShopping onClick={() => AddToCart(Data)} className='text-2xl text-blue-400 hover:scale-150 rounded-3xl hover:text-red-400'  />

           <h2 className='text-xl flex flex-row justify-center text-gray-500'> <IoPricetagsOutline  className=' text-blue-400 text-2xl  hover:skew-x-12 rounded-3xl hover:text-red-400'/>{Data.clothPrice}</h2>
          </div>
         
         
          </div>
          </div>
      
      
  
   
  )
}

export default Card