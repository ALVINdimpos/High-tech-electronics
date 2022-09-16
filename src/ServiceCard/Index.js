/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Style.css"
import Service from "../assets/images/Service.jpg"
const Index = () => {
  return (
    <div className='Card_container'>
    <div className="card">
        <img src={Service}/>
         <div className='card_contents'>
       <h3>Service title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
       </div>
    
    </div>
    <div className="card">
        <img src={Service}/>
         <div className='card_contents'>
       <h3>Service title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
       </div>
    
    </div>
    <div className="card">
        <img src={Service}/>
         <div className='card_contents'>
       <h3>Service title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
       </div>
    
    </div>
    <div className="card">
        <img src={Service}/>
         <div className='card_contents'>
       <h3>Service title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
    
       </div>
    
    </div>
    </div>
  )
}

export default Index