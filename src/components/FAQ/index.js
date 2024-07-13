import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const FAQ = () => {
  const [selectedSection, setSelectedSection] = useState('eligibility');

  return (
    <div className="container mt-5">
      <h1 className="faq-heading">Frequently Asked <span>Questions</span></h1>
      <div className="row">
        <div className="col-md-3">
          <div className="list-group">
            <button
              className={`list-group-item ${selectedSection === 'eligibility' ? 'active' : ''}`}
              onClick={() => setSelectedSection('eligibility')}
            >
              Eligibility
            </button>
            <button
              className={`list-group-item ${selectedSection === 'howToUse' ? 'active' : ''}`}
              onClick={() => setSelectedSection('howToUse')}
            >
              How To Use?
            </button>
            <button
              className={`list-group-item ${selectedSection === 'terms' ? 'active' : ''}`}
              onClick={() => setSelectedSection('terms')}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <div className="faq-content">
            {selectedSection === 'eligibility' && (
              <div>
                <h4>Do I need to have prior Product Management and Project Management experience to enroll in the program?</h4>
                <p>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.</p>
              </div>
            )}
            {selectedSection === 'howToUse' && (
              <div>
                <h2>How To Use?</h2>
                <p>Information on how to use the program will go here.</p>
              </div>
            )}
            {selectedSection === 'terms' && (
              <div>
                <h2>Terms & Conditions</h2>
                <p>Terms and conditions information will go here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contact-section text-center mt-5 p-3">
        <h2>Want to delve deeper into the program?</h2>
        <p>Share your details to receive expert insights from our program team!</p>
        <button className="btn btn-info">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;
