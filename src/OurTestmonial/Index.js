import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "../assets/images/image.jpg"
import image2 from "../assets/images/image2.jpg"
import image3 from "../assets/images/image3.jpg"

import "./Style.css"

const Index = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={6100}
  >
    <div>
      <img src={image1} alt=""/>
      <div className="myCarousel">
        <h4>Iphone</h4>
        <p>
          It's freeing to be able to catch up on customized news and not be
          distracted by a social media element on the same site
        </p>
      </div>
    </div>

    <div>
      <img src={image2}  alt=""/>
      <div className="myCarousel">
        <h4>Tecno</h4>
        <p>
          The simple and intuitive design makes it easy for me use. I highly
          recommend Fetch to my peers.
        </p>
      </div>
    </div>

    <div>
      <img src={image3} alt=""/>
      <div className="myCarousel">
        <h4>Summsang</h4>
        <p>
          I enjoy catching up with Fetch on my laptop, or on my phone when
          I'm on the go!
        </p>
      </div>
    </div>
  </Carousel>
  )
}

export default Index