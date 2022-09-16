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
    <p style={{textAlign:"center",marginTop:"2rem",width:"60%",margin:"0 auto"}}> Lorem Ipsum is simply dummy text of
the printing and typesetting industry.
 Lorem Ipsum has been the industry's 
 standard dummy text ever since the 1500s, when an </p>
 <Card/>
    <Footer/>
    </>
  )
}

export default AboutUs