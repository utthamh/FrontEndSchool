import React from 'react'
import trainer1 from '../../images/trainer-1.jpg'
import trainer2 from '../../images/trainer-2.jpg'
import trainer3 from '../../images/trainer-3.jpg'
import Zoom from 'react-reveal/Zoom'
export default function TeachersSection() {
    return (
        <section id="teacher" className="bg-white">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="section-title">
      <h2>Teacher</h2>
      <p>Our Profesional Teachers</p>
    </div>
<div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay={100}>
  
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
  <Zoom duration={1000}>
    <div className="member">
      <img src={trainer1} className="img-fluid" alt='' />
      <div className="member-content">
        <h4>Walter White</h4>
        <span>Web Development</span>
        <p>
         Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
        </p>
        <div className="social">
          <a href=''><i className="fa fa-twitter" /></a>
          <a href=''><i className="fa fa-facebook" /></a>
          <a href=''><i className="fa fa-instagram" /></a>
          <a href=''><i className="fa fa-linkedin" /></a>
        </div>
      </div>
    </div>
    </Zoom>
  </div>
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
  <Zoom duration={1000}>
    <div className="member">
      <img src={trainer2} className="img-fluid" alt />
      <div className="member-content">
        <h4>Sarah Jhinson</h4>
        <span>Marketing</span>
        <p>
          Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
        </p>
        <div className="social">
          <a href><i className="fa fa-twitter" /></a>
          <a href><i className="fa fa-facebook" /></a>
          <a href><i className="fa fa-instagram" /></a>
          <a href><i className="fa fa-linkedin" /></a>
        </div>
      </div>
    </div>
    </Zoom>
  </div>
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
  <Zoom duration={1000}>
    <div className="member">
      <img src={trainer3} className="img-fluid" alt />
      <div className="member-content">
        <h4>William Anderson</h4>
        <span>Content</span>
        <p>
          Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
        </p>
        <div className="social">
          <a href><i className="fa fa-twitter" /></a>
          <a href><i className="fa fa-facebook" /></a>
          <a href><i className="fa fa-instagram" /></a>
          <a href><i className="fa fa-linkedin" /></a>
        </div>
      </div>
    </div>
    </Zoom>
  </div>
</div>

    </div>
    </section>
    )
}
