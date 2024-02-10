import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import saveAs from "file-saver";
import next from "../../assests/next.png"
import nameImg from "../../assests/fname.png"
import phone from "../../assests/phone.png"
import namebackground from "../../assests/namebackground.png"
import logo from "../../assests/logo.png"
import studentDetailsService, { IStudentDetails } from "../../service/StudentDetailsService";


import './Login.css'
export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [users, setUsers] = useState<IStudentDetails[]>([]);

    const nextPage = async () => {
        if (name == 'admin' && phonenumber == '4321') {
            navigate(`../Users/`);

        }
        else {
            navigate(`../Period/${name}/${phonenumber}`);
        }
        await studentDetailsService.getUsers().then(res => {
            console.log(res.data);
        }).catch(err =>
            {console.log({err})
            })

    }


    return (<div className="Login">

        <img className="arrow" src={next} onClick={() => nextPage()} />
        <div className="contactinfo">
            <div className='contactBGImge'>
                <div className='contact'>
                    <img className="textImg" src={nameImg} />
                    <input className='input' onChange={(e) => setName(e.target.value)} ></input>
                </div>
                <div className='contact'>
                    <img className="textImg" src={phone} />
                    <input className='input inputPhone' onChange={(e) => setPhonenumber(e.target.value)} ></input>
                </div>
            </div>
        </div>


        <img className="logo" src={logo} />
    </div>

    )
}


