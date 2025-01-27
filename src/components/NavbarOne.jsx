import React from 'react'

function NavbarOne() {
  return (
    <>
  {/* Header Area Start */}
  <div className="header__area header__sticky">
    <div className="container">
      <div className="header__area-menubar">
        <div className="header__area-menubar-left">
          <div className="header__area-menubar-left-logo">
            <a href="index.html">
              <img className="dark-n" src="assets/img/logo-1.png" alt="image" />
            </a>
          </div>
        </div>
        <div className="header__area-menubar-center">
          <div className="header__area-menubar-center-menu menu-responsive">
            <ul id="mobilemenu">
              <li className="menu-item-has-children">
                <a href="#">
                  Home
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home 01</a>
                  </li>
                  <li>
                    <a href="index-two.html">Home 02</a>
                  </li>
                  <li>
                    <a href="index-three.html">Home 03</a>
                  </li>
                  <li>
                    <a href="index-four.html">Home 04</a>
                  </li>
                  <li>
                    <a href="index-five.html">Home 05</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">
                  Pages <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="pricing-plan.html">Pricing Plan</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">
                      Team
                      <i className="fas fa-angle-right" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="team-one.html">Team 01</a>
                      </li>
                      <li>
                        <a href="team-two.html">Team 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="request-quote.html">Request Quote</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">
                  Services <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="service.html">Service 01</a>
                  </li>
                  <li>
                    <a href="service-two.html">Service 02</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">
                  Portfolio <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="portfolio-slider.html">Slider Style</a>
                  </li>
                  <li>
                    <a href="portfolio-column-two.html">Column 2</a>
                  </li>
                  <li>
                    <a href="portfolio-column-three.html">Column 3</a>
                  </li>
                  <li>
                    <a href="project-details.html">Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">
                  Blog <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="#">
                      Blog Grid
                      <i className="fas fa-angle-right" />
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-grid-two.html">2 Columns</a>
                      </li>
                      <li>
                        <a href="blog-grid-three.html">3 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog-standard.html">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">
                  Contact
                  <i className="fas fa-angle-down" />
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="contact.html">Contact Style 1</a>
                  </li>
                  <li>
                    <a href="contact-two.html">Contact Style 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__area-menubar-right">
          <div className="header__area-menubar-right-box">
            <div className="header__area-menubar-right-box-search">
              <div className="search">
                <span className="header__area-menubar-right-box-search-icon open">
                  <i className="flaticon-loupe" />
                </span>
              </div>
              <div className="header__area-menubar-right-box-search-box">
                <form>
                  <input type="search" placeholder="Search Here....." />
                  <button type="submit">
                    <i className="flaticon-loupe" />
                  </button>
                </form>{" "}
                <span className="header__area-menubar-right-box-search-box-icon">
                  <i className="fal fa-times" />
                </span>
              </div>
            </div>
            <div className="header__area-menubar-right-box-sidebar">
              <div className="header__area-menubar-right-box-sidebar-popup-icon">
                <span className="bar-1" />
                <span className="bar-2" />
                <span className="bar-3" />
              </div>
            </div>
            <div className="header__area-menubar-right-box-btn">
              <a className="btn-one" href="request-quote.html">
                Get Quote
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            {/* sidebar Menu Start */}
            <div className="header__area-menubar-right-sidebar-popup">
              <div className="sidebar-close-btn">
                <i className="fal fa-times" />
              </div>
              <div className="header__area-menubar-right-sidebar-popup-logo">
                <a href="index.html">
                  {" "}
                  <img src="assets/img/logo-2.png" alt="image" />{" "}
                </a>
              </div>
              <p>
                Morbi et tellus imperdiet, aliquam nulla sed, dapibus erat.
                Aenean dapibus sem non purus venenatis vulputate. Donec accumsan
                eleifend blandit. Nullam auctor ligula
              </p>
              <div className="header__area-menubar-right-sidebar-popup-contact">
                <h4 className="mb-30">Get In Touch</h4>
                <div className="header__area-menubar-right-sidebar-popup-contact-item">
                  <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                    <i className="fal fa-phone-alt icon-animation" />
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                    <span>Call Now</span>
                    <h6>
                      <a href="tel:+125(895)658568">+125 (895) 658 568</a>
                    </h6>
                  </div>
                </div>
                <div className="header__area-menubar-right-sidebar-popup-contact-item">
                  <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                    <span>Quick Email</span>
                    <h6>
                      <a href="mailto:info.help@gmail.com">
                        info.help@gmail.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="header__area-menubar-right-sidebar-popup-contact-item">
                  <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                    <span>Office Address</span>
                    <h6>
                      <a href="https://www.google.com/maps">
                        PV3M+X68 Welshpool United Kingdom
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="header__area-menubar-right-sidebar-popup-social">
                <ul>
                  <li>
                    <a href="https://facebook.com" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://behance.net" target="_blank">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-overlay" />
            {/* sidebar Menu Start */}
          </div>
          <div className="responsive-menu" />
        </div>
      </div>
    </div>
  </div>
  {/* Header Area End */}
</>

  )
}

export default NavbarOne