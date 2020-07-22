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
      <div class="row">

          <div class="col-lg-4">
            <Fade left duration={1000}>
            <div class="info h-100 d-flex flex-column justify-content-around">
              <div class="address d-flex  align-items-center">
                <i class="icofont-google-map"></i>
                <div className='ml-3'>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div class="email d-flex  align-items-center">
                <i class="icofont-envelope"></i>
                <div className='ml-3'>
                <h4>Email:</h4>
                <p>info@example.com</p>
                </div>
              </div>

              <div class="phone d-flex  align-items-center">
                <i class="icofont-phone"></i>
                <div className='ml-3'>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
                </div>
              </div>

            </div>
</Fade>
          </div>

          <div class="col-lg-8 mt-5 mt-lg-0">
            <Fade right duration={1000}>
<ContactForm/>     
</Fade>    
 </div>

        </div>
    </div>
  </section>
  
    )
}
