import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

import { Link, useLocation, useNavigate } from "react-router-dom";

// import {ShowSongs} from "../components/ShowSongs"
import shabbos from "../../assests/shabbos.png"
import israel from "../../assests/Israel.png"
import riddle from "../../assests/riddle.png"
import world from "../../assests/world.png"
import advice from "../../assests/advice.png"
import devotion from "../../assests/devotion.png"
import { log } from "console";
import chooseSubject from "../../assests/choosesubject.png"
import "./subject.css"
import prev from "../../assests/prev.png"
import next from "../../assests/next.png"
export default function Subject() {

  const [allSongs, setAllSongs] = useState<any>();

  const location = useLocation();
  const navigate = useNavigate();
  const songs: any[] = [];

  const { period } = location.state;
  var allsongs = require('../allsongs.json');

  const btns: any = [
    { img: shabbos, id: "shabbos" },
    { img: israel, id: "israel" },
    { img: riddle, id: "Riddles" },
    { img: world, id: "Wonders_of_Creation" },
    { img: advice, id: "Life_advice" },
    { img: devotion, id: "devotion" }

  ]
  const [flag, setFlag] = useState<boolean>(false);


  useEffect(() => {
    if (allsongs) {

    }

  }, []);


  const chosenSubject = async (id: any) => {
console.log(id);

    var subject = id;

    const arr = allsongs[subject]


    arr.map((element: any) => {
      console.log( element );
if(element['period'] == period)
      songs.push(element)
    })
    console.log({ songs });
    setAllSongs(songs)
setFlag(true)

console.log({period});

    

  }
  const nextPage = async () => {
    if (songs)
    navigate("../../ShowSongs", { state: { songs: allSongs } });
}
const prevPage = async () => {
    navigate(-1);

}
  return (

    <div className="subject" >

      <img className="chooseSubject" src={chooseSubject} />

      <div className="btnsSubject">
        {btns?.map((btn: any) =>
          <img className="subjectBtn" src={btn.img} onClick={() => chosenSubject(btn.id)} />
        )}
      </div>
      {flag &&<><img className="prev" src={prev} onClick={() => prevPage()} />
<img className="next" src={next} onClick={() => nextPage()} /></>}
    </div>


  )
}