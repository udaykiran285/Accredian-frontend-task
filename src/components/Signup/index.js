import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import AppNavbar from "../AppNavbar"
import './index.css'
import Cookies from 'js-cookie'

const Signup = () =>{
    const naviagte = useNavigate()
    useEffect(()=>{
        const jwtToken = Cookies.get("jwtToken")
        if(jwtToken !== undefined){
            naviagte("/")
        }
    },[naviagte])

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [referralCode,setReferralCode] = useState("")
    const [buttonLoading,setButtonLoading] = useState(false)

    const [emailErrMsg, setEmailErrMsg] = useState("")
    const [passwordErrMsg,setPasswordErrMsg] = useState("")
    const [usernameErrMsg,setUsernameErrMsg] = useState("")
    const [confirmPassErrMsg,setConfirmErrMsg] = useState("")
    const [referralCodeErrMsg,setReferralCodeErrMsg] = useState("")

    const onUserPassword = (e) => {
        setPassword(e.target.value)
        
    } 

    const onUserEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onUserName = (e) =>{
        setUsername(e.target.value)
    }

    const onUserConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onUserReferralCode = (e) => {
        setReferralCode(e.target.value)
    }

    const onUserSignup = (e) => {
        e.preventDefault()
        setButtonLoading(true)
        if(username.length <= 4){
            setUsernameErrMsg("*Username length should be greater than 5")
            setEmailErrMsg("")
            setPasswordErrMsg("")
            setConfirmErrMsg("")
            setButtonLoading(false)
        }
        else if(!email.endsWith(".com")){
            setEmailErrMsg("*Enter a valid gmail address")
            setUsernameErrMsg("")
            setPasswordErrMsg("")
            setConfirmErrMsg("")
            setButtonLoading(false)
        }
        else if(password.length <= 4){
            setPasswordErrMsg("*Password length should be greater than 5")
            setUsernameErrMsg("")
            setEmailErrMsg("")
            setConfirmErrMsg("")
            setButtonLoading(false)
        }
        else if(confirmPassword !== password){
            setConfirmErrMsg("*Password didn't matched")
            setUsernameErrMsg("")
            setEmailErrMsg("")
            setPasswordErrMsg("")
            setButtonLoading(false)
        }
        else{
            setUsernameErrMsg("")
            setEmailErrMsg("")
            setPasswordErrMsg("")
            setConfirmErrMsg("")
            addUserInDb()
        }
    }

    const addUserInDb = async () => {
        const apiSignup = "https://accredian-backend-task-phq1.onrender.com/signup";
        const userData = {
            username,
            email,
            password,
            referralCode
        }

        const options = {
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(userData)
        }

        
        const response = await fetch(apiSignup,options)
        const jsonData = await response.json()
        if(jsonData.message === "Username already exists"){
            setUsernameErrMsg("Username Alreday Exists")
            setEmailErrMsg("")
            setPasswordErrMsg("")
            setConfirmErrMsg("")
            setButtonLoading(false)
        }
        else if(jsonData.message === "Email already exists"){
            setEmailErrMsg("Email already exists")
            setUsernameErrMsg("")
            setPasswordErrMsg("")
            setConfirmErrMsg("")
            setButtonLoading(false)
        }
        else if(jsonData.message === "Invalid referral code"){
            setReferralCodeErrMsg("Invalid referral code")
            setReferralCode("")
            setUsernameErrMsg("")
            setEmailErrMsg("")
            setPasswordErrMsg("")
            setButtonLoading(false)
        }
        else if(jsonData.jwtToken){
            setButtonLoading(false)
            Cookies.set("jwtToken",jsonData.jwtToken,{expires:30})
            naviagte("/")
        }
    }

 return (
    <>
    <AppNavbar/>
    
        <div className="container">
            <div className="row">
            `   <div className="d-flex flex-column justify-content-center align-items-center signup-container">
                    <div className="d-flex flex-row">
                        <form className="d-flex flex-column justify-content-center" onSubmit={onUserSignup}>
                            <h1>SIGNIN</h1>
                            <label htmlFor="usernam-signup">USERNAME*</label>
                            <input type="text" id="usernam-signup" value={username} onChange={onUserName}/>
                            <p>{usernameErrMsg}</p>
                            <label htmlFor="email-signup">EMAIL*</label>
                            <input type="email" id="email-signup" value={email} onChange={onUserEmail}/>
                            <p>{emailErrMsg}</p>
                            <label htmlFor="password-signup">PASSWORD*</label>
                            <input type="password" id="password-signup" value={password} onChange={onUserPassword}/>
                            <p>{passwordErrMsg}</p>
                            <label htmlFor="password-login">CONFIRM PASSWORD*</label>
                            <input type="password" id="password-login" value={confirmPassword} onChange={onUserConfirmPassword}/>
                            <p>{confirmPassErrMsg}</p>
                            <div className='referral-container d-flex justify-content-evenly'>
                                <label htmlFor='refer'>Referral Code<span>(Optional)</span></label>
                                <input type="text" value={referralCode} onChange={onUserReferralCode} id="refer"/>
                            </div>
                            <p>{referralCodeErrMsg}</p>
                            {buttonLoading 
                                ? <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="sr-only">Loading...</span>
                              </button>
                                : <button type="submit" className="btn btn-primary">SIGNUP</button>}
                            <Link to="/login"><span>Alreday have an account? Login</span></Link>
                        </form>
                        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/Auth/signup.webp"
                        className="login-image d-none d-md-flex" alt="signup"/>
                    </div>
                </div>
            </div>
        </div>
    </>
    
)}

export default Signup