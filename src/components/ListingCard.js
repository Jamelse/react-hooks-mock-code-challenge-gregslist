import React, {useState} from "react";

function ListingCard({listing, onDeleteCLick}) {
  const [favorite, setFavorite] = useState(false)

function favoriteClickHandler(){
    setFavorite((favorite) => !favorite)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => onDeleteCLick(listing))
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={favoriteClickHandler}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={favoriteClickHandler}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
