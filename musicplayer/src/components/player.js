import React, { useState, useRef, useEffect } from "react";


function Player({currentSongIndex,nextSongIndex,songs,isPlaying,onTimeUpdate,onLoadedData,seekTime}) {
  const audioElement = useRef(null);

  useEffect(() => {
    if(audioElement.current !==undefined){
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
    }
  });
  useEffect(() => {
    audioElement.current.currentTime = seekTime;
  }, [seekTime]);
  return (
    <>
      {songs.tracks && songs.tracks.length >0  && <><p>        
        {/* <div className="text-anim">
          
        </div> */}

        <div className="nextsong-details">    
        <img
            src={songs.tracks[nextSongIndex].images.coverart}
            alt={songs.tracks[nextSongIndex].title}
            style={{ width: "4em", height: "auto" }}
          />
          <p>
            <b>Upcoming Song:</b>
          </p>
          <br/>
          <p>
            <b>{songs.tracks[nextSongIndex].title} </b>&nbsp; by &nbsp;
            <b>{songs.tracks[nextSongIndex].subtitle}</b>
          </p>
        </div>
      </p>
      <div className="music-player">
        <audio
          src={songs.tracks[currentSongIndex].hub.actions[1].uri} 
          ref={audioElement}
          onTimeUpdate={onTimeUpdate}
          onLoadedData={onLoadedData}
        ></audio>        
      </div>
</>}</>
  );
}
export default Player;