import { AiOutlineSearch } from "react-icons/ai";
function Header() {
  return (
    <div class="nav">
      <div class="home">Home</div>
      <div class="search">
        <input type="text" placeholder="search" name="search"></input>
        <AiOutlineSearch></AiOutlineSearch>
      </div>
    </div>
  );
}
export default Header;
