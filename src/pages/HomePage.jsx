import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
  {/* Banner Two Area Start */}
  <div className="banner__two">
    <div className="swiper banner__two-slider">
      <div className="swiper-wrapper">
        <div
          className="banner__two-single-slider swiper-slide"
          style={{ backgroundImage: "url(assets/img/banner/hero-banner-01.png)" }}
        >
          <div className="banner-two-shape">
            <div className="banner-two-shape-2 shape">
              <img src="assets/img/shape/banner-two-shape-2.png" alt="image" />
            </div>
            <div className="banner-two-shape-3 shape">
              <img src="assets/img/shape/banner-two-shape-3.png" alt="image" />
            </div>
            <div className="banner-two-shape-4 shape">
              <img src="assets/img/shape/banner-two-shape-4.png" alt="image" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-10 col-md-8">
                <div className="banner__two-content">
                  {/* <h2>Unlocking Your Digital Potential</h2> */}
                  <h2>Innovating Tomorrow, Serving Today</h2>
                  <p>SACreative Tech Delivers Expert IPR, Prototyping, 3D Design, And Tech Solutions With Unmatched Quality And Diverse Expertise</p>
                  {/* <p>
                    Our expert team in unlocking your digital potential,
                    empowering business to thrive in the digital
                  </p> */}
                  <Link to="/contact-us" className="btn-two">
                    Get Started
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner__two-single-slider swiper-slide"
          style={{ backgroundImage: "url(assets/img/banner/banner-two-2.png)" }}
        >
          <div className="banner-two-shape">
            <div className="banner-two-shape-2 shape">
              <img src="assets/img/shape/banner-two-shape-2.png" alt="image" />
            </div>
            <div className="banner-two-shape-3 shape">
              <img src="assets/img/shape/banner-two-shape-3.png" alt="image" />
            </div>
            <div className="banner-two-shape-4 shape">
              <img src="assets/img/shape/banner-two-shape-4.png" alt="image" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-10 col-md-8">
                <div className="banner__two-content">
                  <h2>Transforming businesses through technology</h2>
                  <p>
                    We believe in pushing the boundaries of what's possible. our
                    pioneering spirit drives us to develop algorithms
                  </p>
                  <a to="contact.html" className="btn-two">
                    Get Started
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner__two-single-slider swiper-slide"
          style={{ backgroundImage: "url(assets/img/banner/banner-two-3.png)" }}
        >
          <div className="banner-two-shape">
            <div className="banner-two-shape-2 shape">
              <img src="assets/img/shape/banner-two-shape-2.png" alt="image" />
            </div>
            <div className="banner-two-shape-3 shape">
              <img src="assets/img/shape/banner-two-shape-3.png" alt="image" />
            </div>
            <div className="banner-two-shape-4 shape">
              <img src="assets/img/shape/banner-two-shape-4.png" alt="image" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-10 col-md-12">
                <div className="banner__two-content">
                  <h2>Elevate Your Business with IT Excellence</h2>
                  <p>
                    Our comprehensive suite of services is designed to optimize
                    your IT infrastructure, enhance efficiency
                  </p>
                  <Link  to="contact.html" className="btn-two">
                    Get Started
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Two Area End */}
  {/* Why choose Us Start */}
  <div className="why-choose-us__two section-padding">
    <div className="container">
      <div className="row align-items-center gy-4">
        <div className="col-xl-6 col-lg-6 col-md-9">
          <div className="why-choose-us__two-content">
            <span className="subtitle-one">Why Choose Us?</span>
            <h2>
            Excellence in Every {" "}
              <span className="highlighted-two">Innovation</span>
            </h2>
            <p>
            We deliver reliable, innovative, and customized solutions with a focus on quInnovation: We stay ahead of the curtion. Let us help turn your vision into reality.
            </p>
            <div className="why-choose-us__two-content-service">
              <div className="service">
                <i className="fas fa-check-circle" />
                <span>Expertise</span>
              </div>
              <div className="service">
                <i className="fas fa-check-circle" />
                <span>Innovation</span>
              </div>
              <div className="service">
                <i className="fas fa-check-circle" />
                <span>Customization</span>
              </div>
              <div className="service">
                <i className="fas fa-check-circle" />
                <span>Quality Assurance</span>
              </div>
            </div>
            <Link to="/services" className="btn-one">
              Learn More
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="why-choose-us__two-image">
            <div className="why-choose-us__two-image-wrapper">
              <img
                src="assets/img/about/why-choose-us.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Why choose Us End */}

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
              <Link to="/ipr-services" className="btn-three">
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
              <Link to="/product-prototype" className="btn-three">
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
              <Link to="/3d-printing" className="btn-three">
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
              <Link to="/hardware-development" className="btn-three">
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
              <Link to="/software-development" className="btn-three">
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
              <Link to="/components-sales" className="btn-three">
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
              <Link to="/engineering-projects" className="btn-three">
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

  
  {/* About Two Area Start */}
  <div className="about__two section-padding">
    <div className="container">
      <div className="row align-items-center gy-4">
      <div className="col-xl-6 col-lg-6">
          <div className="why-choose-us__two-image">
            <div className="why-choose-us__two-image-wrapper">
              <img
                src="assets/img/about/who-we-are.png"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="about__two-content">
            <span className="subtitle-one">Who We Are?</span>
            <h3>Turning Ideas into Reality with Innovation and Expertise</h3>
            <p>
            SACreativeTech is a forward-thinking organization dedicated to providing innovative solutions across a wide spectrum of services. Our expertise spans intellectual property rights protection, hardware and software development, product prototyping, and advanced engineering solutions.
            </p>
            <p>We are driven by a passion for innovation and a commitment to delivering value to our clients. Our team consists of industry experts, engineers, and designers who bring creativity and technical excellence to every project. Together, we help businesses protect their ideas, develop groundbreaking products, and stay ahead in an ever-evolving market.</p>
            <p>Let’s build the future together—empowered by innovation and driven by excellence.</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Two Two Area End */}
  
  
 
  
  {/* Testimonial Two Area Start */}
  <div className="testimonial__two section-padding">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-xl-7 col-lg-6 col-md-7">
          <div className="testimonial__two-title">
            <span className="subtitle-one">Praise &amp; Feedback</span>
            <h2>Customer Experiences</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div
            className="testimonial__two-left"
            style={{
              backgroundImage: "url(assets/img/about/testimonial.png)"
            }}
          />
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="testimonial__two-right">
            <div className="swiper testimonial__two-slider-active">
              <div className="swiper-wrapper">
                <div className="single-slider swiper-slide">
                  <div className="single-slider-user">
                    <div className="single-slider-user-name">
                      <h4>Nasir Al Shakib </h4>
                      <span>Content Creator</span>
                    </div>
                  </div>
                  <p>
                    Their product exceeded his my ro expectationsa The the
                    quality and attention to moutstandin an and it has become an
                    essential active
                  </p>
                  <div className="single-slider-user-rating mt-30">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star not-rated" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial__two-right-bottom">
              <div className="slider-arrow">
                <i className="swiper-button-prev fas fa-arrow-left" />
                <i className="swiper-button-next fas fa-arrow-right" />
              </div>
              <div className="slider-quote">
                <img
                  src="assets/img/testimonial/testimonial-quote.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial Two Area End */}
  
  {/* Subscribe Area End */}
  <div className="subscribe__one two ">
    <div className="container">
      <div
        className="row justify-content-center text-center subscribe__one-content"
        style={{
          backgroundImage: "url(assets/img/subscribe/subscribe-two-shape-2.png)"
        }}
      >
        <div className="col-xl-7 col-lg-8">
          <div className="subscribe__one-title">
            <h3>Ready to Bring Your Ideas to Life? Let's Connect!</h3>
            {/* <p className='text-white'>Whether you're protecting your intellectual property, prototyping the next big thing, or developing custom hardware and software solutions — we’re here to help.</p> */}
          </div>
          <div className="subscribe-bottom">
            <Link to="/request-quote" className="btn-two">
              request quote
              <i className="fas fa-arrow-right" />
            </Link>
            <Link to="https://wa.me/+918275751063?text=Hello" className="btn-two" target='_blank'>
              <i className="fab fa-whatsapp fs-3" />
              &nbsp; &nbsp;(+91 ) 8275751063
            </Link>
            {/* <div className="call-box">
              <div className="call-box-item">
                <div className="call-box-item-icon">
                  <i className="fab fa-whatsapp" />
                </div>
                <div className="call-box-item-info">
                  <span>Make a call</span>
                  <Link to="https://wa.me/+918275751063?text=Hello" target='_blank'>8275751063</Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Subscribe Area End */}


</>

  )
}

export default HomePage