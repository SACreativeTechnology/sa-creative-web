import React from 'react'
import { Link } from "react-router-dom";

function AboutUsPage() {
  return (
    <>
    {/* Banner Area Start */}
    <div className="page__banner">
      <div className="page__banner-shape">
        <img src="assets/img/shape/page-banner-shape.png" alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="page__banner-content">
              <h2>About Us</h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Contact Us
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="page__banner-img">
              <img src="assets/img/banner/page-banner-img.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner Area End */}
    {/* About Two Area Start */}
  <div className="about__two section-padding">
    <div className="container">
      <div className="row align-items-center gy-4">
      <div className="col-xl-6 col-lg-6">
          <div className="why-choose-us__two-image">
            <div className="why-choose-us__two-image-wrapper">
              <img
                src="assets/img/why-choose-us/why-chose-us-two.png"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="about__two-content">
            <span className="subtitle-one">About us</span>
            <h2>Enabling Success The Education</h2>
            <p>
            At SA Creative Technology, we believe in the power of innovation to shape the future. Our mission is to bridge the gap between visionary ideas and tangible outcomes by offering a comprehensive suite of services. From safeguarding intellectual property to developing advanced prototypes and engineering solutions, we are dedicated to helping businesses and individuals bring their concepts to life.
            </p>
            <p>With a team of skilled professionals, state-of-the-art technology, and a commitment to excellence, we strive to be your trusted partner in every stage of your project. Whether you're an entrepreneur, a startup, or an established organization, we provide the expertise and resources you need to achieve your goals. Together, let's push the boundaries of innovation and create solutions that make a lasting impact.</p>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Two Two Area End */}
    </>
  )
}

export default AboutUsPage