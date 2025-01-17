import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../../components/ServicesSideBar';

function GeographicalIndecation() {
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
              <h2>Geographical Indication </h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Geographical Indication 
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
              <img src="assets/img/blog/blog-details.png" alt="image" />
            </div>
            <div className="blog__details-content">
              <div className="blog__details-content-top" />
              <h2>Protect Regional Heritage and Authenticity</h2>
              <p>
              Safeguard the unique identity of your region's products with our Geographical Indication (GI) services. We assist in registering and protecting products that embody the cultural, historical, and geographical uniqueness of their origin.
              </p>
              
              
              <h2>Our Services</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>GI Registration:</strong> Comprehensive assistance in filing GI applications.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation & Advisory:</strong> Guidance on eligibility criteria and documentation.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Infringement Support:</strong> Legal assistance to protect your GI rights.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewals & Maintenance: </strong> Ensuring the continuity of your GI protection.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Extensive expertise in GI laws and international agreements.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Tailored solutions for artisanal, agricultural, and industrial products.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Dedicated support to preserve your region’s legacy and authenticity.
                  </li>
                </ul>
                
              </div>
              <h2>What Can Be Protected?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Agricultural products like teas, wines, and spices.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Handicrafts and traditional artifacts.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Food items with a strong geographical identity.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Industrial goods with regional significance.
                  </li>
                  
                </ul>
                
              </div>
              <h2>Our Process</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation:</strong> Understanding your product’s unique geographical link.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Documentation:</strong> Preparing detailed evidence of origin and quality.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Filing:</strong> Submitting GI applications with precision and accuracy.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Monitoring:</strong> Safeguarding your GI from unauthorized use.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewals:</strong> Managing ongoing protection for your GI.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Celebrate and protect your region's unique legacy with our expert GI services. Contact us today to get started!
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

export default GeographicalIndecation