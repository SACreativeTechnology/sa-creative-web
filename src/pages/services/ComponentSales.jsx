import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../components/ServicesSideBar';

function ComponentSales() {
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
              <h2>Components Sales</h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Components Sales
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
              <img src="assets/img/service/component.png" alt="image" />
            </div>
            <div className="blog__details-content">
              <div className="blog__details-content-top" />
              <h2>Your Trusted Source for Quality Components</h2>
              <p>
              Find the right components for your projects with our extensive inventory of high-quality electronic and mechanical parts. We ensure reliable products to support your success.
              </p>
              
              
              <h2>Our Offerings</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Electronic Components:</strong> Resistors, capacitors, microcontrollers, sensors, and more.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Mechanical Parts:</strong> Fasteners, gears, motors, and structural elements.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Custom Sourcing:</strong> Assistance in finding specialized components to meet unique needs.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Wide selection of high-quality, industry-standard components.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Competitive pricing with bulk order discounts.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Expert support to guide you in selecting the right parts.
                  </li>
                </ul>
                
              </div>
              <h2>Industries We Serve</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Electronics & Automation
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Consumer Goods
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Automotive
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Robotics & Industrial Design
                  </li>
                </ul>
                
              </div>
              <h2>Our Commitment</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Quality Assurance:</strong> Every component undergoes stringent quality checks.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Timely Delivery:</strong> Fast shipping to keep your projects on track.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Technical Support:</strong> Expert advice and troubleshooting assistance.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Whether you’re building prototypes or scaling production, we’re here to provide the components you need. Contact us today for a quote or to learn more about our inventory.
              </p>
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

export default ComponentSales