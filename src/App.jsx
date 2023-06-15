import './App.css';
import { useState, useRef, useEffect } from 'react';
import { songsdata } from './audios';
import Player from './player';

const App = () => {
   const [songs, setSongs] = useState(songsdata);
   const [isplaying, setIsplaying] = useState(false);
   const [currentSong, setCurrentSong] = useState(songsdata[0]);

   const audioElem = useRef();

   useEffect(() => {
         if (isplaying) {
              audioElem.current.play();
         } else {
              audioElem.current.pause();
         }
   }, [isplaying])

    return <div className="App">
        <audio src={currentSong.url} ref={audioElem}/>
        <Player songs={songs} setsongs={setSongs} isplaying={isplaying} setIsplaying={setIsplaying} audioElem={audioElem} currentSong={currentSong} />
       </div>
}

export default App;