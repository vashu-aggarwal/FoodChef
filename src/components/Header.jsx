import React from 'react';
import { LOGO_URL } from "../Utils/contants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import Usercontext from "../Utils/Usercontext";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnName,setBtnName]=useState("Login")
    const onlineStatus=useOnlineStatus();
    const {logginguser}=useContext(Usercontext)

    const cardItems=useSelector((store)=>store.cart.items);
    return(
        <div className="header">
            <div className="Logo-container">
            <Link className="reset" to="/"><img className="Logo" src={LOGO_URL} /></Link> 
            </div>
            <div className="nav-items">
                <ul>
                <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
                    <li>
                        <Link className="reset" to="/">Home</Link>
                    </li>
                    <li><Link className="reset" to="/about">About</Link></li>
                    <li><Link className="reset" to="/contact">Contact Us</Link></li>
                    <li><Link className="reset" to="/cart"> <FaCartShopping /><span>{cardItems.length}</span></Link> </li>
                    <button className="login"
                     onClick={()=>{
                      btnName==="Login"?setBtnName("Logout") :setBtnName("Login") ;
                    }}>
                    {btnName}
                    </button> 
                    {/* <li>{logginguser}</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;