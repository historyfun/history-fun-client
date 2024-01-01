import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import choosesong from "../../assests/choosesong.png"

import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./ShowSongs.css"
import prev from "../../assests/prev.png"
import next from "../../assests/next.png"
export default function ShowSongs(props: any) {
    const { nameparam, phonenumberparam } = useParams();

    const [song, setSong] = useState("");
    const [flag, setFlag] = useState<boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();
    // const songs2: any[] = [];

    const { songs } = location.state;
    const [nameofSong, setNameofSong] = React.useState("");

    const chosenSong = async (e: any) => {
        setNameofSong(e['name'])
        console.log(e['name']);

    }
    const nextPage = async () => {
        
        navigate(`../../../SelectPartOfSong/${nameparam}/${phonenumberparam}`, { state: { songs: song} });
    }
    const prevPage = async () => {
        navigate(-1);

    }
    useEffect(() => {
        // a()
        console.log("songs from here", songs);

    }, []);

    const chosenPeriod = async (e: any) => {
       console.log({e});
       setSong(e)
       setFlag(true)
       
        // navigate("../../../SelectPartOfSong", { state: { songs: e } });

     }
    return (
        <div className="showSongs">
{flag &&<><img className="prev" src={prev} onClick={() => prevPage()} />
<img className="next" src={next} onClick={() => nextPage()} /></>}
                  <img className="choosesong" src={choosesong} />

            {songs && <div>
                {songs.map((e: any) => (
                    <button onClick={() => chosenPeriod(e['song'])} className="showsong">{e['name']}
                        <br></br>  </button>

                )

                )}
            </div >}



            
             </div>
    )
}








