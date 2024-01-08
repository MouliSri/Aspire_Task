import React,{useState} from "react";


import { Navbar } from "./Components/Navbar";
import { Route , Routes  } from "react-router-dom";


import Cart from "../src/Cart/Cart.js"
import Home from "../src/Home.jsx"
import Liked from "../src/LikedItems/Liked.jsx"
import Mens from "./Mens/Mens.jsx"
import Womens from "./Womens/Womens.jsx"
import Kids from "../src/Kids/Kids.jsx"
import Products from "./Products/Products.jsx"
import Track from "./TrackOrder/Track.jsx"
import Login from  "./Login/Login.jsx"



function App() {
  const [CartItems,setCartItems]=useState([]);


    const AddToCart=(item)=>{
      console.log(item);
      setCartItems(...item);
     
    }
   

    
  
  return (
    
    <div>
    <Navbar />
  
    <Routes>

      
  
    <Route   index element={<Home />} />
    <Route   path='/Cart' element={<Cart  CartItems={CartItems}/>} />
    <Route   path='/Mens' element={<Mens  AddToCart={AddToCart}/>} />
    <Route   path='/Womens' element={<Womens AddToCart={AddToCart}/>} />
    <Route   path='/Kids' element={<Kids AddToCart={AddToCart}/>} />
    <Route   path='/Products' element={<Products AddToCart={AddToCart}/>} />
    <Route   path='/Track' element={<Track/>} />
    <Route   path='/Liked' element={<Liked/>} />
    <Route exact path='/Login' element={<Login />} />


    </Routes>
  
    </div>

    

  )
}

export default App
