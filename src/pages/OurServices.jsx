import React from 'react'
import NavBar from "../NavBar/Index"
import PageIndicator from "../PageIndicator/Index"
import Card from "../ServiceCard/Index"
import Footer from "../Footer/Index"
const OurServices = () => {
  return (
    <>
    <NavBar/>
    <PageIndicator name="Our services"/>
    <h1 style={{fontWeight:"bolder",textAlign:"center",marginTop:"2rem"}}>Our Top Servive</h1>
    <Card/>
    <Footer/>
    </>
  )
}

export default OurServices