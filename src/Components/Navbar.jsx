
import {React,useState} from 'react'
import { AiOutlineMenu ,AiOutlineUser ,AiOutlineSearch ,AiOutlineHeart ,AiOutlineShoppingCart } from "react-icons/ai";

import { NavLink} from "react-router-dom"

import Logo1 from "../images/Logo1.png"


import {TbHanger} from "react-icons/tb"
import {MdOutlineDoubleArrow } from "react-icons/md";
import {SiGhostery ,SiHelpscout} from "react-icons/si"
import {GiChainMail} from "react-icons/gi";
import {RxCross2} from "react-icons/rx";





export const Navbar = () => {
 const[menu,setMenu]=useState(false);
 const[Gender,setGender]=useState(false);

 const handleClick=()=>{
  setMenu(!menu)
 
  
 }
 const handleGender=()=>{
  setGender(!Gender)
 }


 const [search,SetSearch]=useState(false);

 const Handlesearch=()=>{
  SetSearch(!search)
 }


  return (
    <div>
    <nav className=' flex:none sm:flex justify-between px-5  items-center w-full  min-w-full  '>
    <NavLink  to="/"><TbHanger  className='text-4xl  hover:text-red-500 hidden md:block '/></NavLink>
     <img src={Logo1}  className='h-30 w-60' alt='imageLogo'/>


       <div className='flex  justify-between'>
       <NavLink  to="/Login"><AiOutlineUser className='text-xl mx-5 hover:text-red-500 '/> </NavLink>
       <NavLink  to="/Liked"><AiOutlineHeart   className="text-xl  mx-5 hover:text-red-500 "/></NavLink>
       <NavLink  to="/Cart"><AiOutlineShoppingCart className="text-xl  mx-5 hover:text-red-500" /></NavLink>
       <p onClick={Handlesearch}><AiOutlineSearch  className="text-xl mx-5 hover:text-red-500"  /></p>

      <div onClick={handleClick}>{menu ?<RxCross2 className="text-xl mx-5 hover:text-red-500 hover:animate-spin"/>:<AiOutlineMenu  className="text-xl mx-5 hover:text-red-500 " />}
      </div>

      </div>
      
    </nav>
    {menu ? <div className='mx-5  my-4 font-serif'>
    <h1 ><p  onClick={handleGender} className='flex text-xl '>Gender  <SiGhostery  className=" text-sm mt-2 ml-2 hover:text-blue-500 animate-pulse"/></p>
    { Gender?
    <ul  >
       
       <li className='flex'><MdOutlineDoubleArrow className="text-xl mx-5 hover:text-blue-500"/><NavLink to='/Mens' className=' hover:text-gray-600'>Mens</NavLink></li>
      <li className='flex'><MdOutlineDoubleArrow className="text-xl mx-5 hover:text-blue-500"/><NavLink to='/Womens' className=' hover:text-gray-600'>Women</NavLink></li>
      <li className='flex'><MdOutlineDoubleArrow className="text-xl mx-5 hover:text-blue-500"/><NavLink to='/Kids' className=' hover:text-gray-600'>Kids</NavLink></li>
       </ul>:<div></div>
}</h1>

   <div className='flex flex-col'>

   <NavLink to="/Products"  ><p className='flex text-xl '>All Products<GiChainMail className=" text-lg mt-2 ml-2 hover:text-blue-500 animate-bounce"/></p></NavLink>
   <NavLink  to="/Track"  ><p className='flex text-xl '>Track Order<SiHelpscout className=" text-sm mt-2 ml-2 hover:text-blue-500 "/></p></NavLink>
    
    </div>
    </div>:
    <div>
   </div>   
}
  
  {
    search? <div className='mt-5'>
    <form>   
        <label for="search" class="mb-2 text-sm font-medium text-gray-200 sr-only ">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-200 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type='text' placeholder='Search products' class="block w-full p-4 pl-10 text-sm text-gray-700 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "  required/>
            <button type="submit" class=" absolute right-2.5 bottom-2.5  hover:bg-gradient-to-r from-teal-200 to-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-700 font-medium rounded-lg text-sm px-4 py-2   ">Search</button>
            
        </div>
    </form>
    </div>:<div></div>
  }

    </div>
    
  )
}
