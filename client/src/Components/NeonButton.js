import React from 'react'
import "../Assets/css/NeonButton.css"
import { Link } from "react-router-dom";
import axios from 'axios';
const NeonButton = ({ children, next }) => {
    const login=()=>{
        axios.get("http://localhost:8000/users/login",{
         withCredentials:true
        }).then((res)=>{
         if(res.data){
            window.location.href="/users/home";
         }
         else{
          window.location.href="/users/login"
         }
        })
     }
    return (
        <div className="neonbtns">
            {/* <a className="blue-btn" href="#">Neon Button</a> */}
            <Link onClick={login} className="blue-btn glow">{children}</Link>
        </div>
    )
}

export default NeonButton
