import './App.css';
import { songsdata } from './audios';

const App = () => {
   const [songs, setSongs] = useState(songsdata);
   const [isplaying, setIsplaying] = useState(false);
   const [currentSong, setCurrentSong] = useState(songsdata[0]);

    return <div className="App">
        <audio src="https://beardbarnmusicbucket.s3.amazonaws.com/The+Wild+Horse " />
        <Player />
    </div>;
}

export default App;