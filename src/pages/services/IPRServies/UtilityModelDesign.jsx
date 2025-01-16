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
              <h2>Copyright </h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Copyright 
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
              <h2>Protect Your Creative Works</h2>
              <p>
              Ensure the safety and ownership of your creative and intellectual assets with our expert copyright services. We help you secure the rights to your original work and safeguard your ideas from unauthorized use.
              </p>
              
              
              <h2>Our Services</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Copyright Registration:</strong> Assistance with filing and legal documentation.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Advisory Services:</strong> Guidance on copyright laws and rights enforcement.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Copyright Protection:</strong> Strategies to prevent infringement and protect your work.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Litigation Support:</strong> Expert advice and representation in copyright disputes.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    In-depth knowledge of intellectual property laws.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Experienced professionals dedicated to protecting your rights.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Personalized solutions for creators, businesses, and organizations.
                  </li>
                </ul>
                
              </div>
              <h2>What Can Be Copyrighted?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Academic and research materials.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Literary works, including books, articles, and scripts.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Consumer GoodsArtistic creations, such as paintings, photographs, and designs.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    AutomotiveDigital content, including software, music, and videos.
                  </li>
                  
                </ul>
                
              </div>
              <h2>Our Process</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation:</strong>  Understanding your creative work and objectives.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Documentation:</strong> Preparing the necessary materials for registration.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Filing:</strong> Handling the legal processes to secure your copyright.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Protect your intellectual and creative achievements today. Contact us to secure your rights and prevent infringement.
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