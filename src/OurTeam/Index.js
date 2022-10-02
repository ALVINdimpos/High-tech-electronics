/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import image2 from "../assets/images/martin.jpg"
import Style from "./Style.module.css"
const Index = () => {
  return (
    <div className={Style.main}>
        <div className={Style.profile_card}>
          <div className={Style.img}>
            <img src={image2} alt="" />
          </div>
          <div className={Style.caption}>
            <h3>Kubwimana Martin</h3>
            <p>Owner</p>
            <div className={Style.social_links}>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        
      
      </div>
  )
}

export default Index