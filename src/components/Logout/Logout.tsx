import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

import { Link, useLocation, useNavigate } from "react-router-dom";

// import {ShowSongs} from "../components/ShowSongs"
import get from "../../assests/get.png"
import goodluck from "../../assests/goodluck.png"

import "./Logout.css"

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 10000)
  }, [])


  window.onload = () => {      navigate('/')
};
 
  return (

    <div className="logout" >

      <img className="get" src={get} />
      <img className="goodluck" src={goodluck} />

    
    </div>


  )
}