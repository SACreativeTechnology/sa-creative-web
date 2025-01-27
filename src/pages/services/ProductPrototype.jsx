import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../components/ServicesSideBar';

function ProductPrototype() {
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
              <h2>Product Prototyping</h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Product Prototyping
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
              <img src="assets/img/service/product-prototype.jpg" alt="image" />
            </div>
            <div className="blog__details-content">
              <div className="blog__details-content-top" />
              <h2>Turning Ideas into Reality</h2>
              <p>
              Bring your concepts to life with our comprehensive product prototyping services. We focus on bridging the gap between design and functionality to deliver practical and innovative solutions.
              </p>
              
              
              <h2>Our Services</h2>
            
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Custom Prototyping:</strong> Tailored to your specific needs, from electronics to mechanical models.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Functional Testing:</strong> Ensure designs meet requirements through rigorous performance checks.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Iterative Refinement:</strong> Continuous improvement based on feedback for optimal results.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
            
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Expertise in both digital and physical prototyping.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    State-of-the-art tools and technology for precision.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Collaborative approach to align with your vision.
                  </li>
                </ul>
                
              </div>
              <h2>Applications</h2>
            
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Consumer Electronics
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Industrial Equipment
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Concept Demonstrations
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Product Testing and Validation
                  </li>
                </ul>
                
              </div>
              <p>
              Partner with us to transform your ideas into prototypes that lead to success.
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

export default ProductPrototype