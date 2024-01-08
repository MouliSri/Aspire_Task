'use client';
import React,{useEffect} from 'react'

import {BsFilter} from "react-icons/bs"

import Card from "../Components/Card"
import MensData from './MensData';

import $ from "jquery"


const Mens = (AddToCart) => {


  useEffect(()=>{
       

   

    $(document).on('click', '.MenCard', () => {
      $('.cards').toggle(2000);
    });

    return () => {
      $(document).off('click', '.MenCard');
    };
  },[])

    
  

 
  
  return (
    <div>

     
      
        <h1 className='MenCard text-3xl text-center m-10 text-black font-serif'>Mens Section</h1>
        <button className='border-2   hover:border-teal-500 rounded h-10 w-30 ml-10 flex p-2  font-bold  '>Filter <BsFilter className='text-2xl ml-2' /></button>
        <div className='cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden  '>
          
        {
        MensData.map((data)=><Card Data={data} AddToCart={AddToCart}/>)
        }
        
      </div>
   
   
     
    
    </div>
  )
}

export default Mens;
