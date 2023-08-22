// AlbumDetails.js
import { useState, useEffect } from 'react';

const AlbumDetails = ({ albumId }) => {
  const [albumDetails, setAlbumDetails] = useState(null);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      const searchParameters = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      };
  
      try {
        // Fetch album details
        const albumDetailsResponse = await fetch(`https://api.spotify.com/v1/albums/${albumId}`, searchParameters);
        const albumDetailsData = await albumDetailsResponse.json();
  
        // Fetch tracks for the album
        const albumTracksResponse = await fetch(`https://api.spotify.com/v1/albums/${albumId}/tracks`, searchParameters);
        const albumTracksData = await albumTracksResponse.json();
         console.log(albumTracksData)
        // Set album details including tracks
        setAlbumDetails({
          ...albumDetailsData,
          tracks: albumTracksData.items
        });
      } catch (error) {
        console.error('Error fetching album details and tracks:', error);
      }
    };
  
    if (albumId) {
      fetchAlbumDetails();
    }
  }, [albumId, accessToken]);;

  if (!albumDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={albumDetails.images[0].url} alt={albumDetails.name} />
      <h2>{albumDetails.name}</h2>
      <ul>
        {albumDetails.tracks.map((track, index) => (
          <li key={index}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumDetails;
