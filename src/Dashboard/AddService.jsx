import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import  Service from '../assets/images/service.webp'
const AddService = () => {
    const [image, setImage] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }
    const data = new FormData()
    data.append('image', image)
    data.append('title', title)
    data.append('description', description)

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
          setImage('')
          setTitle('')
          setDescription('')
          if(res.status === 200){
            alert('Service added successfully')
          }
        }catch(err){
          console.log(err)

        }
    }
  return (
    <div className="wrapper">
        <div className="logo1">
    <img src={Service} alt="" />
  </div>
    <div className="text-center mt-4 name">
      Add service
    </div>
    <form className="p-3 mt-3">
      <div className="form-field d-flex align-items-center">
        <input type="file" onChange={imageHandler}  />
      </div>
      <div className="form-field d-flex align-items-center">
        <input type="text" name="title" id="ttl" placeholder="title" onChange={titleHandler}  />
      </div>
      <div className="form-field d-flex align-items-center">
        <input type="text" name="description" id="ttl" placeholder="description" onChange={descriptionHandler} />
      </div>
      <button className="btn mt-3" onClick={submitHandler}>{loading ? "loading..." : `Save`}</button>
      <Link to="" >Home</Link>
    </form>

  </div>
  )
}

export default AddService