import { IoPersonAddSharp } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import {Link} from 'react-router-dom'
import './index.css'
const ReferTwo = () =>{
    return(
        <div className="refer-two-bg d-flex flex-column justify-content-evenly">
            <h1 className="mb-3">How do <span>I Refer</span></h1>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-4 mb-3">
                        <div className="refer-item-container d-flex flex-column align-items-center mb-3">
                            <IoPersonAddSharp className="react-icon-refer-two mb-3" />
                            <p className="col-6">Submit referrals easily via our website’s referral section.</p>
                        </div>
                    </div>
                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-4 mb-3">
                        <div className="refer-item-container d-flex flex-column align-items-center mb-3">
                            <MdEditDocument className="react-icon-refer-two mb-3" />
                            <p className="col-6">Earn rewards once your referral joins an Accredian program.</p>
                        </div>
                    </div> 
                    <div className="col-10 offset-1 offset-md-0 col-md-6 col-lg-4 mb-3">
                        <div className="refer-item-container d-flex flex-column align-items-center mb-3">
                            <IoMdWallet className="react-icon-refer-two mb-3" />
                            <p className="col-6">Both parties receive a bonus 30 days after program enrollment.</p>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="text-center">
            <Link to="/referrals/"><button className="btn btn-primary">Refer Now</button></Link>
            </div>
        </div>
    )
}

export default ReferTwo