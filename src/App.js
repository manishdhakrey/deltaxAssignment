import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Songs from "./components/Songs";
import Artists from "./components/Artists";
import Song from "./components/Song";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"
import Artist from "./components/Artist";
import AddNewSong from "./pages/AddNewSong";
import AddArtist from "./pages/AddArtist";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Songs></Songs>
      
      <Song Artwork={img1} song="Pachtaoge" dateOfRelease="August 23,2019" Artist="Arijit Singh" ></Song>
      <Song Artwork={img2} song="Lut Gaye" dateOfRelease="February 17,2021" Artist="Jubin Nautiyal" ></Song>
      <Song Artwork={img3} song="Lily" dateOfRelease="December 14,2018" Artist="Alan Walker" ></Song>
      <Song Artwork={img4} song="Main Yahan Hoon" dateOfRelease="July 21,2004" Artist="Udit Narayan" ></Song>
      <Artists></Artists>
      <Artist name="Arijit Singh" dob="29 August 1992" songslist="Pachtaoge,Humdard,Naina"></Artist>
      <Artist name="Arijit Singh" dob="29 August 1992" songslist="Pachtaoge,Humdard,Naina"></Artist>
      <Artist name="Arijit Singh" dob="29 August 1992" songslist="Pachtaoge,Humdard,Naina"></Artist>
      <Artist name="Arijit Singh" dob="29 August 1992" songslist="Pachtaoge,Humdard,Naina"></Artist> */}
      
        {/* <AddNewSong></AddNewSong>
        {/* <AddArtist></AddArtist> */}
      
    </div>
  );
}

export default App;
