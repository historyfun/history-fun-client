import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import saveAs from "file-saver";
import img1 from "../../assests/dor1.png"
import img4 from "../../assests/dor4.png"
import img2 from "../../assests/dor2.png"
import img3 from "../../assests/dor3.png"
import prev from "../../assests/prev.png"
import next from "../../assests/next.png"
import { useMyContext } from '../../MyContext';

import "./Period.css"
import choosePeriod from "../../assests/choosePeriod.png"
export default function Period(props: any) {
    ////
 
  const { sharedVariable, updateSharedVariable } = useMyContext();

  const handleChangeSharedVariable = () => {
    // Update the shared variable
    updateSharedVariable('New Value');
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
    const [flag, setFlag] = useState<boolean>(false);

    const chosenPeriod = async (id: any) => {
         setNameofPeriod(id)
         setFlag(true)
console.log(id);

        //  alert(nameofPeriod)

        // navigate("../Subject", { state: { period: id } });
    }
    const nextPage = async () => {
        
        navigate("../Subject", { state: { period: nameofPeriod } });
    }
    const prevPage = async () => {
        navigate(-1);

    }
    // useEffect(() => {
    //     console.log({ nameofPeriod });

    //     }, [nameofPeriod]);
    const handleButtonClick = () => {
        // const downloadUrl = process.env.PUBLIC_URL + "/document.docx";
        // const link = document.createElement("a");
        // link.href = downloadUrl;
        // link.download = "document.docx";
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
        const documentUrl = process.env.PUBLIC_URL + "/document.docx";
        // window.open(documentUrl, "_blank");
        window.location.href = documentUrl;

    };
    return (

        <div className="period" >
{flag &&<><img className="prev" src={prev} onClick={() => prevPage()} />
<img className="next" src={next} onClick={() => nextPage()} /></>}
            <img className="choosePeriod" src={choosePeriod} />

            <div className="btns">
                {btns?.map((btn: any) =>
                    <img className="periodBtn" src={btn.img} onClick={() => chosenPeriod(btn.id)} />
                )}
            </div>
            <div>
      <p>Shared Variable: {sharedVariable}</p>
      <button onClick={handleChangeSharedVariable}>Change Variable</button>
    </div>
        </div>
    )
}








