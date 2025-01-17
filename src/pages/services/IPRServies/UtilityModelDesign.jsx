import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../../components/ServicesSideBar';

function UtilityModelDesign() {
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
              <h2>Utility Model Design </h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Utility Model Design 
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
              <h2>Simplify Innovation Protection</h2>
              <p>
              Secure exclusive rights for your practical inventions with our utility model design services. We provide a cost-effective and faster way to protect functional innovations that may not meet the strict requirements of patent protection.
              </p>
              
              
              <h2>Our Services</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Utility Model Registration:</strong>  Assistance in preparing and filing applications.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Prior Art Search:</strong>  Ensuring your invention is novel and qualifies for protection.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Amendments & Renewals:</strong> Keeping your utility model rights active and up-to-date.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Infringement Support:</strong> Legal guidance to enforce your rights.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Expertise in utility model laws and regulations.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Faster and economical solutions compared to traditional patents.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Comprehensive support tailored to your specific invention.
                  </li>
                </ul>
                
              </div>
              <h2>What Can Be Protected?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Technical solutions with practical utility.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    New designs or improvements to existing tools, devices, or processes.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Mechanisms and functional features of products.
                  </li>
                  
                </ul>
                
              </div>
              <h2>Our Process</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation:</strong> Understanding your innovation and its commercial value.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Search:</strong> Conducting checks to verify novelty and eligibility.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Filing:</strong> Drafting and submitting a detailed application.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Protection:</strong> Ensuring enforcement and defense of your utility model rights.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewals:</strong> Managing periodic renewals to maintain long-term protection.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Secure the competitive edge for your functional designs and inventions. Contact us today to explore how utility model protection can benefit you.
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

export default UtilityModelDesign