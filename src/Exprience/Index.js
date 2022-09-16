import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate= useNavigate();
  return (
    <div>
        <div className="Experience_container">
            <div className="Experience_contents">
                <h1>We’ve Been selling For Over 20 years</h1>
                <p>Our team of experts has been selling for over 20 years.
                     We have a proven track record of selling homes quickly 
                     and for top dollar. We are here to help you sell your home.
                     </p>
                     <button className='btn btn-primary' style={{backgroundColor:"#10CDD3",color:"black",border:"none"}} 
                 onClick={()=>{navigate("/Product")}}
                 >About us</button>

                </div>
    </div>

    </div>
  )
}

export default Index