import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { data: genre } = useFetch("/genre/movie/list");
  const url = import.meta.env.VITE_IMAGE_URL;

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];
    const exists = saved.some((movie) => movie.id === item.id);
    setIsSaved(exists);
  }, [item.id]);

  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];

    if (isSaved) {
      const updated = saved.filter((movie) => movie.id !== item.id);
      localStorage.setItem("savedMovies", JSON.stringify(updated));
      setIsSaved(false);
    } else {
      const updated = [...saved, item];
      localStorage.setItem("savedMovies", JSON.stringify(updated));
      setIsSaved(true);
    }
  };

  const getGenres = () => {
    if (!genre?.genres || !item.genre_ids) return [];
    return genre.genres
      .filter((g) => item.genre_ids.includes(g.id))
      .map((g) => g.name);
  };

  const genreNames = getGenres();

  return (
    <div className="bg-[#1D1D1D] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto">
      <div className=" overflow-hidden">
        <img
          onClick={() => navigate(`/movie/${item.id}`)}
          loading="lazy"
          src={url + item.poster_path}
          alt={item.title}
          className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between gap-2">
          <h3 className="text-white font-semibold mb-1 truncate">
            {item.title}
          </h3>
          <div
            onClick={handleSave}
            className="  text-[#C61F1F] text-xl cursor-pointer"
          >
            {isSaved ? (
              <FaBookmark color="red" />
            ) : (
              <FaRegBookmark color="red" />
            )}
          </div>
        </div>
        <p className="text-gray-400 text-sm">{item.original_language}</p>
        <p className="text-gray-500 text-xs">{genreNames.join(", ")}</p>
      </div>
    </div>
  );
};

export default React.memo(Card);

