import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../components/ServicesSideBar';

function PrintingDesign() {
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
              <h2>3D Printing & Designing</h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                3D Printing & Designing
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="page__banner-img">
              <img src="../assets/img/banner/page-banner-img.png" alt="image" />
              
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
              <img src="../assets/img/blog/blog-details.png" alt="image" />
            </div>
            <div className="blog__details-content">
              <div className="blog__details-content-top" />
              <h2>Precision in Every Layer</h2>
              <p>
              Discover the power of 3D technology with our comprehensive printing and designing solutions. Whether for prototyping, manufacturing, or creative projects, our services provide unmatched accuracy and efficiency.
              </p>
              
              
              <h2>Our Offerings</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Custom 3D Printing :</strong> High-quality models tailored to your requirements.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Design Optimization :</strong> Advanced CAD tools to enhance and refine your designs.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Rapid Prototyping :</strong> Accelerate development with quick turnarounds.
                  </li>
                </ul>
                
              </div>

              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Cutting-edge technology for precision and durability.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Industry experts committed to bringing your visions to life.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Diverse material options for versatile applications.
                  </li>
                </ul>
                
              </div>

              <h2>Applications</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Product prototyping and testing   
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Architectural models
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Educational and research tools
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Custom artistic creations
                  </li>
                </ul>
                
              </div>
              <p>Contact us to transform your ideas into reality with exceptional 3D printing and designing services.</p>
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

export default PrintingDesign