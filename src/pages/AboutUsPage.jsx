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
                src="assets/img/about/about-us.png"
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

  {/* Our Mssion Start */}
    <div className="why-choose-us__two ">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-xl-6 col-lg-6 col-md-9">
            <div className="why-choose-us__two-content">
              <span className="subtitle-one">Our Mission</span>
              <h2>
              Protecting Ideas, Delivering  {" "}
                <span className="highlighted-two">Excellence</span>
              </h2>
              <p>
              At SACreative Technology, our mission is to empower businesses and innovators by delivering top-notch solutions that transform ideas into impactful products. We strive to provide seamless support across every stage of innovation, from concept development to market realization.
              </p>
              <p><strong>Our Core Objectives:</strong></p>
              <div className="why-choose-us__two-content-service">
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Protect Intellectual Property</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Accelerate Product Development</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Deliver Comprehensive Engineering Solutions</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Client-Centric Approach</span>
                </div>
              </div>
              <Link to="/services" className="btn-one">
                Learn More
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="why-choose-us__two-image">
              <div className="why-choose-us__two-image-wrapper">
                <img
                  src="assets/img/about/mission.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Mission End */}

    {/* Our Vision Start */}
  <div className="about__two section-padding">
    <div className="container">
      <div className="row align-items-center gy-4">
      <div className="col-xl-6 col-lg-6">
          <div className="why-choose-us__two-image">
            <div className="why-choose-us__two-image-wrapper">
              <img
                src="assets/img/about/vision.png"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="about__two-content">
            <span className="subtitle-one">Our Vision</span>
            <h2>Shaping the Future Through Innovation</h2>
            <p>
            At SA Creative Technology, our vision is to be a global leader in driving innovation, empowering businesses, and delivering transformative solutions across diverse industries. We aim to foster creativity, technological advancement, and sustainable growth for a brighter future.
            </p>
            <p><strong>Our Aspirations:</strong></p>
            <div className="why-choose-us__two-content-service">
                
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Empower Businesses Globally</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Adapt to Evolving Market Trends</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Inspire Innovation</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Lead with Excellence  </span>
                </div>
                
              </div>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Our Vision End */}

  {/* Our Values Start */}
  <div className="why-choose-us__two pb-55">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-xl-6 col-lg-6 col-md-9">
            <div className="why-choose-us__two-content">
              <span className="subtitle-one">Our Values</span>
              <h2>
              Driven by Innovation, Integrity, and  {" "}
                <span className="highlighted-two">Trust</span>
              </h2>
              <p>
              At SA Creative Technology, our values define who we are and guide everything we do. They serve as the foundation for our relationships, decisions, and commitment to delivering exceptional solutions.
              </p>
              <p><strong>Our Core Values:</strong></p>
              <div className="why-choose-us__two-content-service">
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Trust as Our Foundation</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Customer-Centric Approach</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Collaboration for Success</span>
                </div>
                <div className="service">
                  <i className="fas fa-check-circle" />
                  <span>Sustainability and Responsibility</span>
                </div>
              </div>
              <Link to="/services" className="btn-one">
                Learn More
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="why-choose-us__two-image">
              <div className="why-choose-us__two-image-wrapper">
                <img
                  src="assets/img/about/core-values.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Values End */}
    </>
  )
}

export default AboutUsPage