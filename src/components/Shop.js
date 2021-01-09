import React from "react";
import cards from "../json/cards";

const Shop = () => {
  

  const displayCards = () => {
    return cards.map((c, i) => 
    <div className="card">
      <div className="image">
        <img src="https://via.placeholder.com/150" alt=""/>
      </div>
      <div className="content">
        <span className="header">{c.name}</span>
        <div className="description">
          {c.description}
        </div>
      </div>
      <div className="extra">
          <div className="price">
            {c.price}DT
          </div>
          <button className="ui right floated primary button ">Buy</button>
      </div>
    </div>
    )
  } 
        
  

  return (
    <div className="shop">
      <div className="ui container">
        <h2 className="section-header">Shop</h2>
        <div className="ui three stackable cards">
          {displayCards()}
        </div>
      </div>
    </div>
  );
};

export default Shop;
