import {useEffect, useState} from 'react'
import AppNavbar from "../AppNavbar"
import Cookies from "js-cookie"
import UserNavbar from '../UserNavbar'
import AppInnerNavbar from '../AppInnerNavbar'

const WrapNavbars = () => {
    const [user,setUser] = useState(false)

    useEffect(() => {
        const jwtToken = Cookies.get("jwtToken")
        if(jwtToken !== undefined){
            setUser(true)
        }
    },[])
    
    return(
        <>
            {user ? <UserNavbar/>: <AppNavbar/>}
            <AppInnerNavbar />
        </>
    )
}
export default WrapNavbars
