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

  const getUsers = () => {
    studentDetailsService.getUsers().then(res => {
      console.log(res.data);
      setUsers(res.data)
    }).catch(err => {
      console.log({ err })
    })
  }
  useEffect(() => {
    getUsers()
  }, [])

  ///////
  const deleteRow = (studentId: string) => {
    studentDetailsService.deleteUser(studentId).then(res => {
      getUsers()

    }).catch(err => {
      console.log({ err })
    });
    getUsers()

  }

  return (

    <div className="Users" >
      <table className="table">
        <thead>
          <tr>

            <th >טלפון</th>
            <th >שם התלמידה</th>
            <th >מוצר להדפסה</th>
            <th >מס' עיצוב</th>
            <th >חלק הפיוט להדפסה</th>
            <th ></th>   </tr>
        </thead>
        <tbody>
          {users && users.map(e => <tr><td>{e.StudentId}</td><td>{e.StudentFirstName}</td><td>{e.ProductToPrintOn}</td><td>{e.DesignId}</td><td>{e.PartOfSongToPrint}</td><td className='td_btn' onClick={() => deleteRow(e.Id)}>מחיקה</td></tr>)}

        </tbody>
      </table>

    </div>
  )
}








