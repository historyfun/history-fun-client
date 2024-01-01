import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import chossepartofsong from "../../assests/chossepartofsong.png"
import songbackground from "../../assests/songBackground.png"
import partOfSongCopied from "../../assests/partOfSongCopied.png"

import { useLocation, useNavigate } from "react-router-dom";
import "./SelectPartOfSong.css"
export default function SelectPartOfSong(props: any) {
    const [partOfSong, setPartOfSong] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    // const songs2: any[] = [];

    const { songs } = location.state;
    const [nameofSong, setNameofSong] = React.useState("");

    
    return (
        <div className="selectPartOfSong">
<textarea className="partOfSongCopied"></textarea>
          <img className="chossepartofsong" src={chossepartofsong} />
          <img className="songbackground" src={songbackground} />
          {/* <img className="partOfSongCopied" src={partOfSongCopied} /> */}

            {/* <textarea
                onChange={(e) => setPartOfSong(e.target.value)
                }
                autoFocus


                id="name"

                placeholder="סמני קטע בן 4-6 שורות שיודפס על המזכרת"

                style={{ width: '100%', height: '20%', backgroundColor: "#F4F0ED", top: "30%", right: "0%" }}
            />     
            
            {partOfSong && <h1>{partOfSong}</h1>}  */}
            
            {songs && <div>
           {songs}
            </div >}
             </div>
    )
}








