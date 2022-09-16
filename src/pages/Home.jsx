import React from 'react'
import NavBar from '../NavBar/Index'
import MainHeader from '../MainHeader/Index'
import Footer from '../Footer/Index'
import Card from "../Card/Index"
import Experience from '../Exprience/Index'
import OurTeam from '../OurTeam/Index'
import Tesmonial from '../OurTestmonial/Index'
const Home = () => {
  return (
    <>
  <NavBar/>
  <MainHeader/>
  <h1 style={{textAlign:'center',marginTop:'1rem'}}>Our products</h1>
  <Card/>
  <Experience/>
  <OurTeam/>
  <h1 style={{fontWeight:"bolder",textAlign:"center",marginTop:"2rem"}}>Our Tesmonials</h1>
  <Tesmonial/>
  <Footer/>
  </>
  )
}

export default Home