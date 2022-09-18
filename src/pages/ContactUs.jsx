import React from 'react'
import NavBar from "../NavBar/Index";
import "./Contactus.css";
import ContactForm from "../ContactForm/Index";
import PageIndicator from "../PageIndicator/Index"
import Footer from "../Footer/Index";
const Contactus = () => {
  return (
    <div>
      <NavBar />
      <PageIndicator name="Contact Us"/>
      <ContactForm/>
    <Footer />
  </div>
  )
}

export default Contactus