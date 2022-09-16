/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import image1 from "../assets/images/image1.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"
import image4 from "../assets/images/image4.jpg"
import "./Style.css"
const Index = () => {
  return (
    <div class="container">
          <h1 style={{fontWeight:"bolder",textAlign:"center",marginTop:"2rem"}}>Our team</h1>
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src={image1} alt=''/>
                    </div>
                    <h3 class="title">Williamson</h3>
                    <span class="post">CEO</span>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
     
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src={image2} alt=''/>
                    </div>
                    <h3 class="title">Kristiana</h3>
                    <span class="post">CEO</span>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
    
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src={image3} alt=''/>
                    </div>
                    <h3 class="title">Kristiana</h3>
                    <span class="post">CEO</span>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fa fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="our-team">
                    <div class="pic">
                        <img src={image4} alt=''/>
                    </div>
                    <h3 class="title">Kristiana</h3>
                    <span class="post">CEO</span>
                    <ul class="social">
                        <li><a href="#" class="fa fa-facebook"></a></li>
                        <li><a href="#" class="fa fa-twitter"></a></li>
                        <li><a href="#" class="fa fa-google-plus"></a></li>
                        <li><a href="#" class="fab fa-linkedin"></a></li>
                    </ul>
                </div>
            </div>
    
        </div>
        </div>
  )
}

export default Index