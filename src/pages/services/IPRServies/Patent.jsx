import React from 'react'
import { Link } from "react-router-dom";

import IprServicesSidebar from '../../../components/IprServicesSidebar';

function Patent() {
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
              <h2>Patent  </h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Patent  
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
              <img src="assets/img/service/patent.jpg" alt="image" />
            </div>
            <div className="blog__details-content">
              <div className="blog__details-content-top" />
              <h2>Secure Your Innovations</h2>
              <p>
              Protect your inventions and ensure your exclusive rights with our comprehensive patent services. From filing to enforcement, we provide expert support at every step of the patent process.
              </p>
              
              
              <h2>Our Services</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Patent Filing:</strong> Assistance in drafting and filing patent applications.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Patent Search & Analysis: </strong>Identifying existing patents to ensure uniqueness.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Patent Portfolio Management:</strong>  Organizing and managing multiple patents effectively.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Patent Infringement Support:</strong> Legal guidance to defend or enforce your patents.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Expertise in patent laws and regulations.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Skilled professionals experienced in diverse industries.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    End-to-end solutions for individuals and businesses.
                  </li>
                </ul>
                
              </div>
              <h2>Industries We Serve</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Technology & Electronics
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Manufacturing & Engineering
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Pharmaceuticals & Biotech
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Renewable Energy & Sustainability
                  </li>
                  
                </ul>
                
              </div>
              <h2>Our Process</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation:</strong> Understanding your invention and objectives.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Drafting:</strong> Preparing a robust and detailed patent application.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Filing:</strong> Ensuring proper submission and compliance with legal standards.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Prosecution:</strong>  Managing communications with patent offices.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Support:</strong> Ongoing assistance with renewals and infringement issues.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Secure your innovation and gain a competitive edge. Contact us today to explore how we can help protect your groundbreaking ideas.
              </p>
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

export default Patent