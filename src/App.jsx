import './App.scss';
import { useState, useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { songsdata } from './audios';
import Player from './player';
import store from './Redux/configureStore';


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

   const onplaying = () => {

    const duration =  audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({...currentSong, "progress": ct/duration * 100, "length": duration})
    
}

    return (
     <Provider store={store}> 
       <div className="App">
        <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onplaying}/>
         <Player songs={songs} setsongs={setSongs} isplaying={isplaying} setIsplaying={setIsplaying} audioElem={audioElem} currentSong={currentSong} />
       </div>
     </Provider>
    )
}

export default App;