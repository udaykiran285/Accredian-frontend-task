import {Routes,HashRouter,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login'
import Signup from "./components/Signup";
import Home from './components/Home'
import ReferralBenefits from "./components/ReferralBenefits";
import WrapNavbars from "./components/WrapNavbars";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import UserAccount from './components/UserAccount'
import Referrals from './components/Referrals'

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/benefits" element={<><WrapNavbars/><ReferralBenefits/></>}/>
          <Route path ="/faqs" element={<><WrapNavbars/><FAQ/></>}/>
          <Route path ="/support" element={<><WrapNavbars/><Footer/></>}/>
          <Route path="/user-account" element={<UserAccount/>}/>
          <Route path="/referrals" element={<Referrals/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
