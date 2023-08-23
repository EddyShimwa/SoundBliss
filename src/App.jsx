import Albums from "./AlbumsPage"
import HomePage from "../homePage";
import AboutPage from "../aboutPage";
import { Route, Routes } from "react-router-dom";


const App = () => {

return (

  <Routes>
    <Route path="/" element={<Albums />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    {/* <Route path="/album/:albumId" element={<AlbumList albums={albums} onAlbumClick={handleAlbumClick} />} /> */}
    {/* <Route path="/album/:albumId" element={<Albums accessToken={accessToken} />} /> */}
  </Routes>

);
};

export default App;