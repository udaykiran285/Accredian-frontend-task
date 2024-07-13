import {useEffect, useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Cookies from "js-cookie"
import AppNavbar from "../AppNavbar"
import './index.css'

const Login = () =>{
    const naviagte = useNavigate()
    useEffect(()=>{
        const jwtToken = Cookies.get("jwtToken")
        if(jwtToken !== undefined){
            naviagte("/")
        }
    },[naviagte])
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [emailErrMsg, setEmailErrMsg] = useState("")
    const [passwordErrMsg,setPasswordErrMsg] = useState("")
    const [buttonLoading,setButtonLoading] = useState(false)


    const onUserPassword = (e) => {
        setPassword(e.target.value)
    } 

    const onUserEmail = (e) =>{
        setEmail(e.target.value)
    }

    const onLoginUser = (e) => {
        e.preventDefault()
        setButtonLoading(true)
        if(!email.endsWith(".com")){
            setEmailErrMsg("Invalid Email Address")
            setPasswordErrMsg("")
            setButtonLoading(false)
        }
        else if(password.length <= 4){
            setPasswordErrMsg("Invalid Password")
            setEmailErrMsg("")
            setButtonLoading(false)
        }
        else{
            loginUser()
        }
    }

    const loginUser = async () => {
        const apiLogin = "https://accredian-backend-task-phq1.onrender.com/login";
        const userData = {
            email,
            password
        }

        const options = {
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(userData)
        }

        
        const response = await fetch(apiLogin,options)
        const jsonData = await response.json()
        if(jsonData.message){
            setPasswordErrMsg(jsonData.message)
            setButtonLoading(false)
        }
        else{
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
            `   <div className="d-flex flex-row justify-content-center align-items-center signin-container border">
                    <div className="d-flex flex-row">
                        <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/Auth/login.webp"
                        className="login-image d-none d-md-flex" alt="login"/>
                        <form className="d-flex flex-column justify-content-center" onSubmit={onLoginUser}>
                            <h1>LOGIN</h1>
                            <label htmlFor="email-login">EMAIL*</label>
                            <input type="email" id="email-login" value={email} onChange={onUserEmail}/>
                            <p>{emailErrMsg}</p>
                            <label htmlFor="password-login">PASSWORD*</label>
                            <input type="password" id="password-login" value={password} onChange={onUserPassword}/>
                            <p>{passwordErrMsg}</p>
                            {buttonLoading 
                                ? <button class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                <span class="sr-only">Loading...</span>
                              </button>
                                : <button type="submit" className="btn btn-primary">LOGIN</button>}
                            <Link to="/signup"><span>Don't have an account? Signup</span></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    
)}

export default Login