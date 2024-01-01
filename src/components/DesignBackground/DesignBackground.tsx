import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import saveAs from "file-saver";
import next from "../../assests/next.png"
import nameImg from "../../assests/fname.png"
import phone from "../../assests/phone.png"
import namebackground from "../../assests/name.png"
import img1 from "../../assests/background1.png"
import img2 from "../../assests/background2.png"
import img3 from "../../assests/background3.png"
import img4 from "../../assests/background4.png"
import choosedesign1 from "../../assests/choosedesign.png"

import './DesignBackground.css'
export default function DesignBackground() {
    const navigate = useNavigate();
    const [design, setDesign] = useState("");
    const btns: any = [
        { img: img1, id: "background1" },
        { img: img2, id: "background2" },
        { img: img3, id: "background3" },
        { img: img4, id: "background4" }]
    const nextPage = async () => {

        navigate("../Period");
    }

    const chosenDesign = async (id: any) => {
        setDesign(id)
        // setFlag(true)
        //  alert(nameofPeriod)

        // navigate("../Subject", { state: { period: id } });
    }
    return (<div className="designBackground">

        <img className="choosedesign" src={choosedesign1} />

        <div className="designbtns">
            {btns?.map((btn: any) =>
                <img className="designBtn" src={btn.img} onClick={() => chosenDesign(btn.id)} />
            )}
        </div>

    </div>

    )
}








