import React from "react";

const Tracks=({songs,searchText,onClickImage})=>{
    const allSongs = searchText !=='' ? songs.tracks.filter(track => track.title.toLowerCase().includes(searchText.toLowerCase())):songs.tracks;
    const onClickImg =(index)=>{
        onClickImage(index);
    }
    return(
    <div style={{paddingRight:'250px',paddingLeft:'250px'}}>
        <ul className="tracks-ul">
            {
                 allSongs && allSongs.map((track,index)=>{
                    return( 
                    <li key={index}>
                        <img src={track.images.background} alt={track.title} className="tracks-img" onClick={()=>onClickImg(track.id)}/>
                        <p>{track.title}</p>
                    </li>
                    )
                })
            }
        </ul>
    </div>
)
}
export default Tracks;