import React from 'react'
import NavBar from '../NavBar/Index'
import MainHeader from '../MainHeader/Index'
import Footer from '../Footer/Index'
import Card from "../Card/Index"
import Experience from '../Exprience/Index'
import OurTeam from '../OurTeam/Index'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate= useNavigate()
  return (
    <>
  <NavBar/>
  <MainHeader/>
  <h1 style={{textAlign:'center',marginTop:'1rem'}}>Our products</h1>
  <Card/>
  <button className='btn btn-primary' style={{backgroundColor:"#10CDD3",color:"black",border:"none",margin:"15px"}} 
  onClick={()=>{
   navigate("/Product")
  }}> see more products</button>
  <Experience/>
  <h1 style={{fontWeight:"bolder",textAlign:"center",marginTop:"2rem"}}>Our Team</h1>
  <OurTeam/>
  <Footer/>
  </>
  )
}

export default Home