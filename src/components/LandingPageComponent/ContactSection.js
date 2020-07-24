import React from 'react'
import ContactForm from '../../forms/ContactForm'
import Fade from 'react-reveal/Fade'
export default function ContactSection() {
    return (<section id="contact" className="">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
      <div className="row">

          <div className="col-lg-4">
            <Fade left duration={1000}>
            <div className="info h-100 d-flex flex-column justify-content-around">
              <div className="address d-flex  align-items-center">
                <i className="fa fa-map text-success text-bold"></i>
                <div className='ml-3'>
                <h4 className='font-weight-bold'>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div className="email d-flex  align-items-center">
                <i className="fa fa-envelope text-success"></i>
                <div className='ml-3'>
                <h4 className='font-weight-bold'>Email:</h4>
                <p>info@example.com</p>
                </div>
              </div>

              <div className="phone d-flex  align-items-center">
                <i className="fa fa-phone text-success"></i>
                <div className='ml-3'>
                <h4 className='font-weight-bold'>Call:</h4>
                <p>+1 5589 55488 55s</p>
                </div>
              </div>

            </div>
</Fade>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <Fade right duration={1000}>
<ContactForm/>     
</Fade>    
 </div>

        </div>
    </div>
  </section>
  
    )
}
