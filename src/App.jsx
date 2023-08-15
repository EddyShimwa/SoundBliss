import './App.scss';
import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap'
import Autosuggest from 'react-autosuggest';


const CLIENT_ID = "a131e571b4b24202a083d7883e1245ca";
const CLIENT_SECRET = "53b760fc65434940b3285a2e27bda784" ;

const App = () => {
   
   const [searchInput, setSearchInput] = useState("");
   const [accessToken, setAccessToken] = useState("")
   const [albums, setAlbums] = useState([]);

     // Autocomplete suggestions state
  const [suggestions, setSuggestions] = useState([]);


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
  var searchParameters = {
     method: 'Get',
     headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
     }
   }
     var artistId = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
     .then(response => response.json())
     .then(data => { return data.artists.items[0].id })

       // Get request with artist ID grab all all albums from that aartist
       var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistId + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters) 
       .then(response => response.json())
       .then(data => {
          console.log(data);
          setAlbums(data.items)
       });

       setSuggestions([]);
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
               {albums.map((album, i) => {
               return (
               <Card>
              <Card.Img src={album.images[0].url} />
               <Card.Body>
              <Card.Title>{album.name}</Card.Title>
         </Card.Body>
      </Card>
)
     })}
          </Row>
         
           </Container>
       </div>
    );
 }

export default App;