import React from "react";

export const PokemonThumnail = ({ id, image, name, type, _callback }) => {
  const style = type + " thumb-container";

  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <div className="detail-wrapper">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <small>{type}</small>
      </div>
    </div>
  );
};
