import React from "react";

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div>
      <div>
        <img src={url + item.poster_path} alt="" />
      </div>
      <div>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default React.memo(Card);
