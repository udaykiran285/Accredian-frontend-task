import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import './index.css'; 
const programsData = {
  'PRODUCT MANAGEMENT': [
    { program: 'Professional Certificate Program in Product Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { program: 'PG Certificate Program in Strategic Product Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Executive Program in Data Driven Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Advanced Certification in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Executive Program in Product Management and Project Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Diploma in Product Management', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Advanced Program in Product Strategy', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Certificate in Product Lifecycle Management', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { program: 'Masterclass in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Product Management Bootcamp', referrerBonus: '₹ 6,000', refereeBonus: '₹ 8,000' },
  ],
  'STRATEGY & LEADERSHIP': [
    { program: 'Executive Program in Product Management and Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Executive Program in Product Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 10,000' },
    { program: 'Leadership Excellence Program', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
    { program: 'Strategic Leadership Certificate', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Advanced Leadership Course', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Program in Executive Leadership', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Masterclass in Strategic Leadership', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Leadership Skills Bootcamp', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { program: 'Certificate in Leadership Development', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Advanced Program in Strategy and Leadership', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
  ],
  'BUSINESS MANAGEMENT': [
    { program: 'Professional Certificate Program in Business Management', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'PG Certificate Program in Strategic Business Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Advanced Diploma in Business Management', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Executive MBA in Business Management', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
    { program: 'Certificate in Business Strategy', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Masterclass in Business Operations', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Business Management Bootcamp', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { program: 'Professional Program in Business Analytics', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Advanced Course in Business Strategy', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Certificate in Business Leadership', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
  ],
  'FINTECH': [
    { program: 'Executive Program in Fintech', referrerBonus: '₹ 12,000', refereeBonus: '₹ 15,000' },
    { program: 'Advanced Certificate in Fintech Management', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Fintech Strategy and Innovation Program', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Certificate in Fintech Applications', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Masterclass in Fintech and Digital Payments', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Fintech Bootcamp', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Program in Fintech Solutions', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Advanced Program in Fintech Leadership', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Certificate in Fintech Security', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Fintech Innovations Masterclass', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
  ],
  'SENIOR MANAGEMENT': [
    { program: 'Executive Program in Senior Management', referrerBonus: '₹ 15,000', refereeBonus: '₹ 18,000' },
    { program: 'Professional Certificate in Senior Management', referrerBonus: '₹ 13,000', refereeBonus: '₹ 15,000' },
    { program: 'Advanced Leadership Program for Senior Managers', referrerBonus: '₹ 14,000', refereeBonus: '₹ 16,000' },
    { program: 'Senior Management Excellence Course', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
    { program: 'Certificate in Senior Leadership', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Masterclass in Senior Management Strategy', referrerBonus: '₹ 13,000', refereeBonus: '₹ 15,000' },
    { program: 'Senior Management Bootcamp', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Professional Program in Senior Management', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
    { program: 'Advanced Course in Senior Management Leadership', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Certificate in Senior Management Development', referrerBonus: '₹ 13,000', refereeBonus: '₹ 15,000' },
  ],
  'DATA SCIENCE': [
    { program: 'Professional Certificate Program in Data Science', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'PG Certificate Program in Data Science', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Advanced Program in Data Science and AI', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
    { program: 'Executive Program in Data Science', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Data Science Masterclass', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Data Science Bootcamp', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Program in Data Analytics', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Advanced Course in Data Science and Machine Learning', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Certificate in Data Science Applications', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Masterclass in Big Data Analytics', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
  ],
  'DIGITAL TRANSFORMATION': [
    { program: 'Executive Program in Digital Transformation', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Advanced Certificate in Digital Transformation', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Digital Transformation Strategy Program', referrerBonus: '₹ 12,000', refereeBonus: '₹ 14,000' },
    { program: 'Certificate in Digital Innovation', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Masterclass in Digital Leadership', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
    { program: 'Digital Transformation Bootcamp', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Professional Program in Digital Strategy', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Advanced Program in Digital Innovation', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Certificate in Digital Transformation Leadership', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Digital Transformation Masterclass', referrerBonus: '₹ 11,000', refereeBonus: '₹ 13,000' },
  ],
  'BUSINESS ANALYTICS': [
    { program: 'Executive Program in Business Analytics', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Professional Certificate in Business Analytics', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Advanced Program in Business Analytics', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Business Analytics Masterclass', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Certificate in Business Analytics Tools', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Business Analytics Bootcamp', referrerBonus: '₹ 7,000', refereeBonus: '₹ 9,000' },
    { program: 'Professional Program in Advanced Business Analytics', referrerBonus: '₹ 9,000', refereeBonus: '₹ 11,000' },
    { program: 'Advanced Course in Predictive Analytics', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
    { program: 'Certificate in Business Data Analytics', referrerBonus: '₹ 8,000', refereeBonus: '₹ 10,000' },
    { program: 'Masterclass in Business Intelligence', referrerBonus: '₹ 10,000', refereeBonus: '₹ 12,000' },
  ],
};

const ReferralBenefits = () => {
  const [selectedProgram, setSelectedProgram] = useState('PRODUCT MANAGEMENT');
  const [showAll, setShowAll] = useState(false);

  const programsToShow = showAll
    ? programsData[selectedProgram]
    : programsData[selectedProgram].slice(0, 4);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        What Are The <a href="#" className="text-primary">Referral Benefits?</a>
      </h2>
      <div className="row">
        <div className="col-lg-3 mb-4">
          <div className="list-group">
            {Object.keys(programsData).map((programKey) => (
              <button
                key={programKey}
                className={`list-group-item list-group-item-action ${selectedProgram === programKey ? 'active' : ''}`}
                onClick={() => setSelectedProgram(programKey)}
              >
                {programKey}
              </button>
            ))}
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5>Programs</h5>
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="enrolledSwitch">Enrolled</label>
              <input className="form-check-input" type="checkbox" id="enrolledSwitch" />
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Programs</th>
                <th>Referrer Bonus</th>
                <th>Referee Bonus</th>
              </tr>
            </thead>
            <tbody>
              {programsToShow.map((program, index) => (
                <tr key={index}>
                  <td>{program.program}</td>
                  <td>{program.referrerBonus}</td>
                  <td>{program.refereeBonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="icon-row">
            <div className="icon"><i className="fab fa-facebook"></i></div>
            <div className="icon"><i className="fab fa-twitter"></i></div>
            <div className="icon"><i className="fab fa-instagram"></i></div>
          </div>
          <div className="d-flex justify-content-between mt-3">
          <Link to="/referrals/"><button className="btn btn-primary">Refer Now</button></Link>
            <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBenefits;
