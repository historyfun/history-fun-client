import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import studentDetailsService, { IStudentDetails } from "../../service/StudentDetailsService";


import "./Users.css"
export default function Users(props: any) {
  const [users, setUsers] = useState<IStudentDetails[]>([]);


    // const { nameparam, phonenumberparam } = useParams();
    const handleChangeSharedVariable = () => {
        // Update the shared variable
    };


useEffect(()=>{
   studentDetailsService.getUsers().then(res => {
    console.log(res.data);
    setUsers(res.data)
}).catch(err =>
    {console.log({err})
    })
},[])

    ///////
   const deleteRow =(studentId:string)=>{
    studentDetailsService.deleteUser(studentId);

   }

    return (

        <div className="Users" >
<table className="table">
  <thead>
    <tr>
      
      <th >StudentId</th>
      <th >StudentFirstName</th>
      <th >ProductToPrintOn</th>
      <th >DesignId</th>
      <th >PartOfSongToPrint</th>
      <th ></th>    </tr>
  </thead>
  <tbody>
   { users && users.map(e=><tr><td>{e.StudentId}</td><td>{e.StudentFirstName}</td><td>{e.ProductToPrintOn}</td><td>{e.DesignId}</td><td>{e.PartOfSongToPrint}</td><button onClick={()=>deleteRow(e.Id)}>delete</button></tr>)}
    
  </tbody>
</table>
            
        </div>
    )
}








