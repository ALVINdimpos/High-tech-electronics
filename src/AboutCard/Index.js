/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Style.css"
import mission from "../assets/images/mission.jpg"
import vission from "../assets/images/vission.jpg"
import value from "../assets/images/value.png"
const Index = () => {
  return (
    <div className='Card_container1'>
    <div className="card">
        <img src={mission}/>
         <div className='card_contents'>
       <h3>Our mission</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
       </div>
    
    </div>
    <div className="card">
        <img src={vission}/>
         <div className='card_contents'>
       <h3>Our vission</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
       </div>
    
    </div>
    <div className="card">
        <img src={value}/>
         <div className='card_contents'>
       <h3>Our value</h3>
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