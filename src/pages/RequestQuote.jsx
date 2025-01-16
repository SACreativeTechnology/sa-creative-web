import React from 'react'

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
              <a href="index.html">Home</a>
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
      <form action="#">
        <div className="request-quote__area-inputs">
          <div className="request-quote__area-input-field">
            <label htmlFor="first-name">First Name *</label>
            <input type="text" id="first-name" placeholder="First" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="last-name">Last Name *</label>
            <input type="text" id="last-name" placeholder="Last" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="number">Number *</label>
            <input type="text" id="number" placeholder="+ 00 123 4567" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="company">Company/Organization *</label>
            <input type="text" id="company" placeholder="Envato" />
          </div>
          <div className="request-quote__area-input-field">
            <label htmlFor="website">Website *</label>
            <input type="text" id="website" placeholder="http://envato.com" />
          </div>
        </div>
        <div className="request-quote__area-service-input">
          <span>What services can we provide you? *</span>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" id="seo" />
            <label htmlFor="seo">Optimization (SEO)</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" id="web-design" />
            <label htmlFor="web-design">Web Design</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" id="web-hosting" />
            <label htmlFor="web-hosting">Web Hosting</label>
          </div>
          <div className="request-quote__area-service-input-single">
            <input type="checkbox" id="maintenance" />
            <label htmlFor="maintenance">Maintenance</label>
          </div>
        </div>
        <label htmlFor="message" className="mb-2">
          Message *
        </label>
        <textarea id="message" placeholder="Type Here" defaultValue={""} />
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