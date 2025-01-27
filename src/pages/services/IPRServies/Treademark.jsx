import React from 'react'
import { Link } from "react-router-dom";
import ServicesSideBar from '../../../components/ServicesSideBar';

function Treademark() {
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
              <h2>Trademark  </h2>
              <span>
                <Link to="/">Home</Link>
                <span>|</span>
                Trademark  
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
              <img src="assets/img/service/trademark.png" alt="image" />
            </div>
            <div className="blog__details-content">
              <div className="blog__details-content-top" />
              <h2>Protect Your Brand Identity</h2>
              <p>
              Safeguard your business's reputation and unique identity with our comprehensive trademark services. We help you secure and defend your brand in a competitive marketplace.
              </p>
              
              
              <h2>Our Services</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Trademark Registration:</strong> Guidance through the application and filing process.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Trademark Search:</strong>  Ensuring your trademark is unique and free from conflicts.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Trademark Renewal:</strong> Keeping your trademark active and up-to-date.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Trademark Enforcement:</strong> Support in resolving infringement and disputes.
                  </li>
                </ul>
                
              </div>
              <h2>Why Choose Us?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Expertise in trademark laws and international regulations.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Tailored services for startups, SMEs, and established businesses.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Efficient and reliable trademark solutions to protect your brand.
                  </li>
                </ul>
                
              </div>
              <h2>What Can Be Trademarked?</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    Business names and logos
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Product names and packaging designs
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Slogans and taglines
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    Unique symbols and brand elements
                  </li>
                  
                </ul>
                
              </div>
              <h2>Our Process</h2>
              
              <div className="blog__details-portfolio">
                
                <ul className="blog__details-portfolio-middle">
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Consultation:</strong> Understanding your brand and its unique aspects.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Search:</strong> Conducting thorough checks for trademark availability.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Application:</strong> Preparing and filing the necessary legal documentation.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Protection:</strong> Monitoring and addressing potential infringements.
                  </li>
                  <li>
                    <i className="fas fa-check-circle" />
                    <strong>Renewal:</strong> Ensuring long-term protection for your trademark.
                  </li>
                  
                </ul>
                
              </div>
              <p>
              Establish your brand's identity and ensure its security. Get in touch with us to begin the trademark registration process today.
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

export default Treademark