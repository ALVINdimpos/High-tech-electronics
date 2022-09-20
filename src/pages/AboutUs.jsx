import React from 'react'
import NavBar from "../NavBar/Index"
import PageIndicator from "../PageIndicator/Index"
import Card from "../AboutCard/Index"
import Footer from "../Footer/Index"

const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <PageIndicator name="About us"/>
    <h1 style={{fontWeight:"bolder",textAlign:"center",marginTop:"2rem"}}>About Us</h1>
    <p style={{textAlign:"center",marginTop:"2rem",width:"60%",margin:"0 auto"}}>  we are one of the most
     trusted electronics store for all kinds of 
     electronic components . We offer wide range of 
     quality products for hobbyist,students and all other 
     electronic service groups  </p>
 <Card/>
    <Footer/>
    </>
  )
}

export default AboutUs