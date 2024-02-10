import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";


import "./Users.css"
export default function Users(props: any) {
    ////

    // const { nameparam, phonenumberparam } = useParams();
    const handleChangeSharedVariable = () => {
        // Update the shared variable
    };




    ///////
   

    return (

        <div className="Users" >
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
</table>
            
        </div>
    )
}








