
import React from 'react'
import Mens from "../images/Mens.png";
import Women from "../images/Women.png";
import child from "../images/child.jpeg";
import {NavLink} from "react-router-dom"
// import {NavLink} from "react-router-dom"
import { Fade } from "react-awesome-reveal";

const Horizontal = () => {
  return (
 
    <div className='grid grid-cols-1 gap-5 mt-8  sm:grid-col-2 md:grid-cols-3 mb-20 w-full max-w-full min-w-full'  >
    <Fade cascade direction="top-left" duration={2000}  damping={100}>
      <div  className='my-5'>
      <NavLink to="/Mens">
 <img src={Mens} alt='men'  className='rounded-xl w-full h-96 object-fit   relative  overflow-hidden  npm install taos --save  shadow-md  hover:opacity-80 '/>
 <p className='absolute  text-center   left-0 right-0 font-semibold text-2xl text-gray-500 items-center justify-center  ' >Mens</p>
 </NavLink>
 
 

 </div>
 </Fade>
 <Fade cascade direction="down" duration={2000} damping={100}>
 <div className='my-5 '>

 <NavLink to="/Womens"> 
 <img src={Women}    className='rounded-lg w-full h-96  object-fit   shadow-md hover:opacity-80 ' alt='women'/>

 <p className='absolute  text-center   left-0 right-0 font-semibold text-2xl text-gray-500 items-center justify-center  ' >Womens</p>
</NavLink>
 </div>
 </Fade>

 <Fade cascade direction="top-right" duration={2000}  damping={100}>
 <div className='my-5'>
 <NavLink to="/Kids">
 <img src={child}  alt='child'  className='rounded-lg w-full   relative  h-96 object-fill   shadow-md hover:opacity-80  '/>
 <p className='absolute  text-center   left-0 right-0 font-semibold text-2xl text-gray-500 items-center justify-center  ' >Kids</p>
 </NavLink>
 </div>
 </Fade>
 

 
  </div>

  )
}

export default Horizontal