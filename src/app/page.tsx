
import React from 'react'
import Hero from "./components/hero";
import Companylogo from "./components/componylogo";
import Featuredproducts  from "./components/featuredproducts";
import Topcategories  from "./components/topcatagories";
import OurProduct  from "./components/ourproducts";

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <Companylogo />
      <Featuredproducts />
      <Topcategories />
      <OurProduct />
    </div>
  )
}
