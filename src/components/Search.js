import React, {useState} from "react";

function Search({onSearchSubmit}) {
  const [currrentSearch, setCurrentSearch] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(currrentSearch)
   }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currrentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
