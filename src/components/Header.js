import { useDispatch, useSelector } from "react-redux";
import { dark, light, logo, menu, search } from "../assets";
import { toggleMenu, toggleTheme } from "../services/redux/reducer/appSlice";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { cacheResult } from "../services/redux/reducer/searchSlice";
import { addSearchQuery } from "../services/redux/reducer/searchResult";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.darkMode);
  const searchCache = useSelector((store) => store.search);

  if (theme) {
    document.getElementsByTagName("html")[0].setAttribute("class", "dark");
  } else {
    // document.body.classList.remove("dark")
    document.getElementsByTagName("html")[0].removeAttribute("class", "dark");
  }

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSearchSelect = (s) => {
    dispatch(addSearchQuery(s))
  }
  return (
    <nav className="flex items-center p-5 w-screen justify-between shadow-lg">
      <div className="flex items-center gap-5">
        <img
          onClick={handleToggleMenu}
          src={menu}
          className="w-4 h-6 cursor-pointer"
          alt="menu"
        />
        <img className="w-20 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="relative flex items-center">
        <input
          className="border border-slate-400 w-96 pl-2 py-2 rounded-l-full focus:outline-none"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          placeholder="Search"
        />
        <button className="border border-slate-400 py-2 px-3 rounded-r-full">
          <img className="w-6" src={search} alt="search" />
        </button>
        {showSuggestions && (
          <div className="absolute top-full mt-2 bg-white py-2 px-2 w-full shadow-lg rounded-lg border border-gray-100 z-10">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  onMouseDown={()=>handleSearchSelect(s)}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          onClick={handleToggleTheme}
          className="w-8 cursor-pointer"
          src={theme ? light : dark}
          alt="theme-toggle"
        />
        <span></span>
      </div>
    </nav>
  );
};

export default Header;
