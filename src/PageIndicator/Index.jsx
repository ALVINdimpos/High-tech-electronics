import React from 'react'
import "./Style.css"
import Vector from '../assets/images/Page.svg'
const Index = (props) => {
  return (
    <>
    <div className='Page_indicator' >
    <h1> <img src={Vector} alt="" /> {props.name}</h1>
    </div>
    </>
  )
}

export default Index