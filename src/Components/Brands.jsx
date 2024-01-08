
import React,{useEffect} from 'react';

import puma from "../images/puma.png"
import Hm from "../images/HM.png"
import Raymond from "../images/Raymond.png"
import Gap from "../images/Gap.png";
import Levis from "../images/Levis.png"
import AllenSolly from "../images/AllenSolly.png"

import adidas  from "../images/adidas.jpg"
import { Slide } from 'react-awesome-reveal';
import $ from "jquery";


export const Brands = () => {

  useEffect(() => {
    $(".brand-img").on("click",()=>{
      $(".brands").fadeToggle(1000)
      // $(".brands").scrollLeft(500)
  
  })

       
  }, []);
   
 
   

  return (
    <Slide  direction='right'>
    <div className='mb-20 w-full max-w-full min-w-full'>
      <h1 className='brand-img text-2xl text-gray-500 text-center uppercase font-semibold mb-7'>Available Brands</h1>
      
    <div class="brands mt-10 py-5  grid grid-cols-3 sm:grid-cols-5 gap-5  my-10 " >
      <img src={puma} height={30} width={30} className=' mx-auto gap-4 scale-150 hover:skew-x-12'  alt="images" />
      <img src={Hm}  height={20} width={30} className='mx-auto gap-4 scale-150  object-center hover:skew-x-12' alt="images"/>
      <img src={Gap}  height={20} width={30} className='mx-auto  gap-4 scale-150 hover:skew-x-12' alt="images"/>
      <img src={Raymond}  height={60} width={50} className='mx-auto gap-4 scale-150 hover:skew-x-12' alt="images"/>
      <img src={Levis}  height={60} width={50} className='mx-auto  gap-4 scale-150 hover:skew-x-12' alt="images"/>
      <img src={AllenSolly}  height={60} width={50} className='mx-auto  gap-4 scale-150 hover:skew-x-12' alt="images"/>
      <img src={adidas}  height={30} width={30} className='mx-auto  gap-4 scale-150 hover:skew-x-12' alt="images"/>
      

  
</div>

</div>
</Slide>
  )
}
