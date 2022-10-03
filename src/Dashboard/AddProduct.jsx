import axios from 'axios'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import  Product from '../assets/images/products.jpg'
const AddProduct = () => {
    const [image, setImage] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [price, setPrice] = React.useState('') 
    const [loading, setLoading] = React.useState(false)
    const images = useRef(null);
    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const priceHandler = (e) => {
        setPrice(e.target.value)
    }
    const data = new FormData()
    data.append('image', image)
    data.append('title', title)
    data.append('description', description)
    data.append('price', price)
    const submitHandler = async(e) => {
      e.preventDefault();
      setLoading(true);
      try{
        const res = await axios.post('https://agile-shelf-97452.herokuapp.com/api/create/service', data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        setLoading(false);
        console.log(res)
        images.current.value = null;
        setTitle('')
        setDescription('')
        setPrice('')
        if(res.status === 200){
          alert('Product added successfully')
      
      }
      }catch(err){
        console.log(err)

      }
  }
    
  return (
    <div className="wrapper">
    <div className="logo1">
<img src={Product} alt="" />
</div>
<div className="text-center mt-4 name">
  Add product
</div>
<form className="p-3 mt-3">
  <div className="form-field d-flex align-items-center">
    <input type="file" onChange={imageHandler} ref={images} />
  </div>
  <div className="form-field d-flex align-items-center">
    <input type="text" name="title" id="ttl" placeholder="Title" onChange={titleHandler} value={title} />
  </div>
  <div className="form-field d-flex align-items-center">
    <input type="text" name="description" id="ttl" placeholder="Description" onChange={descriptionHandler} value={description} />
  </div>
  <div className="form-field d-flex align-items-center">
    <input type="number" name="description" id="ttl" placeholder="Enter price" onChange={priceHandler} value={price} />
  </div>
  <button className="btn mt-3" onClick={submitHandler}>{loading ? "loading..." : `Save`}</button>
  <Link to="/" >Home</Link>
</form>

</div>
  )
}

export default AddProduct