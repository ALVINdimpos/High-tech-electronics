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
        <p>To strengthen our brand through offering excellent quality
         products and good services to satisify our customers at their door steps.        </p>
       </div>
    
    </div>
    <div className="card">
        <img src={vission}/>
         <div className='card_contents'>
       <h3>Our vission</h3>
        <p>Spreading the wings across the country while 
         contribution in development of technology  </p>
       </div>
    
    </div>
    <div className="card">
        <img src={value}/>
         <div className='card_contents'>
       <h3>Our value</h3>
        <p>-we conduct business in an atmosphere  of love,care,honesty and trust.
           -offering quality products to the electronists with the best price at your door step.
        </p>
       </div>
    
    </div>

    </div>
  )
}

export default Index