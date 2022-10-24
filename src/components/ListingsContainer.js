import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteCLick, searched}) {
  
  const searchedListings = listings.filter((list) => {
    return list.description.toLowerCase().includes(searched.toLowerCase()) 
  })
  
  return (
    <main>
      <ul className="cards">
        {searchedListings.map((list) => {
          return (<ListingCard key={list.id} listing={list} onDeleteCLick={onDeleteCLick}/>)
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
