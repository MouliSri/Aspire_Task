import React from 'react'
import { useDispatch,useSelector } from 'react-redux';


import { removeFromCart } from '../action';


const Cart = () => {


  const dispath=useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const handleDelete=(item)=>{
       dispath(removeFromCart(item))
  }

  

 
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.clothId}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                className="w-full  h-60 object-fit object-center"
                src={item.clothImage}
                alt={item.clothId}
              />
              <div className="p-4">
  
                <p className="text-gray-600 mb-2">${item.clothPrice}</p>

                <button onClick={()=> handleDelete(item)}>Delete Item</button>
             
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-8">
          Your cart is empty now
        </div>
      )}
    </div>
  );
};

export default Cart;