import {Link} from 'react-router-dom'
import './index.css'

const Refer = () => {
    return(
        <div className="container-fluid refer-outer-container">
            <div className="row">
                <div className="refer-bg col-10 offset-1 d-flex flex-row">     
                        <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center p-3">
                            <img className="accredian-logo-refer" src="https://accredian.com/Rcimages/logo.png" alt="logo"/>
                            <h1 className="p-0 ml-0">Let's Learn <br/>& Earn</h1>
                            <h3 className="mb-3">Get a chance to win <br/>up-to <span>Rs. 15,000/-</span></h3>
                            <Link to="/referrals/"><button className="btn btn-primary">Refer Now</button></Link>
                        </div>
                        <img className="col-sm-6  d-none d-md-flex d-lg-none" src="https://res.cloudinary.com/djhzxvu0f/image/upload/v1720820483/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMTlfcGhvdG9fb2ZfdGVlbl9naXJsX3NtaWxpbmdfc2hvd2luZ19iaWNlcHNfd2hpbF80ZmFlOWVhOS1lN2NiLTQ5YjctYjRiNC1hOGZmOTYzNTFlZmYucG5n-removebg-previe_bojcqo.png"/>
                        <img  className="col-lg-7 refer-image d-none d-lg-flex offset-1" src="https://res.cloudinary.com/djhzxvu0f/image/upload/v1720818921/group-students-with-books-school-bags_380164-235052-removebg-preview_p6gmwf.png" alt="logo"/>
                </div>
            </div>
        </div>
    )
    
}

export default Refer