import './App.scss';
import { useState, useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { songsdata } from './audios';
import Player from './player';
import store from './Redux/configureStore';
import Dropdown from './dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'

const App = () => {
   
   const [searchInput, setSearchInput] = useState("");
//    const [currentSong, setCurrentSong] = useState(songsdata[0]);
//    const audioElem = useRef();

   const data = [
     {value: 1, name: 'A'},
     {value: 2, name: 'B'},
     {value: 3, name: 'C'}
 ]

//    useEffect(() => {
//          if (isplaying) {
//               audioElem.current.play();
//          } else {
//               audioElem.current.pause();
//          }
//    }, [isplaying])
   


    return (
       <div className="App">
       
        <Container>
           <InputGroup>
             <FormControl 
                placeholder= "Search for artist"
                type = "input"
                onKeyPress={event => {
                    if(event.key == "Enter"){
                         console.log("pressed enter");
                    }
                }}
                onChange = {event => setSearchInput(event.target.value)}
             />
               <Button onClick={() => console.log("clicked button")}>
                    Search
               </Button>
           </InputGroup>
           
           </Container>
           <Container>
               <Card>
                    <Card.Img src="#" />
                    <Card.Body>
                         
                    </Card.Body>
               </Card>
           </Container>
       </div>
    );
 }

export default App;