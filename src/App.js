import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Songs from "./components/Songs";
import Artists from "./components/Artists";
import Song from "./components/Song";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import Artist from "./components/Artist";
import AddNewSong from "./pages/AddNewSong";
import AddArtist from "./pages/AddArtist";
import SubHeading1 from "./components/SubHeading1";
import SubHeading2 from "./components/SubHeading2";

import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Songs></Songs>
          <div id="design1">
            <SubHeading1></SubHeading1>
            <Song
              Artwork={img1}
              song="Pachtaoge"
              dateOfRelease="August 23,2019"
              Artist="Arijit Singh"
            ></Song>
            <Song
              Artwork={img2}
              song="Lut Gaye"
              dateOfRelease="February 17,2021"
              Artist="Jubin Nautiyal"
            ></Song>
            <Song
              Artwork={img3}
              song="Lily"
              dateOfRelease="December 14,2018"
              Artist="Alan Walker"
            ></Song>
            <Song
              Artwork={img4}
              song="Main Yahan Hoon"
              dateOfRelease="July 21,2004"
              Artist="Udit Narayan"
            ></Song>
          </div>
          <Artists></Artists>
          <div id="design2">
            <SubHeading2></SubHeading2>
            <Artist
              name="Arijit Singh"
              dob="25 April 1987"
              songslist="Pachtaoge,Humdard,Naina"
            ></Artist>
            <Artist
              name="Jubin Nautiyal"
              dob="14 June 1987"
              songslist="Lut Gaye,Tum Hi AAna,Dil Galti Kar Baitha Hai"
            ></Artist>
            <Artist
              name="Alan Walker"
              dob="14 August 1997"
              songslist="Lily,On My Way,Alone II"
            ></Artist>
            <Artist
              name="Udit Narayan"
              dob="1 December 1955"
              songslist="Maahi Ve,Main Yahaan hoon Yahan,Tip Tip"
            ></Artist>
          </div>
        </Route>
        <Route exact path="/AddNewSong">
          <AddNewSong />
          {/* <AddArtist></AddArtist> */}
        </Route>
      </Switch>
  );
}

export default App;
