import './App.scss';
import { useState, useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { songsdata } from './audios';
// import Player from './player';
// import store from './Redux/configureStore';
// import Dropdown from './dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'

const CLIENT_ID = "a131e571b4b24202a083d7883e1245ca";
const CLIENT_SECRET = "53b760fc65434940b3285a2e27bda784" ;

const App = () => {
   
   const [searchInput, setSearchInput] = useState("");
   const [accessToken, setAccessToken] = useState("")
//    const [currentSong, setCurrentSong] = useState(songsdata[0]);
//    const audioElem = useRef();

   const data = [
     {value: 1, name: 'A'},
     {value: 2, name: 'B'},
     {value: 3, name: 'C'}
 ]

   useEffect(() => {
     var authParamaters = {
          method: 'POST',
          headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
     }

      fetch('https://accounts.spotify.com/api/token', authParamaters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
   }, [])
   
async function search() {
     console.log("searching for " + searchInput)

     // Get request using search to get the artist ID
  var artistParameters = {
     method: 'Get',
     headers: {
          content
     }
  }
     var artisId = await fetch('https://api.spotify.com/v1/search')
       // Get request with artist ID grab all all albums from that aartist

       //display those albums to the user
}

    return (
       <div className="App">
       
        <Container>
           <InputGroup>
             <FormControl 
                placeholder= "Search for artist"
                type = "input"
                onKeyPress={event => {
                    if(event.key == "Enter"){
                         search()
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
           <Row className="mx-2 row row-cols-4">
               <Card>
                    <Card.Img src="#" />
                    <Card.Body>
                         <Card.Title>Album name</Card.Title>
                    </Card.Body>
               </Card>
          </Row>
         
           </Container>
       </div>
    );
 }

export default App;