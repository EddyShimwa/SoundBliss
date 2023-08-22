import { Link } from 'react-router-dom';

const AlbumList = ({ albums, onAlbumClick }) => {
  return (
    <div className="container mt-28 flex justify-center">
      <div className="grid grid-cols-1 gap-4 w-80">
        {albums.length === 0 ? (
          <p className="text-center text-blue-600 font-semibold">Album not found</p>
        ) : (
          albums.map((album, i) => (
            <Link
              to={`/album/${album.id}`} // Navigate to the album page
              className="bg-slate-200 rounded-lg shadow-md p-4"
              key={i}
              onClick={() => onAlbumClick(album.id)}
            >
              <img src={album.images[0].url} alt={album.name} className="w-80 h-auto" />
              <h2 className="text-lg font-semibold mt-2 text-center text-gray-700">{album.name}</h2>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AlbumList;
