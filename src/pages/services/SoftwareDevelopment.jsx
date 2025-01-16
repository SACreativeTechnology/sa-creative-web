import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../components/ServicesSideBar';

function SoftwareDevelopment() {
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
            <h2>SoftwareDevelopment</h2>
            <span>
              <Link to="/">Home</Link>
              <span>|</span>
              SoftwareDevelopment
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
            <h2>Transforming businesses through technology</h2>
            <p>
              IT Technology is a broad category encompassing all aspects of
              information the a technology and the application of technology in
              various industries IT Technology is a broad category encompas
              aspects of information IT Technology is a broad category
              encompassing all aspects
            </p>
            <p>
              IT Technology is a broad category encompassing all aspects of
              information the a technology and the application of technology in
              various industries IT is a broad category{" "}
            </p>
            
            <h2>Showcase your talent with our portfolio</h2>
            <p>
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra Aliquam justo a posuere lobortis,
              viverra laoreet augue mattis fermentum ullamcorper{" "}
            </p>
            <p>
              IT Technology is a broad category encompassing all aspects of
              information the a technology and the application of technology in
              various industries IT Technology is a broad category encompas
              aspects of information IT Technology is a broad category
              encompassing all aspects
            </p>
            <div className="blog__details-portfolio">
              
              <ul className="blog__details-portfolio-middle">
                <li>
                  <i className="fas fa-check-circle" />
                  Data Analytics Consulting
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Mobile App Development Services
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  IT Project Management Services
                </li>
              </ul>
              
            </div>
            <p>
              IT Technology is a broad category encompassing all aspects of
              information the a technology and the application of technology in
              various industries IT Technology is a broad category encompas
              aspects of information IT Technology is a broad category
              encompassing
            </p>
          </div>
          
          
          
        </div>
        <ServicesSideBar />
        
      </div>
    </div>
  </div>
</>

  )
}

export default SoftwareDevelopment