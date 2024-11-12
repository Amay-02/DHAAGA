import React from 'react'
import List from '../Components/productList'
import Carousel from '../Components/Carousel'
import Categories from "../Components/PopularCategories.jsx"

import Blogs from '../Components/Blogs.jsx'
const Home = () => {
  return (
    <div>
     <Carousel />
     <List/>
     <Categories/>
     <Blogs/>
    
    </div>
  )
}

export default Home
