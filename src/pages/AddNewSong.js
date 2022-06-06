import React, { useState, memo } from "react";
import Multiselect from "multiselect-react-dropdown";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";
function AddNewSong() {
  const [isOpen, setIsOpen] = useState(false);

  const openPop = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const [artist, setArtist] = useState([
    "Arijit Singh",
    "Alka Yagnik",
    "Udit Narayan",
    "Jubin Nautiyal",
    "Pawandeep Rajan",
  ]);
  const [data, setData] = useState({ date: "", artistname: "" ,bio: ""});
  const [touched, setTouched] = useState({ artistname: false, date: false,bio:false });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const changedInput = event.target.name;
    setData({ ...data, [changedInput]: event.target.value });
  };
  const handleBlur = (event) => {
    const blurredInput = event.target.name;
    setTouched({ ...touched, [blurredInput]: true });
  };
  let artistnameError = "";
  let dateBirthError = "";
  let bioError="";

  if (!data.artistname) {
    artistnameError = "*Artist Name  is required";
  } else if (data.artistname.length < 2) {
    artistnameError = "*please enter full artist name";
  } else {
    artistnameError = "";
  }
  
  if (!data.date) {
    dateBirthError = "*date of birth is Required";
  } else dateBirthError = "";
  if (!data.bio) {
    bioError = "*Bio is Required";
   } 
  // else bioError = "";

  return (
    <>
      {isOpen && (
        // fun()
        <Popup
          content={
            <>
              <form
                class="popup-form-control"
                onSubmit={(event) => {
                  event.preventDefault();
                  console.log(data);
                }}
              >
                <h1 style={{ marginLeft: "10px" }}>Add Artist</h1>
                <div className="input-controls">
                  <div className="input-names">
                    <div className="name">Artist Name</div>
                    <div className="name">date of Birth</div>
                    <div className="name">Bio</div>
                  </div>
                  <div className="input-div">
                    <div className="input">
                      <input
                        name="artistname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        value={data.artistname}
                        autoComplete="off"
                      />
                      {touched.artistname && (
                        <div className="input errorMessage">
                          {artistnameError}
                        </div>
                      )}
                      {/* </input> */}
                    </div>
                    <div className="input">
                      <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={data.date}
                        autoComplete="off"
                      />
                      {touched.date && (
                        <div className="input errorMessage">
                          {dateBirthError}
                        </div>
                      )}
                    </div>
                    <div className="input">
                      <textarea 
                      tupe="bio"
                      name="bio"
                      value={data.bio}
                      onChange={handleChange}
                      onBlur={handleBlur}></textarea>
                      {touched.bio && (
                        <div className="input errorMessage">
                          {bioError}
                        </div>
                      )}
                    </div>
                    <div className="input">
                      <button type="submit">Done</button>
                      <button onClick={openPop}>Cancel</button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          }
          handleClose={openPop}
        />
      )}
      <form
        className="form-control"
        onSubmit={(event) => {
          // console.log("rge");
          event.preventDefault();
          setSubmitting(true);
        }}
      >
        <h1 style={{ marginLeft: "10px" }}>Adding a new Song</h1>
        <div className="input-controls">
          <div className="input-names">
            <div className="name">Song Name</div>
            <div className="name">Date Released</div>
            <div className="name">Artwork</div>
            <div className="name">Artist</div>
          </div>
          <div className="input-div">
            <div className="input">
              <input type="text"></input>
            </div>
            <div className="input">
              <input type="text"></input>
            </div>
            <div className="input">
              <input type="file"></input>
            </div>
            <div className="input" id="add-artist">
              <Multiselect
                isObject={false}
                // onRemove={(event)=>{console.log(event)}}
                // onSelect={(event)=>{console.log(event)}}
                options={artist}
                showCheckbox
              />
              <button onClick={openPop} className="add-art-button">
                {" "}
                + Add Artist
              </button>
            </div>
            <div className="input-btn">
              <button>Save</button>
              <div className="cancel-btn">
                <Link to="/" id="cancel-btn-color">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default memo(AddNewSong);
