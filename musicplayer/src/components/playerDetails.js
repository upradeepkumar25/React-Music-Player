import React from "react";

const PlayerDetails =({song})=>{
    return (
        <div className="music-player--details">
          <div className="details-img">
            <img
              className="details-img--image"
              src={song.images.background}
              alt={song.title}
            />
          </div>
          <div className="artist-info">
            <h3 className="details-title">{song.title}</h3>
            <h4 className="details-artist">{song.subtitle}</h4>
            <div class="line">
            
            </div> 
          </div>
        </div>
      );
}
export default PlayerDetails;