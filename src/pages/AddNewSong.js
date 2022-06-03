
import { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
function AddNewSong() {
  const[artist,setArtist] = useState([
    "Arijit Singh",
    "Alka Yagnik",
    "Udit Narayan",
    "Jubin Nautiyal",
    "Pawandeep Rajan",
  ])
  return (
    <form className="form-control">
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
          <div className="input">
            <Multiselect
              isObject={false}
              onRemove={(event)=>{console.log(event)}}
              onSelect={(event)=>{console.log(event)}}
              options={artist}
              showCheckbox
            />
            
            <button> + Add Artist</button>
          </div>
          <div className="input">
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default AddNewSong;
