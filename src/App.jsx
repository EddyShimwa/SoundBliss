import './App.css';
import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const CLIENT_ID = "a131e571b4b24202a083d7883e1245ca";
const CLIENT_SECRET = "53b760fc65434940b3285a2e27bda784" ;

const App = () => {
   
   const [searchInput, setSearchInput] = useState("");
   const [accessToken, setAccessToken] = useState("")
   const [albums, setAlbums] = useState([]);
  
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
}

return (
<div className="App">
  <div className="container">
    <div className="flex items-center justify-center mt-8">
      <input
        className="border rounded py-2 px-3 w-1/2"
        placeholder="Search for artist"
        type="input"
        onKeyPress={event => {
          if (event.key === "Enter") {
            search();
            // console.log("pressed enter");
          }
        }}
        onChange={event => setSearchInput(event.target.value)}
      />
      <button className="bg-blue-500 text-white rounded py-2 px-3 ml-3" onClick={() => console.log("clicked button")}>
        Search
      </button>
    </div>
  </div>
  <div className="container mt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.map((album, i) => {
        return (
          <div className="bg-white rounded shadow-md p-4" key={i}>
            <img src={album.images[0].url} alt={album.name} className="w-full h-auto" />
            <h2 className="text-lg font-semibold mt-2">{album.name}</h2>
          </div>
        );
      })}
    </div>
  </div>
</div>
 );
 
 }

export default App;