import React from "react";
import { useFetch } from "../../hooks/useFetch";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");
  const selectedGenres = genres ? genres.split("-").filter(Boolean) : [];

  if (!data)
    return (
      <div className="flex justify-center items-center h-16 text-white my-2.5">
        <div className="animate-pulse flex space-x-2">
          <div className="h-2 w-2 bg-white rounded-full"></div>
          <div className="h-2 w-2 bg-white rounded-full"></div>
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto py-4 my-5">
      <div className="overflow-x-auto whitespace-nowrap py-2">
        {data.genres.map((item) => {
          const isActive = selectedGenres.includes(item.id.toString());

          return (
            <button
              key={item.id}
              onClick={() => handleChangeGenre(item.id.toString())}
              className={`inline-block mx-1 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? "bg-red-400 text-white"
                    : "bg-[#C61F1F] hover:bg-red-800 text-white"
                }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
