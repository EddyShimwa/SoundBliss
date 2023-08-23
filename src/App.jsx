import Albums from "./AlbumsPage"



const App = () => {

return (

  <Routes>
    <Route path="/album/:albumId" element={<AlbumList albums={albums} onAlbumClick={handleAlbumClick} />} />
    <Route path="/album/:albumId" element={<Albums accessToken={accessToken} />} />
  </Routes>

);
};

export default App;