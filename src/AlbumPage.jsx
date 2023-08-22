import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AlbumPage = ({ accessToken }) => {  // Pass accessToken as a prop
  const { albumId } = useParams();
  const [albumSongs, setAlbumSongs] = useState([]);

  useEffect(() => {
    async function fetchAlbumSongs() {
      try {
        const searchParameters = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
          },
        };
        
        const albumSongsResponse = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, searchParameters);
        const albumSongsData = await albumSongsResponse.json();
        
        // Update the state with the fetched album songs
        setAlbumSongs(albumSongsData.items);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    fetchAlbumSongs();
  }, [accessToken, albumId]);  // Include accessToken as a dependency

  return (
    <div>
      <h2>Album songs</h2>
      <ul>
        {albumSongs.map((song, index) => (
          <li key={index}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPage;
