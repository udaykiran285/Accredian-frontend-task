import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import UserNavbar from '../UserNavbar';
import Cookies from 'js-cookie';
import './index.css';

const apiStatusConstraints = {
    loading : "loading",
    success : "success",
    failure : "failure"
}

const UserAccount = () => {
    const [apiStatus,setApiStatus] = useState(apiStatusConstraints.loading)
    const [userDetails,setUserDetails] = useState({})
    const [failureMessage,setFailureMessage] = useState("Failed To Load Data")
    const navigate = useNavigate()

    const fetchUserDetails = async () => {
        const jwtToken = Cookies.get("jwtToken")
            const apiurl = "https://accredian-backend-task-phq1.onrender.com/user-details"
            const options ={
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    Authorization : `Bearer ${jwtToken}`
                }
            }
            try {
                const response = await fetch(apiurl, options);
                if (!response.ok) {
                    const errorData = await response.json(); // Parse error response JSON
                    setApiStatus(apiStatusConstraints.failure);
                    setFailureMessage(errorData.error); // Set failure message based on response
                    return; // Exit function 
                }
                const jsonData = await response.json();
                setUserDetails(jsonData.userDetails);
                setApiStatus(apiStatusConstraints.success);
              } catch (e) {
                setApiStatus(apiStatusConstraints.failure);
              }
            
    }

    useEffect(() => {
        if (Cookies.get('jwtToken') === undefined) {
            navigate('/'); 
        }
        else{
            fetchUserDetails()
        }
    }, []);


    switch(apiStatus){
        case apiStatusConstraints.loading:
            return(
                <>
                    <UserNavbar />
                    <div className="user-account-container">
                        <h2 className="user-account-heading">User Account</h2>
                        <div className="loader-container d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>

                    </div>
                    <div className='text-center'>
                        <Link to="/referrals"><button className='btn btn-success'>Your Referrals</button></Link>
                    </div>
                </>
            )
        case apiStatusConstraints.success:
            return(
                <>
                <UserNavbar />
                <div className="user-account-container">
                    <h2 className="user-account-heading">User Account</h2>
                    <div className="user-profile">
                    <img
                        src="https://i.pinimg.com/564x/01/b3/33/01b3338ab4920e37ad9f3789a9e3823a.jpg"
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="user-info">
                        <div className="user-info-item">
                        <strong>Username:</strong> <span>{userDetails.username}</span>
                        </div>
                        <div className="user-info-item">
                        <strong>Gmail:</strong> <span>{userDetails.email}</span>
                        </div>
                        <div className="user-info-item">
                        <strong>Your Referral Code:</strong> <span>{userDetails.referral_code}</span>
                        </div>
                        <div className="user-info-item">
                        <strong>Referred By:</strong> <span>{userDetails.referred_by || "-"}</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Link to="/referrals"><button className='btn btn-success'>Your Referrals</button></Link>
                </div>
                </>
            )
        case apiStatusConstraints.failure:
            return(
                <>
                    <UserNavbar />
                    <div className="user-account-container">
                        <h2 className="user-account-heading">User Account</h2>
                        <h2 className="text-danger fw-bold">Error : {failureMessage}</h2>
                        <button className='btn btn-primary' onClick={fetchUserDetails}>Refresh</button>
                    </div>
                    <div className='text-center'>
                        <Link to="/referrals"><button className='btn btn-success'>Your Referrals</button></Link>
                    </div>
                </>
            )
        default :
         return null
    }
};

export default UserAccount;
