import React from 'react'
import NavBar from "../NavBar/Index"
import PageIndicator from "../PageIndicator/Index"
import Card from "../Card/Index"
import Footer from "../Footer/Index"
const OurProduct = () => {
  return (
    <>
    <NavBar/>
    <PageIndicator name="Our products"/>
    <h1 style={{fontWeight:"bolder",textAlign:"center",marginTop:"2rem"}}>Our products</h1>
    <Card/>
    <Card/>
    <Footer/>
    </>
  )
}

export default OurProduct