/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import image1 from "../assets/images/image.jpg"
import image2 from "../assets/images/K.Martin.jpg"
import "./Style.css"
const Index = () => {
  return (
    <div className="main">
 <div className="profile-card">
  <div className="img">
    <img src={image2} alt="" />
  </div>
  <div className="caption">
    <h3>K martin</h3>
    <p>CEO</p>
    <div className="social-links">
      <a href="#"><i className="fab fa-facebook" /></a>
      <a href="#"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
    </div>
  </div>
</div>
<div className="profile-card">
  <div className="img">
    <img src={image1} alt="" />
  </div>
  <div className="caption">
    <h3>Fiston Alvin</h3>
    <p>Front End Developer</p>
    <div className="social-links">
      <a href="#"><i className="fab fa-facebook" /></a>
      <a href="#"><i className="fab fa-instagram" /></a>
      <a href="#"><i className="fab fa-twitter" /></a>
    </div>
  </div>
</div>
</div>
  )
}

export default Index