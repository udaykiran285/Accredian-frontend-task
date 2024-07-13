import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const AppInnerNavbar = () => {
  const [activeTab, setActiveTab] = useState('Refer');

  return (
    <nav className="nav nav-pills nav-fill custom-nav">
      <Link
        to="/"
        className={`nav-link ${activeTab === 'Refer' ? 'active' : ''}`}
        onClick={() => setActiveTab('Refer')}
      >
        Refer
      </Link>
      <Link
        to="/benefits"
        className={`nav-link ${activeTab === 'Benefits' ? 'active' : ''}`}
        onClick={() => setActiveTab('Benefits')}
      >
        Benefits
      </Link>
      <Link
        to="/faqs"
        className={`nav-link ${activeTab === 'FAQs' ? 'active' : ''}`}
        onClick={() => setActiveTab('FAQs')}
      >
        FAQs
      </Link>
      <Link
        to="/support"
        className={`nav-link ${activeTab === 'Support' ? 'active' : ''}`}
        onClick={() => setActiveTab('Support')}
      >
        Support
      </Link>
    </nav>
  );
};

export default AppInnerNavbar;
