import React from "react";
import Card from "./Card";

const MovieView = ({ data }) => {
  console.log(data);

  return (
    <div className="container mx-auto grid grid-cols-4 gap-5">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(MovieView);
