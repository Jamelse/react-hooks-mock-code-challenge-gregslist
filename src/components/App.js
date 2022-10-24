import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then((listing) => {
      setListings(listing)
    })
  }, [])

  function onDeleteHandler(deletedListing){
    const filteredListings = listings.filter((list) => {
      return list.id !== deletedListing.id
    })
    setListings(filteredListings)
  }

  function searchHandler(currentSearch){
    setSearch(currentSearch)
  }
  
  return (
    <div className="app">
      <Header onSearchSubmit={searchHandler}/>
      <ListingsContainer listings={listings} 
      onDeleteCLick={onDeleteHandler}
      searched={search}/>
    </div>
  );
}

export default App;
