import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import saveAs from "file-saver";
import img1 from "../../assests/dor1.png"
import img4 from "../../assests/dor4.png"
import img2 from "../../assests/dor2.png"
import img3 from "../../assests/dor3.png"
import prev from "../../assests/prev.png"
import next from "../../assests/next.png"

import "./Period.css"
import choosePeriod from "../../assests/choosePeriod.png"
export default function Period(props: any) {
    ////

    const { nameparam, phonenumberparam } = useParams();
    const handleChangeSharedVariable = () => {
        // Update the shared variable
    };




    ///////
    const navigate = useNavigate();
    const btns: any = [
        { img: img1, id: "firstPeriod" },
        { img: img2, id: "secondPeriod" },
        { img: img3, id: "firstPeriod" },
        { img: img4, id: "secondPeriod" }
    ]
    const [nameofPeriod, setNameofPeriod] = useState<any>();
    const [flag, setFlag] = useState<boolean>(true);

    const chosenPeriod = async (id: any) => {
        setNameofPeriod(id)
        setFlag(false)
        console.log(id);

        //  alert(nameofPeriod)

        // navigate("../Subject", { state: { period: id } });
    }
    const nextPage = async () => {

        navigate(`../Subject/${nameparam}/${phonenumberparam}`, { state: { period: nameofPeriod } });
    }

    const prevPage = async () => {
        navigate(-1);

    }

    return (

        <div className="period" >

            <img className="choosePeriod" src={choosePeriod} />

            <div className="btns">
                {btns?.map((btn: any) =>
                    <img className="periodBtn" src={btn.img} onClick={() => chosenPeriod(btn.id)} />
                )}
            </div>
            <div>

            </div>
            <div className='btnsArrows'>
                <img className="arrow" src={prev} onClick={() => prevPage()} />
                <img className="arrow" style={{
                    cursor: flag ? 'not-allowed' : 'pointer',
                    pointerEvents: flag ? 'none' : 'auto',
                }} src={next} onClick={() => nextPage()} /></div>
        </div>
    )
}








