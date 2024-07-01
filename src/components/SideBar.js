import { useSelector } from "react-redux";
import { home, music, sports } from "../assets";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // console.log(isMenuOpen);
  return (
    isMenuOpen && (
      <aside className="p-4 w-52 mr-5">
        <Link to="/">
          <div className="flex items-center gap-3 mb-4">
            <img className="w-8" src={home} alt="icon" />
            <span>Home</span>
          </div>
        </Link>
        <div className="flex items-center gap-3 mb-4">
          <img src={sports} className="w-8" alt="icon" />
          <span>Sports</span>
        </div>
        <div className="flex items-center gap-3  mb-4">
          <img src={music} className="w-8" alt="icon" />
          <span>Music</span>
        </div>
      </aside>
    )
  );
};

export default SideBar;
