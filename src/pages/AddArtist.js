function AddArtist() {
  return (
    <form class="form-control">
      <h1 style={{ marginLeft: "10px" }}>Add Artist</h1>
      <div className="input-controls">
        <div className="input-names">
          <div className="name">Artist Name</div>
          <div className="name">Date of Birth</div>
          <div className="name">Bio</div>
        </div>
        <div className="input-div">
          <div className="input">
            <input type="text"></input>
          </div>
          <div className="input">
            <input type="date"></input>
          </div>
          <div className="input">
            <textarea></textarea>
          </div>
          <div className="input">
          <button>Cancel</button>
        <button>Done</button>
          </div>
        </div>
        
      </div>
    </form>
  );
}
export default AddArtist;
