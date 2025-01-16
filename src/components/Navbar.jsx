import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  return (
    // <nav className="navbar">
      
    //   <Link to="/">Home</Link>
    //   <Link to="/about-us">About Us</Link>
    //   <div className="dropdown">
    //     <button className="dropbtn">Services</button>
    //     <div className="dropdown-content">
    //       <Link to="/services/ipr-services">IPR Services</Link>
    //       <Link to="/services/product-prototype">Product Prototype Development</Link>
    //       <Link to="/services/3d-printing">3D Printing & Designing</Link>
    //       <Link to="/services/hardware-development">Hardware Development</Link>
    //       <Link to="/services/software-development">Software Development</Link>
    //       <Link to="/services/components-sales">Components Sales</Link>
    //       <Link to="/services/engineering-projects">Engineering Projects</Link>
    //     </div>
    //   </div>
    //   <Link to="/contact-us">Contact Us</Link>
    // </nav>

    <>
  {/* Preloader Start */}
  {/* <div className="loader">
    <span className="loader-container" />
  </div> */}
  {/* Preloader End */}
  {/* Top Bar Start */}
  <div className="top__bar">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-md-7">
          <div className="top__bar-left">
            <Link to="mailto:info.sacreativetec@gmail.com" target = "_blank">
              <i className="fas fa-envelope" />
              info.sacreativetech@gmail.com
            </Link>
          </div>
        </div>
        <div className="col-xl-5 col-md-5">
          <div className="top__bar-right">
            <Link to="https://maps.app.goo.gl/oGL8KnMjXNvDVxPq8" target = "_blank">
              <i className="fas fa-map-marker-alt" />
              Gheware Landmark, Opp.Jain Mandir, Vakharbhag, Sangli
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Top Bar End */}
  {/* Header Area Start */}
  <div className="header__area header__sticky">
    <div className="container">
      <div className="header__area-menubar">
        <div className="header__area-menubar-left">
          <div className="header__area-menubar-left-logo">
            <a to="index.html">
              <img className="dark-n" src="assets/img/sa-logo-blue.png" alt="image" />
            </a>
          </div>
        </div>
        <div className="header__area-menubar-center">
          <div className="header__area-menubar-center-menu menu-responsive">
            <ul id="mobilemenu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">
                  Services <i className="fas fa-angle-down" />
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <Link to="#">
                      IPR Services
                      <i className="fas fa-angle-right" />
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/patent">Patent</Link>
                      </li>
                      <li>
                        <Link to="/treademark">Treademark</Link>
                      </li>
                      <li>
                        <Link to="/copyright">Copyright</Link>
                      </li>
                      <li>
                        <Link to="/design-rights">Design Rights</Link>
                      </li>
                      <li>
                        <Link to="/database-rights">Database Rights</Link>
                      </li>
                      <li>
                        <Link to="utility-model-design.php">
                          Utility/Model Design
                        </Link>
                      </li>
                      <li>
                        <Link to="geographical-indecation.php">
                          Geographical Indecation
                        </Link>
                      </li>
                      <li>
                        <Link to="trade-secretes.php"> </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/product-prototype">
                      Product Prototype Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/3d-printing">
                      3D Printing &amp; Designing
                    </Link>
                  </li>
                  <li>
                    <Link to="/hardware-development">Hardware Development</Link>
                  </li>
                  <li>
                    <Link to="/software-development">Software Development</Link>
                  </li>
                  <li>
                    <Link to="/components-sales">Components Sales</Link>
                  </li>
                  <li>
                    <Link to="/engineering-projects">Engineering Projects</Link>
                  </li>
                </ul>
              </li>
              {/* <li className="menu-item-has-children">
                <Link to="#">
                  Portfolio <i className="fas fa-angle-down" />
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/portfolio-slider">Slider Style</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-column-two">Column 2</Link>
                  </li>
                  <li>
                    <Link to="/portfolio-column-three">Column 3</Link>
                  </li>
                  <li>
                    <Link to="/project-details">Details</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__area-menubar-right">
          <div className="header__area-menubar-right-box">
            <div className="header__area-menubar-right-box-btn">
              <Link className="btn-one" to="/request-quote">
                Get Quote
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
            {/* sidebar Menu Start */}
            <div className="header__area-menubar-right-sidebar-popup">
              <div className="sidebar-close-btn">
                <i className="fal fa-times" />
              </div>
              <div className="header__area-menubar-right-sidebar-popup-logo">
                <Link to="/">
                  {" "}
                  <img src="assets/img/logo-2.png" alt="image" />{" "}
                </Link>
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
                      <Link to="tel:+125(895)658568">+125 (895) 658 568</Link>
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
                      <Link to="mailto:info.help@gmail.com">
                        info.help@gmail.com
                      </Link>
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
                      <Link to="https://www.google.com/maps">
                        PV3M+X68 Welshpool United Kingdom
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="header__area-menubar-right-sidebar-popup-social">
                <ul>
                  <li>
                    <Link to="https://facebook.com" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://twitter.com" target="_blank">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://behance.net" target="_blank">
                      <i className="fab fa-behance" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://linkedin.com" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </Link>
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

  );
};

export default Navbar;
