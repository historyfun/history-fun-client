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
            <div className='BGsong'>
                <div className='right'>
                    <img className="chossepartofsong" src={chossepartofsong} /></div>
                {/* <img className="songbackground" src={songbackground} /> */}
               
                    <div className='left'>
                    {songs && (
    <div className='BGpart'>
      <div className='scrollWrapper'>
        <div className='content'>
          {songs.split('\n').map((line:any, index:any) => (
            <React.Fragment key={index}>
              {line}<br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )}
                            <textarea className="partOfSongCopied" onChange={(e) => { setPartOfSong(e.target.value); setFlag(false) }}></textarea>
                    </div>
            </div >
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








