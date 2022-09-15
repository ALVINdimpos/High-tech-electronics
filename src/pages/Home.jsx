import React from 'react'
import NavBar from '../NavBar/Index'
import MainHeader from '../MainHeader/Index'
import Footer from '../Footer/Index'
import Card from "../Card/Index"
import Experience from '../Exprience/Index'

const Home = () => {
  return (
    <>
  <NavBar/>
  <MainHeader/>
  <h1 style={{textAlign:'center',marginTop:'1rem'}}>Our products</h1>
  <Card/>
  <Experience/>
  <Footer/>
  </>
  )
}

export default Home