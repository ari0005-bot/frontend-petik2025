import { useState } from "react";

const Search = ({ totalPost, onSearchChange }) => {
  const [search, setSearch] = useState("keyword");

  const handleChangeSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    onSearchChange(keyword);
  };

  return (
    <div>
      Cari artikel: <input type="text" onChange={handleChangeSearch} />
      <br />
      <small>
        Ditemukan <b>{totalPost}</b> data dengan pencarian kata <b>{" "}</b>
        <b>{search}</b>
      </small>
    </div>
  );
};

export default Search;
