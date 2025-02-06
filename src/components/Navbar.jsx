import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    
    

    <>
  {/* Preloader Start */}
  {/* <div className="loader">
    <span className="loader-container" />
  </div> */}
  {/* Preloader End */}
  {/* Top Bar Start */}
  {/* <div className="top__bar">
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
  </div> */}
  {/* Top Bar End */}
  {/* Header Area Start */}
  <div className="header__area header__sticky">
    <div className="container">
      <div className="header__area-menubar">
        <div className="header__area-menubar-left">
          <div className="header__area-menubar-left-logo">
            <Link to="/">
              <img className="dark-n" src="assets/img/sa-logo-blue.png" alt="image" />
            </Link>
          </div>
        </div>

        <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        <div className="">
          <div className={`header__area-menubar-center-menu ${menuOpen ? 'menu-open' : ''}`}>
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
                        <Link to="utility-model-design">
                          Utility/Model Design
                        </Link>
                      </li>
                      <li>
                        <Link to="geographical-indecation">
                          Geographical Indecation
                        </Link>
                      </li>
                      <li>
                        <Link to="trade-secretes"> 
                          Trade Secretes
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/product-prototype">
                    Product Prototyping
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
          </div>         
        </div>
      </div>
    </div>
  </div>
  {/* Header Area End */}
</>

  );
};

export default Navbar;
