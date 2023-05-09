import { useState,useEffect } from 'react';
import './App.css';
import Player from './components/player';
import Search from './components/searchComponent';
import Tracks from './components/tracks';
import PlayerDetails from "./components/playerDetails";
import PlayerControls from "./components/playerControls";
import Seekbar from './components/seekbar';

function App() {
  const [songs,setSongs] = useState([]);
  const [currentSongIndex,setCurrentSongIndex] = useState(0);
  const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFromPlayer, setIsFromPlayer] = useState(false);
  const [filterText,setFilterText] = useState('');
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);

  const url = 'https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a281c36469msh21a5619e6c19c8bp1b386cjsn371cad1149e4',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  const onClickImage =(index)=>{
    setCurrentSongIndex(parseInt(index));
    setIsFromPlayer(true);
    setIsPlaying(true);
  }
  const OnClickBack = ()=>{
    setIsFromPlayer(false);
    setFilterText('');
  }
  const textChanged =(value)=>{
    setFilterText(value);
  }
  useEffect(()=>{
     fetch('../responses/songsList.json').then(res=>res.json())
     //fetch(url,options).then(res=>res.json())
    .then(data=> {console.log(data); 
      setSongs(data)})
  },[])
  useEffect(()=>{
    setNextSongIndex(()=>{
    if (songs.tracks && currentSongIndex + 1 >songs.tracks.length - 1 ){
      return 0;
    } else{
      return currentSongIndex + 1;
    }
  });
  },[currentSongIndex])

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.tracks.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = songs.tracks.length - 1;
        }

        return temp;
      });
    }
  };
  return (
    <div>
      <div style={{height:40, marginBottom:25,width:'100%'
        }}>
        {isFromPlayer ? <button className="backbtn seek-btn" onClick={OnClickBack}>Back to search</button> 
                  :<div>                    
                        <Search textChanged={textChanged}/>
                   </div>
        }   
      </div>
        
        {isFromPlayer ? (<><Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex}
                      songs={songs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                      onLoadedData={(event) => setDuration(event.target.duration)} seekTime={seekTime}/> 
                      <PlayerDetails song={songs.tracks[currentSongIndex]}/>
                      <Seekbar
                        value={appTime}
                        min="0"
                        max={duration}
                        onInput={(event) =>{console.log(appTime,event.target.value); setSeekTime(event.target.value)}}
                        setSeekTime={setSeekTime}
                        appTime={appTime}
                      />
                      <PlayerControls
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        SkipSong={SkipSong}
                      />

<div class="player__footer">
  <ul class="list list--footer">
    <li>
      <a href="#" class="list__link">
        <i class="fa fa-heart-o"></i>
      </a>
    </li>

    <li>
      <a href="#" class="list__link">
        <i class="fa fa-random"></i>
      </a>
    </li>

    <li>
      <a href="#" class="list__link">
        <i class="fa fa-undo"></i>
      </a>
    </li>

    <li>
      <a href="#" class="list__link">
        <i class="fa fa-ellipsis-h"></i>
      </a>
    </li>
  </ul>
</div>
</>)
  : <Tracks songs={songs} searchText={filterText} onClickImage={onClickImage}></Tracks>}
    </div>
  );
}

export default App;
