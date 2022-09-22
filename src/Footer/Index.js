/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Style.css'
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/whiteLogo.svg'
const Index = () => {
  const date= new Date().getFullYear();

  console.log("hhhhhhhh",date)
  return (
    <div>
<footer className="footer-section">
  <div className="container">
    <div className="footer-cta pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt" />
            <div className="cta-text">
              <h4>Find us</h4>
              <span>1010 Avenue, sw 54321, Kigali</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone" />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>+250 780 665 456</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="far fa-envelope-open" />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>hightechelectronics01@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html"><img src={Logo} className="img-fluid" alt="logo" /></a>
            </div>
            <div className="footer-text">
              <p>high tech electronics enterprise
                 provides high quality electronic 
                 products and accessories, where to
                  get your choice.</p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
              <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
              <a href="#"><i className="fab fa-google-plus-g google-bg" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
            <li> 
      <NavLink
            to="/"
            className="active"
          >
            Home
          </NavLink>
        </li>
        <li> 
      <NavLink
            to="/About"
            className="active"
          >
            About
          </NavLink>
        </li>
        <li> 
      <NavLink
            to="/Service"
            className="active"
          >
            Service
          </NavLink>
        </li>
        <li> 
      <NavLink
            to="/Contact"
            className="active"
          >
            Contact us
          </NavLink>
        </li>
             
              <li><a href="#">portfolio</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Expert Team</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>Don’t miss to subscribe to our new product, kindly fill the form below.</p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>Copyright © {date},<a href="https://alvinfiston.me/">Alvin</a>. All rights reserved</p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div className="footer-menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Index