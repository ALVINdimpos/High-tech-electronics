/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./Style.css"
import Product from "../assets/images/product.webp"
const Index =() => {
  const [product , setProduct] = React.useState([])
  const fetnchProduct = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProduct(data)
  }
  React.useEffect(() => {
    fetnchProduct()
  }, [])
  console.log(product)
  return (
    <div className='Card_container'>
    <div className="card">
        <img src={Product}/>
         <div className='card_contents'>
       <h3>Product title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
        <h3>000 <span style={{fontSize:"16px"}}>FRw</span></h3>
       </div>
    
    </div>
    <div className="card">
        <img src={Product}/>
         <div className='card_contents'>
       <h3>Product title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
        <h3>000 <span style={{fontSize:"16px"}}>FRw</span></h3>
       </div>
    
    </div>
    <div className="card">
        <img src={Product}/>
         <div className='card_contents'>
       <h3>Product title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
        <h3>000 <span style={{fontSize:"16px"}}>FRw</span></h3>
       </div>
    
    </div>
    <div className="card">
        <img src={Product}/>
         <div className='card_contents'>
       <h3>Product title</h3>
        <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Phasellus augue ligula, feugiat ac leo
        </p>
        <h3>000 <span style={{fontSize:"16px"}}>FRw</span></h3>
       </div>
    
    </div>
    </div>
  )
}

export default Index