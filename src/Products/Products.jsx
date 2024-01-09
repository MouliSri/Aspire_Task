
import React from 'react'
import MensData from '../Mens/MensData';
import WomensData from '../Womens/WomensData';
import kidsData from '../Kids/KidsData';
import {BsFilter} from "react-icons/bs"
import Card from "../Components/Card"


const Products = () => {

  // const [AllProducts,setAllProducts]=useState([]);

  // useEffect(() => {
  //   getAllProducts()
  // }, [])

  // async function getAllProducts(){

  //   const AllData=await getRequest("/Products");

     
  //   setAllProducts(AllData);
  // }
  


  const AllProducts=[...MensData,...WomensData,...kidsData];

  
  return (
    <div>

     
      
        <h1 className='text-3xl text-center m-10 text-black font-serif'>All Products</h1>
        <button className='border-2   hover:border-teal-500 rounded h-10 w-30 ml-10 flex p-2  font-bold  '>Filter <BsFilter className='text-2xl ml-2' /></button>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden  '>
          
        {
        AllProducts.map((x)=><Card Data={x} />)
        }
        
      </div>
   
   
     
    
    </div>
  )
}

export default Products