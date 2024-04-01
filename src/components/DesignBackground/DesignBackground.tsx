import React, { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import saveAs from "file-saver";

import img1 from "../../assests/background1.jpg"
import img2 from "../../assests/background2.png"
import img3 from "../../assests/background3.jpg"
import img4 from "../../assests/background4.jpg"
import choosedesign1 from "../../assests/choosedesign.png"
import prev from "../../assests/prev.png"
import next from "../../assests/next.png"

import './DesignBackground.css'
export default function DesignBackground() {
    const navigate = useNavigate();
    const location = useLocation();
    const { partOfSong } = location.state;

    const [flag, setFlag] = useState<boolean>(true);
    const { nameparam, phonenumberparam } = useParams();

    const [design, setDesign] = useState("");
    const btns: any = [
        { img: img1, id: " רקע_1 -ורוד" },
        { img: img2, id: "רקע_2 - ירוק" },
        { img: img3, id: "רקע_3 - כחול" },
        { img: img4, id: "רקע_4 - סגול" }]

    const nextPage = async () => {

        navigate(`../Product/${nameparam}/${phonenumberparam}/${design}`, { state: { partOfSong: partOfSong } });
    }
    const prevPage = async () => {
        navigate(-1);

    }
    const chosenDesign = async (id: any) => {
        setDesign(id)
        setFlag(false)
    }
    return (<div className="designBackground">

        <img className="choosedesign" src={choosedesign1} />

        <div className="designbtns">
            {btns?.map((btn: any) =>
                <img className="designBtn" src={btn.img} onClick={() => chosenDesign(btn.id)} />
            )}
        </div>
        <div className='btnsArrows'>
            <img className="arrow" src={prev} onClick={() => prevPage()} />
            <img className="arrow" style={{
                cursor: flag ? 'not-allowed' : 'pointer',
                pointerEvents: flag ? 'none' : 'auto',
            }} src={next} onClick={() => nextPage()} />
        </div>
    </div>

    )
}








