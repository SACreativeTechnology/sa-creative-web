import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../../components/ServicesSideBar';

function DatabaseRights() {
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
              <h2>Database Rights </h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Database Rights 
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
              <h2>Protect Your Data Collections</h2>
              <p>
              Ensure exclusive control over your valuable data collections with our database rights services. We help you secure legal protection for structured databases, safeguarding your investment and intellectual property.
              </p>
              
              
              <h2>Our Services</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Database Rights Registration:</strong> Assistance in securing rights for your data collections.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Infringement Protection:</strong> Legal support to address unauthorized use of your database.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation & Advisory:</strong> Guidance on database rights compliance and utilization.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewals:</strong> Ensuring your database rights remain active and valid.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    In-depth knowledge of database rights laws and regulations.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Solutions tailored for businesses and organizations in various industries.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Reliable support to protect your competitive advantage.
                  </li>
                </ul>
                
              </div>
              <h2>What Can Be Protected?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Structured data collections with significant investment in acquisition and organization.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Databases created for commercial, academic, or industrial purposes.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Electronic and non-electronic data compilations.
                  </li>
                  
                  
                </ul>
                
              </div>
              <h2>Our Process</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation:</strong>  Understanding your database and its value.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Documentation:</strong> Preparing detailed materials for registration.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Filing:</strong> Submitting applications to secure database rights.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Protection:</strong>  Monitoring and addressing potential violations.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewals:</strong> Managing renewals to maintain long-term protection.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Protect the integrity and exclusivity of your data collections. Contact us today to learn more about our database rights services.
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

export default DatabaseRights