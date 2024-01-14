import React, { useEffect, useState } from "react";
import chossepartofsong from "../../assests/chossepartofsong.png"
import songbackground from "../../assests/songBackground.png"
import partOfSongCopied from "../../assests/partOfSongCopied.png"
import prev from "../../assests/prev.png"
import next from "../../assests/next.png"

import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./SelectPartOfSong.css"
export default function SelectPartOfSong(props: any) {
    const { nameparam, phonenumberparam } = useParams();

    const [partOfSong, setPartOfSong] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    // const songs2: any[] = [];
    const [flag, setFlag] = useState<boolean>(true);

    const { songs } = location.state;
    const nextPage = async () => {

        navigate(`../DesignBackground/${nameparam}/${phonenumberparam}`, { state: { partOfSong: partOfSong } });
    }
    const prevPage = async () => {
        navigate(-1);

    }
    useEffect(() => {
        console.log({ partOfSong });

    }, [partOfSong]);
    return (
        <div className="selectPartOfSong">
           
            <textarea className="partOfSongCopied" onChange={(e) => { setPartOfSong(e.target.value); setFlag(false) }}></textarea>
            <img className="chossepartofsong" src={chossepartofsong} />
            <img className="songbackground" src={songbackground} />


            {songs && <div>
                {songs}
            </div >}
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








