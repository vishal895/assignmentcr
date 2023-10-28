import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="bg-color px-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="search-bar">
        <SearchIcon/>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <h1 className='head'>FreeCoderCamp()</h1>
        <div className="d-flex justify-content-between gap-2">
        <button  class="btn btn-dark">Menu</button>
        <Link to="/login" class="btn btn-warning">Sign in</Link>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
