import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const url = import.meta.env.VITE_IMAGE_URL;

  return (
    <div className="bg-[#1D1D1D] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto">
      <div className="overflow-hidden">
        <img
          onClick={() => navigate(`/movie/${item.id}`)}
          loading="lazy"
          src={url + item.poster_path}
          alt={item.title}
          className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold mb-1 truncate">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.vote_average}/10</p>
      </div>
    </div>
  );
};

export default React.memo(Card);
