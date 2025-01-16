import React from 'react'
import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <>
    {/* Services Two Area Start */}
  <div className="services__two section-padding">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-6">
          <div className="services__two-title">
            <span className="subtitle-one">Our Services</span>
            <h3>Comprehensive Solutions for Innovation and Technology</h3>
            {/* <h2>Unleash the power of technology</h2> */}
          </div>
        </div>
      </div>
      <div className="row gy-4 justify-content-center">
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-mobile-phone-1" />
            </div>
            <div className="services__two-single-service-content">
              <h4>IPR Services</h4>
              <Link to="/services/ipr-services" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-phone-call-1" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Product Prototyping</h4>
              <Link to="/services/product-prototype" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-email" />
            </div>
            <div className="services__two-single-service-content">
              <h4>3D Printing & Designing</h4>
              <Link to="/services/3d-printing" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-web-research" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Hardware Development</h4>
              <Link to="/services/hardware-development" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-computer-mouse" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Software Development</h4>
              <Link to="/services/software-development" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-satellite-signal" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Components Sales</h4>
              <Link to="/services/components-sales" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6">
          <div className="services__two-single-service">
            <div className="services__two-single-service-icon">
              <i className="flaticon-satellite-signal" />
            </div>
            <div className="services__two-single-service-content">
              <h4>Engineering Projects</h4>
              <Link to="/services/engineering-projects" className="btn-three">
                read more
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services Two Area End */}
    </>
  )
}

export default ServicesPage