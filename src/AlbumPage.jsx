import { useParams } from 'react-router-dom';

const AlbumPage = () => {
  const { albumId } = useParams();
  const [albumSongs, setAlbumSongs] = useState([]);

  useEffect(() => {
    async function fetchAlbumSongs() {
        // Fetch album songs using the albumId
        // ... (similar to your existing fetchSongsForAlbum function)
        
        // Update the state with the fetched album songs
        setAlbumSongs(albumSongsData.items);
      }
      
    fetchAlbumSongs();
  }, [albumId]);

  return (
    <div>
       <ul>
        {albumSongs.map((song, index) => (
          <li key={index}>{song.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPage;
