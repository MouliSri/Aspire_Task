import { Brands } from "./Components/Brands";
import { Footer } from "./Components/Footer";
import Horizontal from "./Components/Horizontal";

import Poster from "./Components/Poster";

import React from 'react'

const Home = () => {
  return (
    <div>
      <Horizontal />
      <Poster />
      <Brands />
      <Footer />
    </div>
  )
}

export default Home