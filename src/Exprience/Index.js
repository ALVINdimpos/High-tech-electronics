import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate= useNavigate();
  return (
    <div>
        <div className="Experience_container">
            <div className="Experience_contents">
                <h1>We’ve Been selling For Over 3 years</h1>
                <p>High tech electronics is a tech shop 
                  operating in Rwanda since 2020, Selling 
                  very positive,unique and high quality electronics
                   and accessories both used and brand new
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