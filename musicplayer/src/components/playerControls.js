import React from "react";
import { faPlay,faPause,faForward,faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PlayerControls =({isPlaying,setIsPlaying,SkipSong})=>{
    return(
       <div className="music-player--controls">
        <button className="skip-btn" onClick={()=>SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward}/>
        </button>
        <button className="play-btn"  onClick={() => setIsPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause: faPlay}/>  
        </button>
        <button className="skip-btn" onClick={()=>SkipSong()}>
        <FontAwesomeIcon icon={faForward}/> 
        </button>
       </div> 
    )
}
export default PlayerControls;