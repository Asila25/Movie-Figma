import React, { useEffect, useState } from "react";
import Card from "../../components/movie-view/Card";

const Saved = () => {
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];
    setSavedMovies(saved);
  }, []);

  return (
    <div className="p-4 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {savedMovies.length > 0 ? (
        savedMovies.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <p className="text-[#4D4D4D] text-center col-span-full">
          Нет сохраненных фильмов
        </p>
      )}
    </div>
  );
};

export default React.memo(Saved);
