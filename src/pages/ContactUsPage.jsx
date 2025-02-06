import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function ContactUsPage() {
  const [formData, setFormData] = useState({
    name : "",
    email : "",
    phone : "",
    subject : "",
    message : "",
  })

  function handleChange(e) {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  }

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
            <h2>Contact Us</h2>
            <span>
              <Link to="/">Home</Link>
              <span>|</span>
              Contact Us
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
  {/* Contact Two Start */}
  <div className="contact__two section-padding">
    <div className="container">
      <div className="row gy-4 align-items-center">
        <div className="col-xl-6">
          <div className="contact__two-content">
            <div className="contact__two-title">
              <span className="subtitle-one">Contact us</span>
              <h2>Do you have any question? </h2>
            </div>
            <div className="contact__two-form">
              <form action="https://formspree.io/f/xqaaovlr" method="POST" >
                <div className="row gy-4 mb-4">
                  <div className="col-xl-6">
                    <input type="text"
                            name = "name"
                           placeholder="Your Name"
                           value={formData.name}
                           onChange={handleChange}
                            />
                  </div>
                  <div className="col-xl-6">
                    <input type="email" 
                            placeholder="Your E-mail"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} />
                  </div>
                  <div className="col-xl-6">
                    <input type="tel" 
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                           />
                  </div>
                  <div className="col-xl-6">
                    <input type="text" 
                            placeholder="Subject"
                            name = "subject"
                            value={formData.subject }
                            onChange={handleChange}/>
                  </div>
                </div>
                <textarea placeholder="Your Message" 
                          name= "message"
                          value={formData.message}
                          onChange={handleChange}
                           />
                <button type="submit" className="btn-two">
                  Submit Now
                  <i className="fas fa-chevron-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="contact__two-contact-info">
            <div className="contact__two-single-info">
              <div className="contact__two-single-info-icon">
                <img src="assets/img/icon//service-1.png" alt="image" />
              </div>
              <div className="contact__two-single-info-content">
                <h4>Email</h4>
                <span>info.sacreativetech@gmail.com</span><br />
                
              </div>
            </div>
            <div className="contact__two-single-info">
              <div className="contact__two-single-info-icon">
                <img src="assets/img/icon//service-2.png" alt="image" />
              </div>
              <div className="contact__two-single-info-content">
                <h4>Contacts</h4>
                <span>(+91 ) 8275751063</span>
                <span>(+91 ) 7558293754</span>
              </div>
            </div>
            <div className="contact__two-single-info">
              <div className="contact__two-single-info-icon">
                <img src="assets/img/icon//service-3.png" alt="image" />
              </div>
              <div className="contact__two-single-info-content">
                <h4>Time</h4>
                <span>Mon - Sat 10.Am To 7.Pm</span>
                <span>Sunday 10.Am To 7.Pm</span><br />
                
              </div>
            </div>
            <div className="contact__two-single-info">
              <div className="contact__two-single-info-icon">
                <img src="assets/img/icon/service-4.png" alt="image" />
              </div>
              <div className="contact__two-single-info-content">
                <h4>Location</h4>
                <span><Link to="https://maps.app.goo.gl/JeqXzWwVMqXhD1ov5" target='_blank'>Gheware Landmark, Opp.Jain Mandir, Vakharbhag, Sangli 416 416</Link></span><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Two End */}
  {/* Contact Location Start */}
  <div className="location-map">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.284759737894!2d74.56865947497289!3d16.861802383938446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc13d749994faa5%3A0xd0db2b0b503cd1ec!2sS%20A%20CREATIVE%20TECHNOLOGY%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1738045393473!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>



  </div>
  {/* Contact Location Start */}
</>

  )
}

export default ContactUsPage