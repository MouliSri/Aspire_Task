import React,{useEffect} from 'react'
import WomensData from './WomensData'

import Card from "../Components/Card"
import {BsFilter} from "react-icons/bs"

import $ from "jquery"


const Womens = ({AddToCart}) => {

  useEffect(()=>{
       

   

    $(document).on('click', '.WoMenCard', () => {
      $('.Womencards').toggle(2000);
    });

    return () => {
      $(document).off('click', '.WoMenCard');
    };
  },[])
  
  return (
    <div>
      
    <h1 className='WoMenCard text-3xl text-center m-10 text-black font-serif'>Women Section</h1>
    <button className='border-2   hover:border-teal-500 rounded h-10 w-30 ml-10 flex p-2  font-bold  '>Filter <BsFilter className='text-2xl ml-2' /></button>
    <div className='Womencards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden  '>
      
    {
    WomensData.map((x)=><Card Data={x} AddToCart={AddToCart}/>)
    }
    
  </div>
  </div>
  )
}

export default Womens;