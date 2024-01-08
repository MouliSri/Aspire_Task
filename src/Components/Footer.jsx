import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"



export const Footer = () => {
  return (
    <div className='  py-10  md:text-center text-center bg-black text-white w-full font-sans'>
      <p className=' text-gray-400  '>@TAFOSCLOTHINGS 2023</p>
     
      <div className=' text-gray-400 mt-5 '>
      <a href='https://goo.gl/maps/BfW7xzW6TJiZ4ewF7?coh=178571&entry=tt'>Address  : 
        <span  className='text-md '>Iduvai , Tirupur</span>
      <p >Pincode :<span className='text-md '> 641687</span></p>
      </a>
      </div>
      <div className=' flex-row text-3xl flex justify-center gap-5 py-3 text-gray-300 mt-5'>
      <AiOutlineInstagram className='hover:text-pink-800  rounded-3xl'/>
      <AiOutlineFacebook  className='hover:text-blue-400  rounded-3xl'/>
      <AiOutlineWhatsApp  className='hover:text-green-400 rounded-3xl'/>
      </div>
    </div>
  )
}