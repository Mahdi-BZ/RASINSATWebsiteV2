import React from "react";
import cards from "../json/cards";

import ShopModal from "./ShopModal";
import InnerImageZoom from "react-inner-image-zoom";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';




const Shop = () => {
  

  const displayCards = () => {
    return cards.map((c, i) => 
    <div className="card" key={i}>
      <div className="image" style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
        <Zoom>
          <img src={`${process.env.PUBLIC_URL}/imgs/shop/${c.imgURL}`} width="300px" height="300px" alt=""/>
        </Zoom>
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
          <button id="shopModalButton" className="ui right floated primary button " data-toggle="modal" data-target="#shopModal" data-price={c.price} data-name={c.name}>Buy</button>
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
      <ShopModal />
    </div>
  );
};

export default Shop;
