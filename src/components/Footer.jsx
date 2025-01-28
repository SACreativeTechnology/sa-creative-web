import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
  {/* Footer Two Area Start */}
  <div className="footer__two">
    <img
      className="footer__two-shape"
      src="assets/img/shape/footer-two-bg.png"
      alt="image"
    />
    <div className="container">
      <div className="row gy-4 justify-content-between">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget">
            <div className="footer__two-widget-about">
              <Link to="#">
                <img src="assets/img/sa-logo-white.png" alt="image" />
              </Link>
              <p>SACreative Tech Delivers Expert Solutions To Your Problems With Unmatched Quality And Diverse Expertise</p>
              <div className="footer__two-widget">
            <h4>Follow Us</h4>
            <div className="footer__two-widget-subscribe">
             
              <div className="footer__two-widget-social">
                <ul>
                  <li>
                    <Link to="https://www.facebook.com" target='_blank'>
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/sa_creative_tech/" target='_blank'>
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com" target='_blank'>
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://wa.me/+918275751063?text=Hello" target='_blank'>
                      <i className="fab fa-whatsapp" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
              {/* <div className="footer__two-widget-social">
                <ul>
                <li>
                    <Link to="https://www.linkedin.com" target='_blank'>
                      <i className="fab fa-linkedin" />
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="https://www.instagram.com/sa_creative_tech/" target='_blank'>
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget ml-85">
            <h4>Quick Link</h4>
            <div className="footer__two-widget-solution">
              <ul>
                <li>
                  <Link to="/ipr-services">
                    <i className="far fa-chevron-double-right" /> 
                      IPR Services
                  </Link>
                </li>
                <li>
                  <Link to="/product-prototype">
                    <i className="far fa-chevron-double-right" />
                    Product Prototyping
                  </Link>
                </li>
                <li>
                  <Link to="/3d-printing">
                    <i className="far fa-chevron-double-right" />
                    3D Printing & Designing
                  </Link>
                </li>
                <li>
                  <Link to="/hardware-development">
                    <i className="far fa-chevron-double-right" />
                    Hardware Development
                  </Link>
                </li>
                <li>
                  <Link to="/software-development">
                    <i className="far fa-chevron-double-right" />
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/components-sales">
                    <i className="far fa-chevron-double-right" />
                    Components Sales
                  </Link>
                </li>
                <li>
                  <Link to="/engineering-projects">
                    <i className="far fa-chevron-double-right" />
                    Engineering Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget">
            <h4>Our Services</h4>
            <div className="footer__two-widget-solution">
              <ul>
                <li>
                  <Link to="/software-development">
                    <i className="far fa-chevron-double-right" />
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/components-sales">
                    <i className="far fa-chevron-double-right" />
                    Components Sales
                  </Link>
                </li>
                <li>
                  <Link to="/engineering-projects">
                    <i className="far fa-chevron-double-right" />
                    Engineering Projects
                  </Link>
                </li>
                <li>
                  <Link to="service-details.html">
                    <i className="far fa-chevron-double-right" />
                    Data Recovery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget">
            <h4>Contact Us</h4>
            <div className="footer__two-widget-about-location">
                <div className="footer__two-widget-about-location-item">
                  <div className="footer__two-widget-about-location-item-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="footer__two-widget-about-location-item-info">
                    <span>Email</span>
                    <Link to="mail:info.sacreativetech@gmail.com">Info.SACreativeTech@gmail.com</Link>
                  </div>
                </div>
                <div className="footer__two-widget-about-location-item">
                  <div className="footer__two-widget-about-location-item-icon">
                    <i className="flaticon-telephone-call" />
                  </div>
                  <div className="footer__two-widget-about-location-item-info">
                    <span>Phone Number</span>
                    <Link to="tel:+917558293754">+91 7558293754</Link>
                    <Link to="tel:+918275751063">+91 8275751063</Link>
                  </div>
                </div>
                <div className="footer__two-widget-about-location-item">
                  <div className="footer__two-widget-about-location-item-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="footer__two-widget-about-location-item-info">
                    <span>Office Location</span>
                    <Link to="https://maps.app.goo.gl/JeqXzWwVMqXhD1ov5" target='_blank'>Gheware Landmark, Opp.Jain Mandir, Vakharbhag, Sangli 416 416</Link>
                  </div>
                </div>
              </div>
            
          </div>
        </div>

        {/* <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget">
            <h4>Follow Us</h4>
            <div className="footer__two-widget-subscribe">
              <p>The latest news, articles, sent to your inbox weekly.</p>
              <div className="footer__two-widget-social">
                <ul>
                  <li>
                    <a to="https://www.facebook.com">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a to="https://www.twitter.com">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a to="https://www.linkedin.com">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a to="https://www.pinterest.com">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div className="copyright__one">
      <div className="container">
        <div className="row justify-content-between copyright__one-container-area">
          <div className="col-xl-5 col-lg-6">
            <div className="copyright__one-left">
              <p>© {new Date().getFullYear()} SACreative Technology | All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="copyright__one-right">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms And Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Two Area End */}
  {/* Scroll Btn Start */}
  <div className="scroll-up">
    <svg
      className="scroll-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />{" "}
    </svg>
  </div>
  {/* Scroll Btn End */}
</>

  )
}
