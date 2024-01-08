import React from 'react'

const Cart = ({CartItems}) => {

 
  
  return (
    
    <div>
      
      {
        
      CartItems.length >0 ?
      <div>
       
        {
           // eslint-disable-next-line
        CartItems.map((x)=>
        {
          <div className=' bg-teal-100   sm:w-48 h-60 w-60 m-10  hover:scale-110  duration-1000 rounded-lg text-center  hover:transition-shadow'>
          <h1>x.price</h1>
          <img className='object-contain h-40 w-full  py-2 hover:scale-100 hover:rotate-45 duration-500' src={x.img} alt='images'/>
        </div> 
        }
       )
      }
      </div>
      : <div> Your cart is empyt now</div>
    }
      
     </div>
  )
}

export default Cart;