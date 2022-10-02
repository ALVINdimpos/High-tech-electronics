/* eslint-disable no-unused-vars */
import React from "react"
import Home from "./pages/Home"
import About from "./pages/AboutUs"
import Contact from "./pages/ContactUs"
import Service from "./pages/OurServices"
import Product from "./pages/OurProduct"
import Login from "./Dashboard/Login"
import AddService from "./Dashboard/AddService"
import AddProduct from "./Dashboard/AddProduct"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddService" element={<AddService />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App