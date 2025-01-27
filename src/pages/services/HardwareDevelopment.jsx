import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../components/ServicesSideBar';

function HardwareDevelopment() {
  return (
    <>
    {/* Banner Area Start */}
    <div className="page__banner">
      <div className="page__banner-shape">
        <img src="../assets/img/shape/page-banner-shape.png" alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="page__banner-content">
              <h2>Hardware Development</h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Hardware Development
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
    {/* Blog Details Area Start */}
    <div className="blog__details section-padding">
      <div className="container">
        <div className="row gy-4 flex-wrap">
          <div className="col-xl-8">
            <div className="blog__details-thumb">
              <img src="assets/img/service/hardware-dev.png" alt="image" />
            </div>
            <div className="blog__details-content">
              <div className="blog__details-content-top" />
              <h2>Building Robust Solutions</h2>
              <p>
              From concept to creation, our hardware development services are designed to meet the most demanding technical challenges. We deliver high-quality, reliable, and innovative hardware tailored to your needs.
              </p>
              
              <h2>Our Expertise</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Circuit Design:</strong> High-performance PCB layouts and designs for various applications.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Component Integration:</strong> Seamlessly integrating hardware components for optimal functionality.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Testing & Debugging:</strong> Rigorous quality checks to ensure performance and reliability.
                  </li>
                </ul>
                
              </div>
              <h2>Why Partner with Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Industry-leading tools and technologies.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Expertise in creating durable, efficient hardware solutions.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Collaborative approach to meet your project goals.
                  </li>
                </ul>
                
              </div>
              <h2>Applications</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    IoT Devices and Smart Systems
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Consumer Electronics
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Industrial Automation Solutions
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Custom Hardware Projects
                  </li>
                </ul>
                
                
              </div>
              <p>Get in touch to turn your hardware ideas into functional realities.</p>
                <Link to="/contact-us" className="btn-two">
                    Contact Us
                    <i className="fas fa-arrow-right" />
                  </Link>
            </div>
            
            
            
          </div>
          <ServicesSideBar />
          
        </div>
      </div>
    </div>
  </>
  
  )
}

export default HardwareDevelopment