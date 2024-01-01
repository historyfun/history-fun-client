import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import saveAs from "file-saver";
import next from "../../assests/next.png"
import nameImg from "../../assests/fname.png"
import phone from "../../assests/phone.png"
import namebackground from "../../assests/namebackground.png"
import logo from "../../assests/logo.png"

import './Login.css'
export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const nextPage = async () => {
        
        navigate("../Period");
    }
  
      
    return ( <div className="Login">
              <div className="contactinfo"><img className="name" src={nameImg} />
              <img className="phone" src={phone} /></div>
              <img className="namebackground" src={namebackground} />
<img className="next" src={next} onClick={() => nextPage()} />
       <input onChange={(e)=>setName(e.target.value)} placeholder="name"></input>
       <input onChange={(e)=>setPhonenumber(e.target.value)} placeholder="phone number"></input>
       <img className="logo" src={logo} />
        </div>

    )
}








