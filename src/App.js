import React from "react";


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
  
   

    
  
  return (
    
    <div>
    <Navbar />
  
    <Routes>

      
  
    <Route   index element={<Home />} />
    <Route   path='/Cart' element={<Cart />} />
    <Route   path='/Mens' element={<Mens  />} />
    <Route   path='/Womens' element={<Womens />} />
    <Route   path='/Kids' element={<Kids />} />
    <Route   path='/Products' element={<Products />} />
    <Route   path='/Track' element={<Track/>} />
    <Route   path='/Liked' element={<Liked/>} />
    <Route exact path='/Login' element={<Login />} />


    </Routes>
  
    </div>

    

  )
}

export default App
