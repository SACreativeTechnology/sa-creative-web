import React from 'react'
import { Link } from "react-router-dom";

import IprServicesSidebar from '../../../components/IprServicesSidebar';

function DesignRights() {
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
              <h2>Design Rights</h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Design Rights
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
              <h2>Protect the Aesthetic of Your Creations</h2>
              <p>
              Ensure the originality and uniqueness of your designs remain protected with our specialized design rights services. We help safeguard the visual aspects of your creations, giving you exclusive rights and a competitive edge.
              </p>
              
              
              <h2>Our Services</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Design Registration:</strong> Assistance in filing and securing design rights.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Design Search:</strong> Ensuring your design is unique and eligible for protection.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Enforcement & Infringement Support:</strong> Legal guidance to protect against unauthorized use.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewals:</strong> Managing the timely renewal of design rights to maintain protection.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Expertise in domestic and international design laws.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Tailored solutions for individual creators and businesses.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Efficient processes to secure your rights quickly and effectively.
                  </li>
                </ul>
                
              </div>
              <h2>What Can Be Protected?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Product shapes and configurations
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Decorative patterns and textures
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Unique appearances and aesthetics
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Industrial and artistic designs
                  </li>
                  
                </ul>
                
              </div>
              <h2>Our Process</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation:</strong>  Understanding your design and its uniqueness.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Search:</strong> Conducting comprehensive checks for prior registrations.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Filing:</strong> Preparing and submitting a detailed design application.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Protection:</strong> Monitoring and defending your rights against infringements.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewals:</strong> Ensuring your design rights remain valid and active.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Secure your creative and industrial designs today. Contact us to learn how we can help you protect the essence of your innovations.   </p>
              <Link to="/contact-us" className="btn-two">
                Contact Us
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
            
            
            
          </div>
          <IprServicesSidebar />
          
        </div>
      </div>
    </div>
  </>
  )
}

export default DesignRights