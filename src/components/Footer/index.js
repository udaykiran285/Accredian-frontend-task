import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <footer className="footer mt-5 p-4">
      <div className="container">
        <div className="row d-none d-md-flex">
          <div className="col-md-3">
            <h5>Programs</h5>
            <ul className="list-unstyled">
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>Business Analytics</li>
              <li>Digital Transformation</li>
              <li>Business Management</li>
              <li>Project Management</li>
              <li>Strategy & Leadership</li>
              <li>Senior Management</li>
              <li>Fintech</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email us (For Data Science Queries): admissions@accredian.com</li>
              <li>Email us (For Product Management Queries): pm@accredian.com</li>
              <li>Data Science Admission Helpline: +91 9079653929 (9 AM - 7 PM)</li>
              <li>Product Management Admission Helpline: +91 9625811095</li>
              <li>Enrolled Student Helpline: +91 7969232507</li>
              <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Why Accredian</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
              <li>Referral Policy</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Master FAQs</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="d-md-none">
          <div className="accordion" id="accordionFooter">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button ${activeIndex === 0 ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleToggle(0)}
                >
                  Programs
                </button>
              </h2>
              <div id="collapseOne" className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}>
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>Data Science & AI</li>
                    <li>Product Management</li>
                    <li>Business Analytics</li>
                    <li>Digital Transformation</li>
                    <li>Business Management</li>
                    <li>Project Management</li>
                    <li>Strategy & Leadership</li>
                    <li>Senior Management</li>
                    <li>Fintech</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleToggle(1)}
                >
                  Contact Us
                </button>
              </h2>
              <div id="collapseTwo" className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}>
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>Email us (For Data Science Queries): admissions@accredian.com</li>
                    <li>Email us (For Product Management Queries): pm@accredian.com</li>
                    <li>Data Science Admission Helpline: +91 9079653929 (9 AM - 7 PM)</li>
                    <li>Product Management Admission Helpline: +91 9625811095</li>
                    <li>Enrolled Student Helpline: +91 7969232507</li>
                    <li>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className={`accordion-button ${activeIndex === 2 ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleToggle(2)}
                >
                  Why Accredian
                </button>
              </h2>
              <div id="collapseThree" className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`}>
                <div className="accordion-body">
                  <ul className="list-unstyled">
                    <li>About</li>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Admission Policy</li>
                    <li>Referral Policy</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Service</li>
                    <li>Master FAQs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className={`accordion-button ${activeIndex === 3 ? '' : 'collapsed'}`}
                  type="button"
                  onClick={() => handleToggle(3)}
                >
                  Follow Us
                </button>
              </h2>
              <div id="collapseFour" className={`accordion-collapse collapse ${activeIndex === 3 ? 'show' : ''}`}>
                <div className="accordion-body">
                  <div className="social-icons d-flex justify-content-around">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaTwitter />
                    <FaInstagram />
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary">Schedule 1-on-1 Call Now</button>
          <p>Speak with our Learning Advisor</p>
        </div>
        <div className="text-center mt-3">
          <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
