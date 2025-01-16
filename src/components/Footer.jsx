import React from 'react'

export default function Footer() {
  return (
    // <div>
    //   <p>© {new Date().getFullYear()} SACreative Technology. All Rights Reserved.</p>
    // </div>

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
              <a href="#">
                <img src="assets/img/sa-logo-white.png" alt="image" />
              </a>
              <p>Financial planners help people to gain knowledge aboutw</p>
              <div className="footer__two-widget-about-location">
                <div className="footer__two-widget-about-location-item">
                  <div className="footer__two-widget-about-location-item-icon">
                    <i className="flaticon-telephone-call" />
                  </div>
                  <div className="footer__two-widget-about-location-item-info">
                    <span>Phone Number</span>
                    <a href="tel:(307)555-0133">(307) 555-0133</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget ml-85">
            <h4>Quick Link</h4>
            <div className="footer__two-widget-solution">
              <ul>
                <li>
                  <a href="service.html">
                    <i className="far fa-chevron-double-right" />
                    Service
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <i className="far fa-chevron-double-right" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="testimonial.html">
                    <i className="far fa-chevron-double-right" />
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="about.html">
                    <i className="far fa-chevron-double-right" />
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget">
            <h4>Our Services</h4>
            <div className="footer__two-widget-solution">
              <ul>
                <li>
                  <a href="service-details.html">
                    <i className="far fa-chevron-double-right" />
                    Hosting Solution
                  </a>
                </li>
                <li>
                  <a href="service-details.html">
                    <i className="far fa-chevron-double-right" />
                    Cyber Security
                  </a>
                </li>
                <li>
                  <a href="service-details.html">
                    <i className="far fa-chevron-double-right" />
                    Network Analysis
                  </a>
                </li>
                <li>
                  <a href="service-details.html">
                    <i className="far fa-chevron-double-right" />
                    Data Recovery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div className="footer__two-widget">
            <h4>Follow Us</h4>
            <div className="footer__two-widget-subscribe">
              <p>The latest news, articles, sent to your inbox weekly.</p>
              <div className="footer__two-widget-social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
              <a href="about.html">Privacy Policy</a>
              <a href="contact.html">Contact Us</a>
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
