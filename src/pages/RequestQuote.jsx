import React from 'react'
import { Link } from 'react-router-dom'

function RequestQuote() {
  return (
    <>
  {/* Banner Area Start */}
  <div className="page__banner">
    <div className="page__banner-shape">
      <img src="assets/img/shape/page-banner-shape.png" alt="image" />
    </div>
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-xl-6 col-lg-7">
          <div className="page__banner-content">
            <h2>Request Quote</h2>
            <span>
              <Link to="/">Home</Link>
              <span>|</span>
              Request Quote
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
  {/* Request Quote Start */}
  <div className="request-quote__area section-padding">
    <div className="container">
      <form action="https://formspree.io/f/xqaaovlr" method="POST">
        <div className="request-quote__area-inputs">
          <div className="request-quote__area-input-field">
            <label htmlFor="first-name">First Name *</label>
            <input type="text" name='first-name' id="first-name" placeholder="First" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="last-name">Last Name *</label>
            <input type="text" name='last-name' id="last-name" placeholder="Last" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="email">Email Address *</label>
            <input type="email" name='email' id="email" placeholder="Email" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="number">Number *</label>
            <input type="text" name='phonenumber' id="number" placeholder="+ 00 123 4567" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="company">Company/Organization </label>
            <input type="text" name='company' id="company" placeholder="xyz" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="website">Website </label>
            <input type="text" name='website' id="website" placeholder="http://xyz.com" />
          </div>
        </div>
        <div className="request-quote__area-service-input">
          <span>What services can we provide you? *</span>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="IPR Services" id="ipr-services" />
            <label htmlFor="ipr-services">IPR Services</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="Product Prototyping" id="product-prototyping" />
            <label htmlFor="product-prototyping">Product Prototyping</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="3D Printing & Designing" id="three-d-Printing" />
            <label htmlFor="three-d-Printing">3D Printing & Designing</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="Hardware Development" id="hardware-development" />
            <label htmlFor="hardware-development">Hardware Development</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="SoftwareDevelopment" id="software-development" />
            <label htmlFor="software-development">SoftwareDevelopment</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="Components Sales" id="components-sales" />
            <label htmlFor="components-sales">Components Sales</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="Engineering Projects" id="engineering-projects" />
            <label htmlFor="engineering-projects">Engineering Projects</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" name='service' value="Other" id="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <label htmlFor="message" className="mb-2">
          Message *
        </label>
        <textarea name='message' id="message" placeholder="Type Here" defaultValue={""} />
        <input
          type="submit"
          defaultValue="Submit Now"
          className="btn-two mt-4"
        />
      </form>
    </div>
  </div>
  {/* Request Quote End */}
</>

  )
}

export default RequestQuote