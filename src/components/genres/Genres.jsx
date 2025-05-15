import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Genres = ({ setGenre }) => {
  const { data } = useFetch("/genre/movie/list");
  const [visibleCount, setVisibleCount] = useState(7);
  const [activeGenre, setActiveGenre] = useState(null);


  if (!data)
    return (
      <div className="flex justify-center items-center h-16 text-white">
        <div className="animate-pulse flex space-x-2">
          <div className="h-2 w-2 bg-white rounded-full"></div>
          <div className="h-2 w-2 bg-white rounded-full"></div>
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
    );

  const handleGenreClick = (id, name) => {
    setGenre(id);
    setActiveGenre(id);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 7, data.genres.length));
  };

  const hasMoreGenres = visibleCount < data.genres.length;
  const visibleGenres = data.genres.slice(0, visibleCount);

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between mb-3">
        {hasMoreGenres && (
          <button
            onClick={handleShowMore}
            className="text-red-500 text-sm hover:text-red-400 transition-colors"
          >
            More
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {visibleGenres.map((item) => (
          <button
            onClick={() => handleGenreClick(item.id.toString(), item.name)}
            className={`px-4 py-2 rounded-full cursor-pointer transition-colors duration-200 
              ${
                activeGenre === item.id.toString()
                  ? "bg-red-700 text-white"
                  : "bg-[#C61F1F] hover:bg-red-700 text-white"
              }`}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genres;
