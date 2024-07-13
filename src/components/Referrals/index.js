import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../UserNavbar';
import Cookies from 'js-cookie';
import './index.css';

const apiStatusConstraints = {
  loading : "loading",
  success :  "success",
  failure : "failure"
}

const Referrals = () => {
  const navigate = useNavigate();
  const [refereeDetails, setRefereeDetails] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });
  const [referralsList,setReferralsList] = useState([])
  const [errorMsg,setErrorMsg] = useState({visible:false,text:""})
  const [apiStatus,setApiStatus] = useState(apiStatusConstraints.failure)

  useEffect(() => {
    if (Cookies.get('jwtToken') === undefined) {
      navigate('/login');
    }
    else{
      fetchReferralsData()
    }
  }, []);

  const fetchReferralsData = async () =>{
    const apiUrl = "https://accredian-backend-task-phq1.onrender.com/referrals-data"
    const options = {
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
        Authorization : `Bearer ${Cookies.get("jwtToken")}`
      }
    }
    try{
      const response = await fetch(apiUrl,options)
      if(response.ok){
        const jsonData = await response.json()
        setReferralsList(jsonData.referrals)
        setApiStatus(apiStatusConstraints.success)
      }
      else{
        setApiStatus(apiStatusConstraints.failure)
      }
    }catch(e){
      setApiStatus(apiStatusConstraints.failure)
    }
    
  }

  const validate = () => {
    let valid = true;
    let errors = {};

    if (refereeDetails.name.length <= 4) {
      errors.name = 'Name must be greater than 4 characters';
      valid = false;
    }

    if (!refereeDetails.email.endsWith('.com')) {
      errors.email = 'Email must end with ".com"';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        addReferre()
      setRefereeDetails({
        name: '',
        email: ''
      });
      setErrors({
        name: '',
        email: ''
      });
    }
  };

  const addReferre = async () => {
    const jwtToken = Cookies.get("jwtToken")
    if(jwtToken === undefined){
      navigate("/")
      alert("Login expired")
    }
    const referreDetails = {...refereeDetails}

    const apiUrl = "https://accredian-backend-task-phq1.onrender.com/add-referre"
    const options = {
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
        Authorization : `Bearer ${jwtToken}`
      },
      body : JSON.stringify(referreDetails)
    }
    try{
      const response = await fetch(apiUrl,options)
      if(response.ok){
        alert("Referee Added Successfully")
        setErrorMsg({visible:false})
        fetchReferralsData()
      }
      else{
        const errorData = await response.json();
        setErrorMsg({visible:true,text:errorData.message})
      }
    }catch(e){
        alert("Referre Not Added")
    }  
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRefereeDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  switch(apiStatus){
    case apiStatusConstraints.loading:
      return (
        <>
          <UserNavbar />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <h2 className="text-center mt-4 mb-4 referral-heading">Referee Details Form</h2>
                <form onSubmit={handleSubmit} className="shadow p-3 mb-5 bg-white rounded">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={refereeDetails.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={refereeDetails.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                  </div>
                </form>
                {errorMsg.visible && <div>
                  <p className='text-danger font-weight-bold'>{errorMsg.text}</p>
                  <button className='btn btn-primary'>Refresh</button></div>}
              </div>
              <div className="col-lg-8 col-md-7 border">
                <div className="container">
                  <h2 className="text-center mt-4 mb-4 referral-heading">Your Referrals</h2>
                  <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="sr-only"></span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    case apiStatusConstraints.success:
      return (
        <>
          <UserNavbar />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <h2 className="text-center mt-4 mb-4 referral-heading">Referee Details Form</h2>
                <form onSubmit={handleSubmit} className="shadow p-3 mb-5 bg-white rounded">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={refereeDetails.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={refereeDetails.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                  </div>
                </form>
                {errorMsg.visible && <div>
                  <p className='text-danger font-weight-bold'>{errorMsg.text}</p></div>}
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="container">
                  <h2 className="text-center mt-4 mb-4 referral-heading">Your Referrals</h2>
                  <div className="table-responsive">
                    {referralsList.length === 0 ? <h1 className='text-danger text-center'>NO REFERRALS</h1>:<table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {referralsList.map(user => (
                          <tr key={user.id}>
                            <td>{user.referee_name}</td>
                            <td>{user.referee_email}</td>
                            <td>{user.referee_status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    case apiStatusConstraints.failure:
      return (
        <>
          <UserNavbar />
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <h2 className="text-center mt-4 mb-4 referral-heading">Referee Details Form</h2>
                <form onSubmit={handleSubmit} className="shadow p-3 mb-5 bg-white rounded">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={refereeDetails.name}
                        onChange={handleChange}
                        required
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={refereeDetails.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                  </div>
                </form>
                {errorMsg.visible && <div>
                  <p className='text-danger font-weight-bold'>{errorMsg.text}</p>
                  <button className='btn btn-primary'>Refresh</button></div>}
              </div>
              <div className="col-lg-8 col-md-7">
              <h2 className="text-center mt-4 mb-4 referral-heading">Your Referrals</h2>
              <div className='d-flex flex-row justify-content-center'>
                <img src="https://assets-v2.lottiefiles.com/a/d6edf2ee-1167-11ee-a47f-d39bfe48c923/ZuNXWQ7vfc.png" className="failure-img" alt="logo"/>
              </div>
              </div>
            </div>
          </div>
        </>
      );
    default: 
      return null

  }
  
};

export default Referrals;
