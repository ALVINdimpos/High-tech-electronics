import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'
const Index = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="main-header">
            <div className="main-header__content"> 
               <h1> High Tech Electronics LTD</h1>
               <p>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                 Nullam lectus erat consectetur eu 
                 sapien eget, rhoncus consectetur sem.</p>
                 <button className='btn btn-primary' style={{backgroundColor:"#10CDD3",color:"black",border:"none"}} 
                 onClick={()=>{navigate("/Product")}}
                 >View our products</button>
                 </div>
        </div>
    </div>
  )
}

export default Index