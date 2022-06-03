import { Link } from "react-router-dom";
function Songs() {

  return (
    <div>
      <div id="s">
        <div id="s1">Top 10 Songs</div>
        <div id="s2">
          <Link id="s3" to="/AddNewSong">+ Add Song</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Songs;
